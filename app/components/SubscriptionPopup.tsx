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
    const timer = setTimeout(() => setOpen(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Iscriviti alla nostra newsletter</DialogTitle>
        <DialogDescription>Rimani aggiornato con tutte le novità e accedi anticipatamente alle funzionalità.</DialogDescription>
        <div className="mt-4">
          <WaitlistForm />
        </div>
        {/* Rimosso il pulsante DialogClose ridondante */}
      </DialogContent>
    </Dialog>
  )
}