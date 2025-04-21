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
    company: [{ key: "nav.support", href: "/contact" }], // Aggiungi altri link aziendali se necessario
    legal: [
      { key: "nav.privacy", href: "/privacy" },
      { key: "nav.terms", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-secondary text-secondary-foreground" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Puoi aggiungere qui un logo o una breve descrizione se lo desideri */}
          <div className="space-y-8 xl:col-span-1">
            {/* Esempio: Logo o Descrizione */}
            {/* <img className="h-7" src="/logo.svg" alt="Company name" /> */}
            <p className="text-sm text-secondary-foreground/80">{t("footer.description") || "MyTaskly - Organizza le tue attività."}</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-secondary-foreground">{t("footer.section.product") || "Prodotto"}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-foreground">
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-secondary-foreground">{t("footer.section.company") || "Azienda"}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-foreground">
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                  {/* Aggiungi altri link qui se necessario */}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              {/* La colonna per 'Legal' può essere singola se ci sono pochi elementi */}
              <div>
                <h3 className="text-sm font-semibold leading-6 text-secondary-foreground">{t("footer.section.legal") || "Legale"}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.key}>
                      <Link href={item.href} className="text-sm leading-6 text-secondary-foreground/80 hover:text-foreground">
                        {t(item.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-secondary-foreground/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-secondary-foreground/70 text-center">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
