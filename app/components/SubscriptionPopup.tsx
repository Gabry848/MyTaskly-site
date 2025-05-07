"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent as BaseDialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog'
import WaitlistForm from './WaitlistForm'
import { useWaitlistRegistration } from '@/hooks/use-waitlist-registration'
import { useCookieConsent } from '@/hooks/use-cookie-consent'

// Componente DialogContent personalizzato che estende BaseDialogContent senza il pulsante di chiusura originale
const DialogContent = React.forwardRef<
  React.ElementRef<typeof BaseDialogContent>,
  React.ComponentPropsWithoutRef<typeof BaseDialogContent>
>(({ className, children, ...props }, ref) => (
  <BaseDialogContent 
    ref={ref} 
    className={className} 
    {...props} 
    // Questo attributo nasconde il pulsante di chiusura predefinito
    data-no-close-button
  >
    {children}
  </BaseDialogContent>
));
DialogContent.displayName = "CustomDialogContent";

export default function SubscriptionPopup() {
  const [open, setOpen] = useState(false)
  const { isRegistered } = useWaitlistRegistration()
  const { isCookieBannerClosed } = useCookieConsent()

  useEffect(() => {
    // Mostra il popup solo se:
    // 1. L'utente ha chiuso il banner dei cookie
    // 2. L'utente NON si è ancora registrato alla waitlist
    if (isCookieBannerClosed && !isRegistered) {
      const timer = setTimeout(() => setOpen(true), 10000)
      return () => clearTimeout(timer)
    }
  }, [isCookieBannerClosed, isRegistered])

  // Non renderizzare nulla se l'utente è già registrato
  if (isRegistered) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay className="touch-auto" />
      <DialogContent className="w-[95%] max-w-lg p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="text-center mb-2">Iscriviti alla waitlist</DialogTitle>
        <DialogDescription className="text-center mb-3">Ricevi 3 mesi gratis e uno sconto del 30% iscrivendoti subito alla nostra lista d'attesa.</DialogDescription>
        <WaitlistForm />
        <DialogClose className="absolute right-2 top-2 sm:right-4 sm:top-4 rounded-full p-2 bg-secondary/50 text-secondary-foreground hover:bg-secondary z-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Chiudi</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}