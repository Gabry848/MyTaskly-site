"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, Twitter, Instagram } from "lucide-react"
import { useLanguage } from "@/app/contexts/LanguageContext"
import LanguageSwitcher from "./LanguageSwitcher"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
  const { t } = useLanguage()

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">Mytaskly</span>
            <img className="h-8 w-auto rounded" src="/images/taskly-logo.png" alt="Mytaskly Logo" />
            <span className="font-bold text-foreground">Mytaskly</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-8">
          <Link
            href="/features"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("nav.features")}
          </Link>
          <Link
            href="/download"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("nav.download")}
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
          >
            {t("nav.about")}
          </Link>
        </div>

        <div className="flex flex-1 justify-end items-center gap-3">
          {/* Social Media Icons - visible only on desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://twitter.com/mytaskly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/mytaskly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <div className="h-4 w-px bg-border/50"></div>
          </div>
          <LanguageSwitcher />
          <ThemeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-6 mt-10">
                  <Link
                    href="/features"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {t("nav.features")}
                  </Link>
                  <Link
                    href="/download"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {t("nav.download")}
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {t("nav.about")}
                  </Link>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://twitter.com/mytaskly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com/mytaskly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
