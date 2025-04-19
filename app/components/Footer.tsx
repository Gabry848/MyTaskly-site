"use client"

import Link from "next/link"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {[
            { key: "nav.features", href: "/features" },
            { key: "nav.pricing", href: "/pricing" },
            { key: "nav.download", href: "#download" },
            { key: "nav.support", href: "#support" },
            { key: "nav.privacy", href: "#privacy" },
            { key: "nav.terms", href: "#terms" },
          ].map((item) => (
            <div key={item.key} className="pb-6">
              <Link href={item.href} className="text-sm leading-6 text-secondary-foreground hover:text-foreground">
                {t(item.key)}
              </Link>
            </div>
          ))}
        </nav>
        <p className="text-secondary-foreground/70 mt-10 text-center text-sm leading-5">{t("footer.copyright")}</p>
      </div>
    </footer>
  )
}
