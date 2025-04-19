"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ScrollAnimationWrapper from "@/app/components/ScrollAnimationWrapper"
import { useLanguage } from "@/app/contexts/LanguageContext"
import { Check, Users, Lightbulb, Heart, Target, Award } from "lucide-react"

export default function AboutPage() {
  const { t } = useLanguage()

  const teamMembers = [
    {
      name: t("about.team.member1.name"),
      role: t("about.team.member1.role"),
      bio: t("about.team.member1.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: t("about.team.member2.name"),
      role: t("about.team.member2.role"),
      bio: t("about.team.member2.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: t("about.team.member3.name"),
      role: t("about.team.member3.role"),
      bio: t("about.team.member3.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: t("about.team.member4.name"),
      role: t("about.team.member4.role"),
      bio: t("about.team.member4.bio"),
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
          <ScrollAnimationWrapper>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                <span className="text-gradient">{t("about.title")}</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("about.subtitle")}</p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("about.story.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("about.story.description")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ScrollAnimationWrapper delay={0.1}>
              <div className="flex flex-col bg-card rounded-2xl p-6 shadow-md border border-border/50 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t("about.story.idea.title")}</h3>
                <p className="mt-4 flex-auto text-muted-foreground">{t("about.story.idea.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <div className="flex flex-col bg-card rounded-2xl p-6 shadow-md border border-border/50 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t("about.story.team.title")}</h3>
                <p className="mt-4 flex-auto text-muted-foreground">{t("about.story.team.description")}</p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.3}>
              <div className="flex flex-col bg-card rounded-2xl p-6 shadow-md border border-border/50 hover-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t("about.story.today.title")}</h3>
                <p className="mt-4 flex-auto text-muted-foreground">{t("about.story.today.description")}</p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 sm:py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("about.mission.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("about.mission.description")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ScrollAnimationWrapper delay={0.1}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{t("about.mission.userCentric.title")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("about.mission.userCentric.description")}</p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.2}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Target className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{t("about.mission.simplicity.title")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("about.mission.simplicity.description")}</p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.3}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{t("about.mission.accessibility.title")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("about.mission.accessibility.description")}</p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.4}>
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Lightbulb className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{t("about.mission.innovation.title")}</h3>
                  <p className="mt-2 text-muted-foreground">{t("about.mission.innovation.description")}</p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t("about.team.title")}</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("about.team.description")}</p>
            </div>
          </ScrollAnimationWrapper>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <ScrollAnimationWrapper key={member.name} delay={index * 0.1}>
                <div className="group hover-lift">
                  <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollAnimationWrapper>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("about.joinUs.title")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t("about.joinUs.description")}</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button className="rounded-full" size="lg">
                  {t("about.joinUs.openPositions")}
                </Button>
                <Link href="/contact" className="text-sm font-semibold leading-6 text-foreground">
                  {t("about.joinUs.contactUs")} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}
