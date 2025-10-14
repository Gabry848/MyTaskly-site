"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { Shield, Lock, Eye, Mail } from "lucide-react"

export default function PrivacyPage() {
  const { t } = useLanguage()

  const getCurrentDate = () => {
    const date = new Date()
    return date.toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                {t("privacy.title")}
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("privacy.lastUpdated")}: {getCurrentDate()}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-8 text-muted-foreground mb-12">
                {t("privacy.intro")}
              </p>

              {/* Section 1: Information We Collect */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t("privacy.section1.title")}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("privacy.section1.content")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                    <Lock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t("privacy.section2.title")}
                    </h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>{t("privacy.section2.item1")}</li>
                      <li>{t("privacy.section2.item2")}</li>
                      <li>{t("privacy.section2.item3")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3: Data Storage and Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.section3.title")}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{t("privacy.section3.item1")}</li>
                  <li>{t("privacy.section3.item2")}</li>
                  <li>{t("privacy.section3.item3")}</li>
                </ul>
              </div>

              {/* Section 4: Permissions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.section4.title")}
                </h2>
                <div className="bg-card rounded-lg p-6 border border-border/50">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="font-semibold text-foreground">RECORD_AUDIO:</span>
                      <span>{t("privacy.section4.permission1")}</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-foreground">MODIFY_AUDIO_SETTINGS:</span>
                      <span>{t("privacy.section4.permission2")}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.section5.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy.section5.content")}
                </p>
              </div>

              {/* Section 6: Changes to Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("privacy.section6.title")}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t("privacy.section6.content")}
                </p>
              </div>

              {/* Section 7: Contact Us */}
              <div className="mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t("privacy.section7.title")}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t("privacy.section7.content")}
                    </p>
                    <a
                      href="mailto:support@mytasklyapp.com"
                      className="text-primary hover:underline font-medium"
                    >
                      support@mytasklyapp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("privacy.cta.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {t("privacy.cta.description")}
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}
