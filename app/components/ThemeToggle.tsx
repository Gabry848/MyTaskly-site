"use client"

import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  // Initialize theme on component mount
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Get initial theme state from localStorage or default to dark
      const savedTheme = localStorage.getItem("theme") || "dark"
      setIsDark(savedTheme === "dark")

      // Apply the theme to the document
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"

    // Aggiungi una classe di transizione prima di cambiare tema
    document.documentElement.classList.add("theme-transition")

    // Update state
    setIsDark(!isDark)

    // Save to localStorage
    localStorage.setItem("theme", newTheme)

    // Apply to document
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    // Rimuovi la classe di transizione dopo un breve ritardo
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition")
    }, 500)
  }

  // Aggiungi questa funzione dopo la funzione toggleTheme per applicare le migliorie al tema chiaro
  useEffect(() => {
    // Applica le migliorie al tema chiaro quando non è in modalità dark
    if (!isDark && typeof document !== "undefined") {
      document.body.classList.add("light-theme-improvements")
    } else if (typeof document !== "undefined") {
      document.body.classList.remove("light-theme-improvements")
    }
  }, [isDark])

  // Funzione per applicare accenti personalizzati agli elementi UI
  useEffect(() => {
    const applyCustomAccents = () => {
      // Applica accenti personalizzati a elementi specifici
      const buttons = document.querySelectorAll(".apple-button")
      buttons.forEach((button) => {
        button.classList.add("btn-primary-custom")
      })

      // Applica stili di accento a elementi selezionati
      const accentElements = document.querySelectorAll(".feature-icon, .cta-highlight")
      accentElements.forEach((element) => {
        element.classList.add("accent-element")
      })
    }

    // Esegui dopo il rendering
    if (typeof window !== "undefined") {
      applyCustomAccents()
    }
  }, [isDark]) // Riapplica quando cambia il tema

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label={isDark ? "Passa al tema chiaro" : "Passa al tema scuro"}
    >
      {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </Button>
  )
}
