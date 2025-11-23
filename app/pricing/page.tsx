"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import { Check } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export default function ClientPricingPage() {
  const { t } = useLanguage()

  const pricingTiers: PricingTier[] = [
    {
      name: t("pricing.free.title"),
      price: "0",
      description: t("pricing.free.description"),
      features: [
        "Up to 50 tasks",
        "Basic voice capture",
        "Mobile app access",
        "Cloud sync",
        "Email support",
        "Limited chat usage",
      ],
      cta: t("pricing.cta.free"),
    },
    {
      name: "FAUNDERS",
      price: "3.99",
      description: "Support MyTaskly development with permanent pricing",
      features: [
        "Everything in Free",
        "Unlimited tasks",
        "Advanced voice features",
        "Extended chat usage",
        "Priority email support",
        "Custom categories",
        "Task analytics",
        "Permanent pricing - locked in forever",
      ],
      cta: "Become a FAUDER",
      highlighted: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-32 pb-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black dark:text-white">
          {t("pricing.title")}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          {t("pricing.subtitle")}
        </p>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          {t("pricing.disclaimer")}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border-2 transition-all duration-300 hover:shadow-2xl ${
              tier.highlighted
                ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black scale-105"
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white"
            }`}
          >
            {/* Most Popular Badge */}
            {tier.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-sm font-bold">
                  {t("pricing.mostPopular")}
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? "text-gray-200 dark:text-gray-700" : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold">${tier.price}</span>
                <span className={`text-sm ${tier.highlighted ? "text-gray-300 dark:text-gray-600" : "text-gray-500 dark:text-gray-400"}`}>
                  {t("pricing.month")}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-bold mb-8 transition-all duration-300 ${
                  tier.highlighted
                    ? "bg-white dark:bg-black text-black dark:text-white hover:opacity-90"
                    : "bg-black dark:bg-white text-white dark:text-black hover:opacity-90"
                }`}
              >
                {tier.cta}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-24 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: "Can I change my plan anytime?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
            },
            {
              question: "Is there a free trial?",
              answer: "Yes! Our Free plan gives you full access to basic features with no credit card required.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and other popular payment methods.",
            },
            {
              question: "Do you offer team discounts?",
              answer: "Yes, please contact our sales team for custom enterprise pricing.",
            },
          ].map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="text-lg font-bold mb-2 text-black dark:text-white">{faq.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
