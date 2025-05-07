"use client";

import { useEffect, useState } from "react";

export function useWaitlistRegistration() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Controlla se l'utente si è già registrato alla waitlist
    const registrationStatus = localStorage.getItem("waitlist-registered");
    if (registrationStatus === "true") {
      setIsRegistered(true);
    }
  }, []);

  const markAsRegistered = () => {
    localStorage.setItem("waitlist-registered", "true");
    setIsRegistered(true);
  };

  return {
    isRegistered,
    markAsRegistered
  };
}