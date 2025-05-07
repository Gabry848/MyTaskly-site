"use client";

import { useState, useEffect } from "react";

export function useCookieConsent() {
  const [isCookieBannerClosed, setIsCookieBannerClosed] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già interagito con il banner dei cookie
    const cookieConsentStatus = localStorage.getItem("termly-consent-status");
    
    // Se l'utente ha già dato il consenso o rifiutato, considera il banner chiuso
    if (cookieConsentStatus) {
      setIsCookieBannerClosed(true);
    }

    // Ascolta gli eventi di Termly per rilevare quando l'utente interagisce con il banner
    const handleConsentStatusChange = () => {
      setIsCookieBannerClosed(true);
    };

    // Aggiungi un listener per catturare quando l'utente chiude il banner
    window.addEventListener("termly:consent-status-changed", handleConsentStatusChange);

    return () => {
      window.removeEventListener("termly:consent-status-changed", handleConsentStatusChange);
    };
  }, []);

  return {
    isCookieBannerClosed
  };
}