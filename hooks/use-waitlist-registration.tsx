"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface WaitlistRegistrationContextType {
  isRegistered: boolean;
  markAsRegistered: () => void;
  hasAccess: () => boolean;
}

const WaitlistRegistrationContext = createContext<WaitlistRegistrationContextType | undefined>(undefined);

interface WaitlistRegistrationProviderProps {
  children: ReactNode;
}

export function WaitlistRegistrationProvider({ children }: WaitlistRegistrationProviderProps) {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    // Controlla se l'utente è già registrato guardando il localStorage
    const registered = localStorage.getItem('waitlist-registered');
    if (registered === 'true') {
      setIsRegistered(true);
    }
  }, []);

  const markAsRegistered = () => {
    setIsRegistered(true);
    localStorage.setItem('waitlist-registered', 'true');
  };

  const hasAccess = () => {
    // Per ora tutti gli utenti registrati hanno accesso
    // In futuro potresti implementare una logica più complessa
    return isRegistered;
  };

  return (
    <WaitlistRegistrationContext.Provider value={{
      isRegistered,
      markAsRegistered,
      hasAccess
    }}>
      {children}
    </WaitlistRegistrationContext.Provider>
  );
}

export function useWaitlistRegistration() {
  const context = useContext(WaitlistRegistrationContext);
  if (context === undefined) {
    throw new Error('useWaitlistRegistration must be used within a WaitlistRegistrationProvider');
  }
  return context;
}