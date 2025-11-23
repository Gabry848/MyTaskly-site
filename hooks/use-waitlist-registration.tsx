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

  const getCookieValue = (name: string) => {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
    const found = cookies.find((cookie) => cookie.startsWith(`${name}=`));
    return found ? decodeURIComponent(found.split('=')[1]) : null;
  };

  useEffect(() => {
    // Controlla se l'utente e gia registrato guardando il localStorage o il cookie impostato dal middleware
    const registered = localStorage.getItem('waitlist-registered') === 'true';
    const cookieRegistered = getCookieValue('waitlist-registered') === 'true';
    const emailFromCookie = getCookieValue('user-email');

    if (registered || cookieRegistered) {
      setIsRegistered(true);
      localStorage.setItem('waitlist-registered', 'true');
      if (emailFromCookie) {
        localStorage.setItem('user-email', emailFromCookie);
      }
    }
  }, []);

  const markAsRegistered = () => {
    setIsRegistered(true);
    localStorage.setItem('waitlist-registered', 'true');
  };

  const hasAccess = () => {
    // Per ora tutti gli utenti registrati hanno accesso
    // In futuro potresti implementare una logica piu complessa
    return isRegistered;
  };

  const logout = () => {
    setIsRegistered(false);
    localStorage.removeItem('waitlist-registered');
    localStorage.removeItem('user-email');
    document.cookie = 'waitlist-registered=; path=/; max-age=0';
    document.cookie = 'user-email=; path=/; max-age=0';
  };

  const login = async (email: string): Promise<boolean> => {
    // Validazione email semplice
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    try {
      // Passa attraverso la rotta di middleware che invia l'email alla waitlist e poi reindirizza ai membri
      const waitlistLoginUrl = new URL('/waitlist-login', window.location.origin);
      waitlistLoginUrl.searchParams.set('email', email);

      setIsRegistered(true);
      localStorage.setItem('waitlist-registered', 'true');
      localStorage.setItem('user-email', email);

      window.location.href = waitlistLoginUrl.toString();
      return true;
    } catch (error) {
      console.error('Errore durante la registrazione alla waitlist:', error);
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
