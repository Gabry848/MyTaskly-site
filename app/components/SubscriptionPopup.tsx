"use client"

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import WaitlistForm from './WaitlistForm'

export default function SubscriptionPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Controlla se l'utente si è già iscritto
    const hasSubscribed = typeof window !== 'undefined' && localStorage.getItem('waitlist_subscribed') === 'true'
    
    // Mostra il popup solo se l'utente non si è già iscritto
    if (!hasSubscribed) {
      const timer = setTimeout(() => setOpen(true), 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Funzione per chiudere il popup
  const handleClosePopup = () => setOpen(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Iscriviti alla nostra newsletter</DialogTitle>
        <DialogDescription>Rimani aggiornato con tutte le novità e accedi anticipatamente alle funzionalità.</DialogDescription>
        <div className="mt-4">
          <WaitlistForm onSuccessfulSubmission={handleClosePopup} />
        </div>
      </DialogContent>
    </Dialog>
  )
}