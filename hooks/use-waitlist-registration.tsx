"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface WaitlistRegistrationContextType {
  isRegistered: boolean;
  markAsRegistered: () => void;
  hasAccess: () => boolean;
  logout: () => void;
  login: (email: string) => Promise<boolean>;
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

  const logout = () => {
    setIsRegistered(false);
    localStorage.removeItem('waitlist-registered');
  };

  const login = async (email: string): Promise<boolean> => {
    // Validazione email semplice
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    try {
      // Verifica l'email con l'endpoint /verify-waitlist del server Railway
      const response = await fetch('https://mytaskly-site-server-production.up.railway.app/verify-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (result.isRegistered) {
        setIsRegistered(true);
        localStorage.setItem('waitlist-registered', 'true');
        localStorage.setItem('user-email', email);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Errore durante la verifica:', error);
      return false;
    }
  };

  return (
    <WaitlistRegistrationContext.Provider value={{
      isRegistered,
      markAsRegistered,
      hasAccess,
      logout,
      login
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