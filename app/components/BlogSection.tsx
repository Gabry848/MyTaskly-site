"use client"

import { useLanguage } from "@/app/contexts/LanguageContext"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BlogSection() {
  const { t } = useLanguage()

  const posts = [
    { id: 'welcome', title: t('blog.posts.welcome.title'), description: t('blog.posts.welcome.description') },
    { id: 'tips', title: t('blog.posts.tips.title'), description: t('blog.posts.tips.description') },
    { id: 'design', title: t('blog.posts.design.title'), description: t('blog.posts.design.description') },
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">{t('blog.section.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card key={post.id} className="hover-shadow">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="link">{t('blog.card.readMore')}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}