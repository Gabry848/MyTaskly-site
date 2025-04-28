"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

interface LazyScriptProps {
  src: string;
  id?: string;
  strategy?: "afterInteractive" | "lazyOnload" | "beforeInteractive";
  onLoad?: () => void;
  defer?: boolean;
  async?: boolean;
}

/**
 * Componente per caricare script JavaScript in modo ottimizzato
 * - Ritarda il caricamento degli script non critici
 * - Utilizza Intersection Observer per caricare gli script quando l'utente si avvicina a una sezione
 * - Supporta diverse strategie di caricamento
 */
export default function LazyScript({
  src,
  id,
  strategy = "lazyOnload",
  onLoad,
  defer = true,
  async = true,
}: LazyScriptProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Se la strategia è afterInteractive, carica immediatamente dopo l'interattività
    if (strategy === "afterInteractive") {
      setShouldLoad(true);
      return;
    }

    // Per lazyOnload, utilizziamo Intersection Observer per ritardare il caricamento
    // finché l'utente non scorre la pagina o non c'è inattività
    if (strategy === "lazyOnload") {
      // Primo metodo: carica quando l'utente ha avuto un'interazione con la pagina
      const handleUserInteraction = () => {
        setShouldLoad(true);
        cleanup();
      };

      // Secondo metodo: carica quando l'utente è inattivo
      const timer = setTimeout(() => {
        if (document.visibilityState === "visible") {
          setShouldLoad(true);
        }
      }, 5000); // Attendi 5 secondi di inattività

      // Terzo metodo: carica quando l'utente scorre oltre un certo punto
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "800px" } // Carica quando sei a 800px dalla sezione
      );

      // Osserva un elemento a circa metà pagina
      const target = document.getElementById("lazy-load-trigger");
      if (target) {
        observer.observe(target);
      } else {
        // Se non troviamo l'elemento trigger, osserviamo il body
        observer.observe(document.body);
      }

      // Aggiungi eventi per interazione utente
      window.addEventListener("scroll", handleUserInteraction, { once: true });
      window.addEventListener("touchstart", handleUserInteraction, { once: true });
      window.addEventListener("mousedown", handleUserInteraction, { once: true });

      const cleanup = () => {
        window.removeEventListener("scroll", handleUserInteraction);
        window.removeEventListener("touchstart", handleUserInteraction);
        window.removeEventListener("mousedown", handleUserInteraction);
        observer.disconnect();
        clearTimeout(timer);
      };

      return cleanup;
    }
  }, [strategy]);

  if (!shouldLoad && strategy !== "beforeInteractive") {
    return null;
  }

  return (
    <Script
      src={src}
      id={id}
      strategy={strategy === "beforeInteractive" ? "beforeInteractive" : "lazyOnload"}
      onLoad={onLoad}
      defer={defer}
      async={async}
    />
  );
}