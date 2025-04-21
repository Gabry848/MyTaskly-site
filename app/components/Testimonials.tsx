"use client"
import Image from "next/image"
import { useLanguage } from "@/app/contexts/LanguageContext"
import ScrollAnimationWrapper from "./ScrollAnimationWrapper"
import { Star } from "lucide-react"

export default function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    {
      quote: t("testimonials.quote1"),
      author: t("testimonials.author1"),
      position: t("testimonials.position1"),
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote: t("testimonials.quote2"),
      author: t("testimonials.author2"),
      position: t("testimonials.position2"),
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote: t("testimonials.quote3"),
      author: t("testimonials.author3"),
      position: t("testimonials.position3"),
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto">
        <ScrollAnimationWrapper>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">{t("testimonials.title")}</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimationWrapper key={testimonial.author} delay={index * 0.1}>
              <div className="bg-card text-card-foreground p-8 rounded-xl shadow-md relative">
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 border-2 border-primary"
                  />
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        <ScrollAnimationWrapper delay={0.4}>
          <div className="mt-16 text-center">
            {/* <p className="text-muted-foreground mb-4">{t("testimonials.appStoreRating")}</p> */}
            <div className="flex justify-center items-center gap-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            {/* <p className="text-foreground font-medium">{t("testimonials.averageRating")}</p> */}
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}
