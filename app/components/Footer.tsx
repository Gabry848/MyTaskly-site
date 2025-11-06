"use client"

import Link from "next/link"
import { useLanguage } from "@/app/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  const navigation = {
    product: [
      { key: "nav.features", href: "/features" },
      { key: "nav.pricing", href: "/pricing" },
      { key: "nav.download", href: "/download" },
    ],
    company: [{ key: "nav.support", href: "/contact" }],
    legal: [
      { key: "nav.privacy", href: "/privacy" },
      { key: "nav.terms", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-background border-t border-border" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20 sm:pt-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground max-w-sm">
              {t("footer.description")}
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t("footer.section.product") || "Prodotto"}
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href} className="text-sm text-foreground hover:text-foreground/70">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t("footer.section.company") || "Azienda"}
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href} className="text-sm text-foreground hover:text-foreground/70">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t("footer.section.legal") || "Legale"}
              </h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.key}>
                    <Link href={item.href} className="text-sm text-foreground hover:text-foreground/70">
                      {t(item.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
