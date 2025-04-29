"use client"

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog'
import WaitlistForm from './WaitlistForm'

export default function SubscriptionPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)
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
        <DialogClose className="mt-6 inline-flex justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
          Chiudi
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}