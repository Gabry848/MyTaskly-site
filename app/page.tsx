import Hero from "./components/Hero"
import LaunchBanner from "./components/LaunchBanner"
import WearYourStory from "./components/WearYourStory" // This is now "Organize Your Life" content
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import Testimonials from "./components/Testimonials"

export default function Home() {
  return (
    <>
      <div id="home">
        <Hero />
        <LaunchBanner />
      </div>
      <div id="features">
        <WearYourStory />
        <FeatureCarousel />
        <PortfolioGrid />
      </div>
      <div id="about">
        <Timeline />
        <Marquee />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="download">
        <ContactForm />
        <NewsletterSubscribe />
      </div>
    </>
  )
}
