"use client"

import { useState, useEffect } from "react"
import { SunIcon, MoonIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // Initialize theme on component mount
  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== "undefined") {
      // Get initial theme state from localStorage or system preference
      const storedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false
      const resolvedTheme = storedTheme || (prefersDark ? "dark" : "light")

      setIsDark(resolvedTheme === "dark")

      // Apply the theme to the document
      if (resolvedTheme === "dark") {
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
