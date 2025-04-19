"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define available languages
export type Language = "en" | "it"

// Define the context type
type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
})

// Aggiorna il dizionario delle traduzioni per includere tutti i testi del sito
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.download": "Download",
    "nav.about": "About Us",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",

    // Hero
    "hero.title": "Mytaskly",
    "hero.subtitle":
      "The elegant todo list app that helps you organize your life with minimal effort. Simple, beautiful, and effective.",
    "hero.cta.download": "Download Now",
    "hero.cta.features": "See Features",

    // Organize Your Life
    "organize.title": "Organize Your Life",
    "organize.description":
      "Mytaskly helps you bring order to chaos. Our minimalist design philosophy ensures you focus on what matters most - completing your tasks and achieving your goals.",
    "organize.cta": "Get Started",

    // Features
    "features.title": "Powerful Features",
    "features.subtitle": "Discover how Mytaskly helps you organize your life with elegance and efficiency",
    "features.whyChoose": "Why Choose Mytaskly",
    "features.learnMore": "Learn more",
    "features.appFeatures": "App Features",
    "features.appFeaturesSubtitle": "Discover what makes Mytaskly the perfect companion for your productivity journey.",

    // Feature items
    "feature.smartLists.title": "Smart Lists",
    "feature.smartLists.description": "Automatically organize your tasks into Today, Upcoming, and Completed views.",
    "feature.reminders.title": "Reminders",
    "feature.reminders.description": "Never miss a deadline with customizable notifications and alerts.",
    "feature.sync.title": "Sync Across Devices",
    "feature.sync.description": "Your tasks are always up-to-date on all your devices.",
    "feature.darkMode.title": "Dark Mode",
    "feature.darkMode.description": "Easy on the eyes with beautiful light and dark themes.",
    "feature.priority.title": "Priority Levels",
    "feature.priority.description": "Focus on what matters most with customizable priority settings.",

    // Portfolio Grid Categories
    "category.all": "All",
    "category.coreFeatures": "Core Features",
    "category.organization": "Organization",
    "category.integration": "Integration",
    "category.personalization": "Personalization",
    "category.analytics": "Analytics",
    "category.collaboration": "Collaboration",

    // Portfolio Grid Items
    "portfolio.taskManagement.title": "Task Management",
    "portfolio.taskManagement.description": "Create, organize, and complete tasks with ease",
    "portfolio.smartLists.title": "Smart Lists",
    "portfolio.smartLists.description": "Automatically categorized lists for better organization",
    "portfolio.calendar.title": "Calendar Integration",
    "portfolio.calendar.description": "Seamlessly connect with your existing calendar apps",
    "portfolio.themes.title": "Customizable Themes",
    "portfolio.themes.description": "Personalize your experience with beautiful themes",
    "portfolio.progress.title": "Progress Tracking",
    "portfolio.progress.description": "Monitor your productivity with insightful statistics",
    "portfolio.collaboration.title": "Collaboration Tools",
    "portfolio.collaboration.description": "Share lists and assign tasks to team members or family",

    // Timeline
    "timeline.title": "Our Journey",
    "timeline.subtitle": "The evolution of Mytaskly from concept to your favorite productivity app",
    "timeline.concept.title": "Mytaskly Concept",
    "timeline.concept.description": "The idea for a minimalist, user-friendly todo app was born.",
    "timeline.concept.details":
      "Our founder, frustrated with overly complex productivity apps, sketched the first designs for Mytaskly on a napkin during lunch. The vision: simplicity without sacrificing functionality.",
    "timeline.beta.title": "Beta Launch",
    "timeline.beta.description": "First version released to a select group of productivity enthusiasts.",
    "timeline.beta.details":
      "The initial beta version was tested by 500 users who provided invaluable feedback that shaped the core features of Mytaskly. The minimalist design philosophy was established during this phase.",
    "timeline.release.title": "Public Release",
    "timeline.release.description": "Mytaskly 1.0 launched on iOS and Android platforms.",
    "timeline.release.details":
      "After months of refinement, the first public version was released to enthusiastic reviews, praised for its intuitive interface and elegant design.",
    "timeline.webapp.title": "Web App Launch",
    "timeline.webapp.description": "Mytaskly expanded to desktop with a full-featured web application.",
    "timeline.webapp.details":
      "The cross-platform experience was completed with our responsive web app, allowing users to access their tasks from any device with perfect synchronization.",
    "timeline.premium.title": "Premium Features",
    "timeline.premium.description": "Introduced Mytaskly Pro with advanced productivity tools.",
    "timeline.premium.details":
      "For power users, we launched Mytaskly Pro with features like unlimited projects, advanced analytics, and priority support.",
    "timeline.global.title": "Global Expansion",
    "timeline.global.description": "Reached 1 million users worldwide and added support for 10 languages.",
    "timeline.global.details":
      "Mytaskly became a global productivity tool with localization in major languages and users across 150 countries.",

    // Contact Form
    "contact.title": "Get Support",
    "contact.subtitle": "Have questions or feedback? Our team is here to help you get the most out of Mytaskly.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.appVersion": "App Version",
    "contact.message": "Message",
    "contact.sending": "Sending...",
    "contact.send": "Send Message",
    "contact.placeholder.name": "John Doe",
    "contact.placeholder.email": "john@example.com",
    "contact.placeholder.phone": "+1 (555) 000-0000",
    "contact.placeholder.appVersion": "e.g., Mytaskly 2.4.1",
    "contact.placeholder.message": "Tell us about your issue...",
    "contact.success": "Thank you for your message. We'll get back to you soon!",

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.subtitle": "Subscribe to our newsletter for productivity tips and early access to new features.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Thank you for subscribing to our newsletter!",

    // Features Page
    "featuresPage.hero.title": "Powerful Features",
    "featuresPage.hero.subtitle": "Discover how Mytaskly helps you organize your life with elegance and efficiency",

    "featuresPage.taskManagement.title": "Intuitive Task Management",
    "featuresPage.taskManagement.description":
      "Mytaskly's clean interface makes managing tasks effortless. Create, organize, and complete tasks with just a few taps. Our minimalist design ensures you focus on what matters most - getting things done.",
    "featuresPage.taskManagement.feature1": "Create tasks with rich text formatting and attachments",
    "featuresPage.taskManagement.feature2": "Drag and drop to reorder and prioritize",
    "featuresPage.taskManagement.feature3": "Swipe gestures for quick actions on mobile",
    "featuresPage.taskManagement.feature4": "Subtasks for breaking down complex projects",

    "featuresPage.smartLists.title": "Smart Lists & Organization",
    "featuresPage.smartLists.description":
      "Never lose track of your tasks with Mytaskly's intelligent organization system. Our smart lists automatically categorize your tasks based on due dates, priorities, and tags, giving you clear visibility of what needs your attention.",
    "featuresPage.smartLists.feature1": "Today, Upcoming, and Completed views",
    "featuresPage.smartLists.feature2": "Custom lists for projects, work, personal, and more",
    "featuresPage.smartLists.feature3": "Tags and filters for precise organization",
    "featuresPage.smartLists.feature4": "Search functionality to find any task instantly",

    "featuresPage.reminders.title": "Smart Reminders & Notifications",
    "featuresPage.reminders.description":
      "Never miss a deadline again. Mytaskly's reminder system ensures you stay on top of your tasks with timely notifications that adapt to your schedule and priorities.",
    "featuresPage.reminders.feature1": "Time and location-based reminders",
    "featuresPage.reminders.feature2": "Recurring reminders for habits and routines",
    "featuresPage.reminders.feature3": "Smart notification scheduling to avoid overwhelm",
    "featuresPage.reminders.feature4": "Customizable notification sounds and styles",

    "featuresPage.sync.title": "Seamless Cross-platform Experience",
    "featuresPage.sync.description":
      "Your tasks follow you everywhere. Mytaskly synchronizes instantly across all your devices, ensuring you have access to your up-to-date task lists whether you're on your phone, tablet, or computer.",
    "featuresPage.sync.feature1": "Real-time sync across iOS, Android, and web",
    "featuresPage.sync.feature2": "Offline mode with automatic sync when back online",
    "featuresPage.sync.feature3": "Cloud backup to prevent data loss",
    "featuresPage.sync.feature4": "Consistent user experience across all platforms",

    "featuresPage.themes.title": "Beautiful Themes & Customization",
    "featuresPage.themes.description":
      "Make Mytaskly truly yours with extensive customization options. Choose from elegant themes, custom accent colors, and layout options to create a task management experience that matches your style.",
    "featuresPage.themes.feature1": "Light and dark modes with automatic switching",
    "featuresPage.themes.feature2": "Custom accent colors and theme options",
    "featuresPage.themes.feature3": "Adjustable font sizes and display options",
    "featuresPage.themes.feature4": "Customizable home screen widgets",

    "featuresPage.ai.title": "AI-Powered Productivity",
    "featuresPage.ai.description":
      "Let artificial intelligence boost your productivity. Mytaskly's AI features learn from your habits and help you work smarter with intelligent suggestions, automated task creation, and personalized productivity insights.",
    "featuresPage.ai.feature1": "Smart task suggestions based on your habits",
    "featuresPage.ai.feature2": "Natural language processing for quick task entry",
    "featuresPage.ai.feature3": "Automated task scheduling for optimal productivity",
    "featuresPage.ai.feature4": "Personalized productivity insights and reports",

    "featuresPage.calendar.title": "Seamless Calendar Integration",
    "featuresPage.calendar.subtitle":
      "Connect Mytaskly with your favorite calendar apps for a unified view of your schedule and tasks",
    "featuresPage.calendar.feature1.title": "Two-way Sync",
    "featuresPage.calendar.feature1.description":
      "Changes made in either your calendar or Mytaskly are instantly reflected in both places",
    "featuresPage.calendar.feature2.title": "Multiple Calendars",
    "featuresPage.calendar.feature2.description": "Connect with Google Calendar, Apple Calendar, Outlook, and more",
    "featuresPage.calendar.feature3.title": "Smart Scheduling",
    "featuresPage.calendar.feature3.description":
      "Find the perfect time for your tasks based on your calendar availability",

    "featuresPage.cta.title": "Ready to transform your productivity?",
    "featuresPage.cta.subtitle": "Join thousands of users who have revolutionized their task management with Mytaskly.",
    "featuresPage.cta.download": "Download Now",
    "featuresPage.cta.pricing": "View pricing",

    // Pricing Page
    "pricing.title": "Choose Your Plan",
    "pricing.subtitle": "Select the perfect Mytaskly plan that fits your productivity needs",
    "pricing.free.title": "Free",
    "pricing.free.description": "Perfect for getting started with basic task management",
    "pricing.premium.title": "Premium",
    "pricing.premium.description": "Enhanced productivity with advanced features",
    "pricing.pro.title": "Pro",
    "pricing.pro.description": "Ultimate productivity with AI-powered features",
    "pricing.mostPopular": "Most Popular",
    "pricing.month": "/month",
    "pricing.cta.free": "Get Started",
    "pricing.cta.premium": "Subscribe Now",
    "pricing.cta.pro": "Upgrade to Pro",

    "pricing.free.feature1": "Up to 3 task lists",
    "pricing.free.feature2": "Basic task management",
    "pricing.free.feature3": "Daily reminders",
    "pricing.free.feature4": "Mobile app access",
    "pricing.free.feature5": "Advanced filters",
    "pricing.free.feature6": "Themes & customization",
    "pricing.free.feature7": "AI task suggestions",

    "pricing.premium.feature1": "Unlimited task lists",
    "pricing.premium.feature2": "Advanced task management",
    "pricing.premium.feature3": "Custom reminders & notifications",
    "pricing.premium.feature4": "Cross-platform sync",
    "pricing.premium.feature5": "Advanced filters & sorting",
    "pricing.premium.feature6": "Themes & customization",
    "pricing.premium.feature7": "AI task suggestions",

    "pricing.pro.feature1": "Everything in Premium",
    "pricing.pro.feature2": "Priority support",
    "pricing.pro.feature3": "Advanced analytics & reports",
    "pricing.pro.feature4": "Team collaboration features",
    "pricing.pro.feature5": "Calendar integration",
    "pricing.pro.feature6": "Custom workflows",
    "pricing.pro.feature7": "AI task suggestions & automation",

    "pricing.faq.title": "Frequently asked questions",
    "pricing.faq.subtitle": "Have questions about our pricing plans? Find answers to common questions below.",
    "pricing.faq.q1": "Can I switch between plans?",
    "pricing.faq.a1":
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.",
    "pricing.faq.q2": "Is there a free trial for paid plans?",
    "pricing.faq.a2":
      "Yes, we offer a 14-day free trial for both Premium and Pro plans. No credit card required to start your trial.",
    "pricing.faq.q3": "What payment methods do you accept?",
    "pricing.faq.a3": "We accept all major credit cards, PayPal, and Apple Pay for subscription payments.",
    "pricing.faq.q4": "Can I cancel my subscription anytime?",
    "pricing.faq.a4":
      "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.",

    "pricing.cta.ready": "Ready to boost your productivity?",
    "pricing.cta.readySubtitle": "Start organizing your tasks with Mytaskly today and experience the difference.",
    "pricing.cta.getStarted": "Get Started for Free",
    "pricing.cta.learnMore": "Learn more",

    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.billed": "billed annually",
    "pricing.save": "save",

    // Pricing Comparison Table
    "pricing.comparison.title": "Compare Plans",
    "pricing.comparison.subtitle": "Find the perfect plan for your productivity needs",
    "pricing.comparison.feature": "Feature",
    "pricing.comparison.upTo3": "Up to 3",
    "pricing.comparison.upTo50": "Up to 50",
    "pricing.comparison.unlimited": "Unlimited",
    "pricing.comparison.basic": "Basic",
    "pricing.comparison.advanced": "Advanced",
    "pricing.comparison.limited": "Limited",

    "pricing.comparison.category.core": "Core Features",
    "pricing.comparison.category.organization": "Organization",
    "pricing.comparison.category.reminders": "Reminders & Notifications",
    "pricing.comparison.category.sync": "Sync & Devices",
    "pricing.comparison.category.customization": "Customization",
    "pricing.comparison.category.advanced": "Advanced Features",
    "pricing.comparison.category.support": "Support",

    "pricing.comparison.taskLists": "Task Lists",
    "pricing.comparison.tasks": "Tasks per List",
    "pricing.comparison.subtasks": "Subtasks",
    "pricing.comparison.attachments": "Attachments",
    "pricing.comparison.tags": "Tags & Labels",
    "pricing.comparison.filters": "Filters",
    "pricing.comparison.sorting": "Sorting Options",
    "pricing.comparison.customViews": "Custom Views",
    "pricing.comparison.basicReminders": "Basic Reminders",
    "pricing.comparison.recurringReminders": "Recurring Reminders",
    "pricing.comparison.locationReminders": "Location-based Reminders",
    "pricing.comparison.customNotifications": "Custom Notification Sounds",
    "pricing.comparison.devices": "Devices",
    "pricing.comparison.cloudSync": "Cloud Sync",
    "pricing.comparison.offlineMode": "Offline Mode",
    "pricing.comparison.dataBackup": "Data Backup",
    "pricing.comparison.themes": "Themes",
    "pricing.comparison.customColors": "Custom Colors",
    "pricing.comparison.widgets": "Home Screen Widgets",
    "pricing.comparison.customFonts": "Custom Fonts",
    "pricing.comparison.calendarIntegration": "Calendar Integration",
    "pricing.comparison.aiSuggestions": "AI Task Suggestions",
    "pricing.comparison.teamCollaboration": "Team Collaboration",
    "pricing.comparison.analytics": "Productivity Analytics",
    "pricing.comparison.emailSupport": "Email Support",
    "pricing.comparison.prioritySupport": "Priority Support",
    "pricing.comparison.dedicatedManager": "Dedicated Account Manager",

    // Download Page
    "download.title": "Coming Soon",
    "download.subtitle":
      "Mytaskly is almost ready! Join our waitlist to be among the first to experience the future of task management.",
    "download.comingSoonAppStore": "Coming Soon to App Store",
    "download.comingSoonGooglePlay": "Coming Soon to Google Play",

    "download.countdown.title": "Launching in Summer 2024",
    "download.countdown.description":
      "We're putting the finishing touches on Mytaskly. Sign up for our waitlist to get exclusive early access and special benefits.",

    "download.waitlist.title": "Join the Waitlist",
    "download.waitlist.description": "Be the first to know when Mytaskly launches and receive exclusive benefits.",

    "download.form.name": "Name",
    "download.form.namePlaceholder": "John Doe",
    "download.form.email": "Email",
    "download.form.emailPlaceholder": "john@example.com",
    "download.form.platform": "Preferred Platform",
    "download.form.both": "Both",
    "download.form.notifications": "Send me updates about Mytaskly",
    "download.form.submitting": "Submitting...",
    "download.form.submit": "Join Waitlist",

    "download.toast.title": "You're on the list!",
    "download.toast.description": "Thanks for joining our waitlist. We'll notify you when Mytaskly launches.",

    "download.benefits.title": "Waitlist Benefits",
    "download.benefits.subtitle": "Join our waitlist today and enjoy these exclusive benefits when Mytaskly launches.",

    "download.benefits.earlyAccess.title": "Early Access",
    "download.benefits.earlyAccess.description":
      "Get access to Mytaskly before the general public and be the first to experience our innovative features.",

    "download.benefits.exclusiveFeatures.title": "Exclusive Features",
    "download.benefits.exclusiveFeatures.description":
      "Unlock special features only available to our waitlist members, including custom themes and advanced organization tools.",

    "download.benefits.premiumDiscount.title": "Premium Discount",
    "download.benefits.premiumDiscount.description":
      "Receive a special 30% discount on Mytaskly Premium for the first year when you join from our waitlist.",

    "download.faq.title": "Frequently Asked Questions",
    "download.faq.subtitle": "Have questions about our launch? Find answers below.",
    "download.faq.q1": "When exactly will Mytaskly launch?",
    "download.faq.a1":
      "We're targeting a Summer 2024 launch. Waitlist members will receive access in waves starting a few weeks before the public launch.",
    "download.faq.q2": "Will Mytaskly be available on both iOS and Android?",
    "download.faq.a2":
      "Yes! We're launching simultaneously on both platforms, as well as providing a web application for desktop users.",
    "download.faq.q3": "Is there a cost to join the waitlist?",
    "download.faq.a3":
      "No, joining the waitlist is completely free. You'll also receive special benefits and discounts when the app launches.",

    "download.cta.title": "Don't Miss Out",
    "download.cta.description": "Spaces on our priority waitlist are limited. Secure your spot today!",
    "download.cta.button": "Join the Waitlist",

    // Testimonials
    "testimonials.title": "What Our Users Say",
    "testimonials.subtitle": "Join thousands of satisfied users who have transformed their productivity with Mytaskly",
    "testimonials.quote1":
      "Mytaskly has completely changed how I organize my day. The interface is beautiful and intuitive, and the smart lists feature saves me so much time. I've tried dozens of todo apps, but this is the one I'm sticking with.",
    "testimonials.author1": "Sarah Johnson",
    "testimonials.position1": "Marketing Director",
    "testimonials.quote2":
      "As someone with ADHD, I've always struggled with task management. Mytaskly's clean design and smart reminders have been a game-changer for my productivity. I can finally stay on top of my responsibilities without feeling overwhelmed.",
    "testimonials.author2": "Michael Chen",
    "testimonials.position2": "Software Engineer",
    "testimonials.quote3":
      "The cross-platform sync is flawless! I can start a task list on my phone during my commute and continue on my laptop at work. The dark mode is also easy on the eyes during late-night work sessions.",
    "testimonials.author3": "Emma Rodriguez",
    "testimonials.position3": "Freelance Designer",
    "testimonials.appStoreRating": "App Store Rating",
    "testimonials.averageRating": "4.8 out of 5 stars from over 10,000 reviews",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Have questions or need help? We're here for you. Reach out to our team and we'll get back to you as soon as possible.",

    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "John Doe",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "john@example.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "Help with Mytaskly",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us how we can help you...",
    "contact.form.submit": "Send Message",
    "contact.form.sending": "Sending...",

    "contact.validation.nameRequired": "Name must be at least 2 characters.",
    "contact.validation.emailValid": "Please enter a valid email address.",
    "contact.validation.subjectRequired": "Subject must be at least 5 characters.",
    "contact.validation.messageRequired": "Message must be at least 10 characters.",

    "contact.toast.success": "Message Sent!",
    "contact.toast.successMessage": "Thank you for reaching out. We'll get back to you as soon as possible.",

    "contact.info.title": "Contact Information",
    "contact.info.description":
      "Have a question or need assistance? Our support team is ready to help you with any inquiries about Mytaskly.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Business Hours",
    "contact.info.hoursDetails": "Monday - Friday: 9AM - 6PM (PST)",

    "contact.social.title": "Follow Us",

    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.subtitle": "Find quick answers to common questions about contacting our support team.",
    "contact.faq.q1": "How quickly will I receive a response?",
    "contact.faq.a1":
      "We aim to respond to all inquiries within 24 hours during business days. Premium and Pro users receive priority support with faster response times.",
    "contact.faq.q2": "What information should I include in my support request?",
    "contact.faq.a2":
      "To help us assist you better, please include your app version, device type, a clear description of the issue, and any relevant screenshots if possible.",
    "contact.faq.q3": "Do you offer phone support?",
    "contact.faq.a3":
      "Phone support is available for Pro plan subscribers. Free and Premium users can reach us via email or the contact form on this page.",
    "contact.faq.q4": "How can I report a bug?",
    "contact.faq.a4":
      "You can report bugs through this contact form or by emailing support@mytaskly.com. Please include steps to reproduce the issue and your device information.",

    "contact.cta.title": "Ready to boost your productivity?",
    "contact.cta.description": "Join thousands of users who have transformed their task management with Mytaskly.",
    "contact.cta.button": "Download Mytaskly",
    "contact.cta.link": "View pricing plans",

    // Footer
    "footer.copyright": "© 2024 Mytaskly. All rights reserved.",

    // Common
    "common.learnMore": "Learn more",
    "common.getStarted": "Get Started",
    "common.comingSoon": "Coming Soon",

    // Launch Banner
    "launch.notLaunched": "Mytaskly has not been launched yet!",
    "launch.joinWaitlist": "Join our waitlist to try the beta version early and receive",
    "launch.sixMonthsFree": "6 months of Premium subscription for free",
    "launch.atOfficialLaunch": "at the official launch.",
    "launch.earlyAccess": "Early access + 6 months free",
    "launch.joinWaitlistButton": "Join the Waitlist",

    // Theme
    "theme.switchToLight": "Switch to light theme",
    "theme.switchToDark": "Switch to dark theme",
    "theme.system": "Use system theme",

    // About Page
    "about.title": "About Us",
    "about.subtitle":
      "Discover the team behind Mytaskly and our mission to make task management simple, beautiful, and effective for everyone.",
    "about.story.title": "Our Story",
    "about.story.description":
      "Mytaskly was born from our founder's frustration with existing productivity apps - too complex, too cluttered, or simply not beautiful enough to use daily.",
    "about.story.idea.title": "The Idea (2021)",
    "about.story.description":
      "It all started with a sketch on a napkin during a lunch break. Marco Rossi, frustrated with existing productivity apps, envisioned an app that combined simplicity, beauty, and power.",
    "about.story.team.title": "The Team (2022)",
    "about.story.description":
      "Marco assembled a team of designers, developers, and productivity enthusiasts who shared the same vision: to create the ultimate task management app that people would love using every day.",
    "about.story.today.title": "Today",
    "about.story.description":
      "Mytaskly has grown to become one of the most loved productivity apps, with users in over 150 countries. We continue to innovate and improve, always keeping our original design philosophy.",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "At Mytaskly, we believe technology should simplify life, not complicate it. Our mission is to create tools that help people organize their lives with minimal effort and maximum joy.",
    "about.mission.userCentric.title": "User-Centered Design",
    "about.mission.description":
      "Every feature, every pixel, every interaction in Mytaskly is designed with the user experience in mind. We believe software should be a joy to use.",
    "about.mission.simplicity.title": "Simplicity with Power",
    "about.mission.simplicity.description":
      "We reject the notion that powerful apps must be complex. Mytaskly offers advanced features in an intuitive interface that never slows you down.",
    "about.mission.accessibility.title": "Accessibility for All",
    "about.mission.description":
      "We believe great productivity tools should be accessible to everyone. We continuously work to make Mytaskly usable by people with diverse abilities.",
    "about.mission.innovation.title": "Continuous Innovation",
    "about.mission.description":
      "We never settle for the status quo. Our team is constantly looking for ways to improve Mytaskly, incorporating new technologies and ideas.",
    "about.team.title": "Our Team",
    "about.team.description":
      "We're a diverse group of designers, developers, and productivity enthusiasts united by the mission to create the world's best task management app.",
    "about.team.member1.name": "Marco Rossi",
    "about.team.member1.role": "CEO & Founder",
    "about.team.member1.bio":
      "Marco founded Mytaskly with the vision of creating a productivity app that was both powerful and beautiful to use.",
    "about.team.member2.name": "Sofia Bianchi",
    "about.team.member2.role": "Chief Design Officer",
    "about.team.member2.bio":
      "Sofia leads the design team, ensuring every pixel of Mytaskly is perfectly aligned with our design philosophy.",
    "about.team.member3.name": "Luca Verdi",
    "about.team.member3.role": "CTO",
    "about.team.member3.bio":
      "Luca oversees the technical development of Mytaskly, building a robust architecture that supports millions of users.",
    "about.team.member4.name": "Giulia Marino",
    "about.team.member4.role": "Head of Customer Experience",
    "about.team.member4.bio":
      "Giulia ensures every interaction with Mytaskly is intuitive and delightful, from first installation to daily use.",
    "about.joinUs.title": "Join Us",
    "about.joinUs.description":
      "We're always looking for talented people who are passionate about productivity and design. If you enjoy creating products people love to use, we might be the right place for you.",
    "about.joinUs.openPositions": "View Open Positions",
    "about.joinUs.contactUs": "Contact Us",
  },
  it: {
    // Header
    "nav.features": "Funzionalità",
    "nav.pricing": "Prezzi",
    "nav.download": "Scarica",
    "nav.about": "Chi Siamo",
    "nav.support": "Supporto",
    "nav.privacy": "Privacy",
    "nav.terms": "Termini",

    // Hero
    "hero.title": "Mytaskly",
    "hero.subtitle":
      "L'elegante app per liste di cose da fare che ti aiuta a organizzare la tua vita con il minimo sforzo. Semplice, bella ed efficace.",
    "hero.cta.download": "Scarica Ora",
    "hero.cta.features": "Vedi Funzionalità",

    // Organize Your Life
    "organize.title": "Organizza la Tua Vita",
    "organize.description":
      "Mytaskly ti aiuta a portare ordine nel caos. La nostra filosofia di design minimalista ti assicura di concentrarti su ciò che conta di più: completare le tue attività e raggiungere i tuoi obiettivi.",
    "organize.cta": "Inizia Ora",

    // Features
    "features.title": "Potenti Funzionalità",
    "features.subtitle": "Scopri come Mytaskly ti aiuta a organizzare la tua vita con eleganza ed efficienza",
    "features.whyChoose": "Perché Scegliere Mytaskly",
    "features.learnMore": "Scopri di più",
    "features.appFeatures": "Funzionalità dell'App",
    "features.appFeaturesSubtitle":
      "Scopri cosa rende Mytaskly il compagno perfetto per il tuo percorso di produttività.",

    // Feature items
    "feature.smartLists.title": "Liste Intelligenti",
    "feature.smartLists.description":
      "Organizza automaticamente le tue attività in viste Oggi, In Arrivo e Completate.",
    "feature.reminders.title": "Promemoria",
    "feature.reminders.description": "Non perdere mai una scadenza con notifiche e avvisi personalizzabili.",
    "feature.sync.title": "Sincronizzazione tra Dispositivi",
    "feature.sync.description": "Le tue attività sono sempre aggiornate su tutti i tuoi dispositivi.",
    "feature.darkMode.title": "Modalità Scura",
    "feature.darkMode.description": "Facile per gli occhi con bellissimi temi chiari e scuri.",
    "feature.priority.title": "Livelli di Priorità",
    "feature.priority.description":
      "Concentrati su ciò che conta di più con impostazioni di priorità personalizzabili.",

    // Portfolio Grid Categories
    "category.all": "Tutti",
    "category.coreFeatures": "Funzionalità Principali",
    "category.organization": "Organizzazione",
    "category.integration": "Integrazione",
    "category.personalization": "Personalizzazione",
    "category.analytics": "Analisi",
    "category.collaboration": "Collaborazione",

    // Portfolio Grid Items
    "portfolio.taskManagement.title": "Gestione Attività",
    "portfolio.taskManagement.description": "Crea, organizza e completa attività con facilità",
    "portfolio.smartLists.title": "Liste Intelligenti",
    "portfolio.smartLists.description": "Liste categorizzate automaticamente per una migliore organizzazione",
    "portfolio.calendar.title": "Integrazione Calendario",
    "portfolio.calendar.description": "Connettiti senza problemi con le tue app di calendario esistenti",
    "portfolio.themes.title": "Temi Personalizzabili",
    "portfolio.themes.description": "Personalizza la tua esperienza con bellissimi temi",
    "portfolio.progress.title": "Monitoraggio Progressi",
    "portfolio.progress.description": "Monitora la tua produttività con statistiche dettagliate",
    "portfolio.collaboration.title": "Strumenti di Collaborazione",
    "portfolio.collaboration.description": "Condividi liste e assegna attività a membri del team o familiari",

    // Timeline
    "timeline.title": "Il Nostro Percorso",
    "timeline.subtitle": "L'evoluzione di Mytaskly da concetto alla tua app di produttività preferita",
    "timeline.concept.title": "Concetto Mytaskly",
    "timeline.concept.description": "L'idea di un'app todo minimalista e facile da usare è nata.",
    "timeline.concept.details":
      "Il nostro fondatore, frustrato dalle app di produttività troppo complesse, ha abbozzato i primi design per Mytaskly su un tovagliolo durante il pranzo. La visione: semplicità senza sacrificare la funzionalità.",
    "timeline.beta.title": "Lancio Beta",
    "timeline.beta.description": "Prima versione rilasciata a un gruppo selezionato di appassionati di produttività.",
    "timeline.beta.details":
      "La versione beta iniziale è stata testata da 500 utenti che hanno fornito un feedback prezioso che ha plasmato le funzionalità principali di Mytaskly. La filosofia di design minimalista è stata stabilita durante questa fase.",
    "timeline.release.title": "Rilascio Pubblico",
    "timeline.release.description": "Mytaskly 1.0 lanciato su piattaforme iOS e Android.",
    "timeline.release.details":
      "Dopo mesi di perfezionamento, la prima versione pubblica è stata rilasciata con recensioni entusiaste, lodata per la sua interfaccia intuitiva e il design elegante.",
    "timeline.webapp.title": "Lancio Web App",
    "timeline.webapp.description": "Mytaskly si è espanso al desktop con un'applicazione web completa.",
    "timeline.webapp.details":
      "L'esperienza multi-piattaforma è stata completata con la nostra web app responsive, permettendo agli utenti di accedere alle loro attività da qualsiasi dispositivo con sincronizzazione perfetta.",
    "timeline.premium.title": "Funzionalità Premium",
    "timeline.premium.description": "Introdotto Mytaskly Pro con strumenti di produttività avanzati.",
    "timeline.premium.details":
      "Per gli utenti avanzati, abbiamo lanciato Mytaskly Pro con funzionalità come progetti illimitati, analisi avanzate e supporto prioritario.",
    "timeline.global.title": "Espansione Globale",
    "timeline.global.description": "Raggiunto 1 milione di utenti in tutto il mondo e aggiunto supporto per 10 lingue.",
    "timeline.global.details":
      "Mytaskly è diventato uno strumento di produttività globale con localizzazione nelle principali lingue e utenti in 150 paesi.",

    // Contact Form
    "contact.title": "Ottieni Supporto",
    "contact.subtitle": "Hai domande o feedback? Il nostro team è qui per aiutarti a ottenere il massimo da Mytaskly.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.phone": "Numero di Telefono",
    "contact.appVersion": "Versione App",
    "contact.message": "Messaggio",
    "contact.sending": "Invio in corso...",
    "contact.send": "Invia Messaggio",
    "contact.placeholder.name": "Mario Rossi",
    "contact.placeholder.email": "mario@esempio.com",
    "contact.placeholder.phone": "+39 123 456 7890",
    "contact.placeholder.appVersion": "es., Mytaskly 2.4.1",
    "contact.placeholder.message": "Raccontaci il tuo problema...",
    "contact.success": "Grazie per il tuo messaggio. Ti risponderemo al più presto!",

    // Newsletter
    "newsletter.title": "Resta Aggiornato",
    "newsletter.subtitle":
      "Iscriviti alla nostra newsletter per consigli sulla produttività e accesso anticipato alle nuove funzionalità.",
    "newsletter.placeholder": "Inserisci la tua email",
    "newsletter.subscribing": "Iscrizione in corso...",
    "newsletter.subscribe": "Iscriviti",
    "newsletter.success": "Grazie per esserti iscritto alla nostra newsletter!",

    // Features Page
    "featuresPage.hero.title": "Potenti Funzionalità",
    "featuresPage.hero.subtitle": "Scopri come Mytaskly ti aiuta a organizzare la tua vita con eleganza ed efficienza",

    "featuresPage.taskManagement.title": "Gestione Attività Intuitiva",
    "featuresPage.taskManagement.description":
      "L'interfaccia pulita di Mytaskly rende la gestione delle attività senza sforzo. Crea, organizza e completa le attività con pochi tocchi. Il nostro design minimalista ti assicura di concentrarti su ciò che conta di più: portare a termine le cose.",
    "featuresPage.taskManagement.feature1": "Crea attività con formattazione del testo e allegati",
    "featuresPage.taskManagement.feature2": "Trascina e rilascia per riordinare e dare priorità",
    "featuresPage.taskManagement.feature3": "Gesti di scorrimento per azioni rapide su mobile",
    "featuresPage.taskManagement.feature4": "Sottoattività per suddividere progetti complessi",

    "featuresPage.smartLists.title": "Liste Intelligenti e Organizzazione",
    "featuresPage.smartLists.description":
      "Non perdere mai traccia delle tue attività con il sistema di organizzazione intelligente di Mytaskly. Le nostre liste intelligenti categorizzano automaticamente le tue attività in base a scadenze, priorità e tag, offrendoti una chiara visibilità di ciò che richiede la tua attenzione.",
    "featuresPage.smartLists.feature1": "Viste Oggi, In Arrivo e Completate",
    "featuresPage.smartLists.feature2": "Liste personalizzate per progetti, lavoro, personale e altro",
    "featuresPage.smartLists.feature3": "Tag e filtri per un'organizzazione precisa",
    "featuresPage.smartLists.feature4": "Funzionalità di ricerca per trovare qualsiasi attività istantaneamente",

    "featuresPage.reminders.title": "Promemoria e Notifiche Intelligenti",
    "featuresPage.reminders.description":
      "Non perdere mai più una scadenza. Il sistema di promemoria di Mytaskly ti assicura di rimanere al passo con le tue attività con notifiche tempestive che si adattano al tuo programma e alle tue priorità.",
    "featuresPage.reminders.feature1": "Promemoria basati su tempo e posizione",
    "featuresPage.reminders.feature2": "Promemoria ricorrenti per abitudini e routine",
    "featuresPage.reminders.feature3": "Pianificazione intelligente delle notifiche per evitare sovraccarichi",
    "featuresPage.reminders.feature4": "Suoni e stili di notifica personalizzabili",

    "featuresPage.sync.title": "Esperienza Multi-piattaforma Senza Interruzioni",
    "featuresPage.sync.description":
      "Le tue attività ti seguono ovunque. Mytaskly si sincronizza istantaneamente su tutti i tuoi dispositivi, assicurandoti di avere accesso alle tue liste di attività aggiornate sia che tu sia sul telefono, tablet o computer.",
    "featuresPage.sync.feature1": "Sincronizzazione in tempo reale tra iOS, Android e web",
    "featuresPage.sync.feature2": "Modalità offline con sincronizzazione automatica quando torni online",
    "featuresPage.sync.feature3": "Backup cloud per prevenire la perdita di dati",
    "featuresPage.sync.feature4": "Esperienza utente coerente su tutte le piattaforme",

    "featuresPage.themes.title": "Bellissimi Temi e Personalizzazione",
    "featuresPage.themes.description":
      "Rendi Mytaskly veramente tuo con ampie opzioni di personalizzazione. Scegli tra temi eleganti, colori di accento personalizzati e opzioni di layout per creare un'esperienza di gestione delle attività che si adatta al tuo stile.",
    "featuresPage.themes.feature1": "Modalità chiara e scura con cambio automatico",
    "featuresPage.themes.feature2": "Colori di accento personalizzati e opzioni di tema",
    "featuresPage.themes.feature3": "Dimensioni dei caratteri regolabili e opzioni di visualizzazione",
    "featuresPage.themes.feature4": "Widget per la schermata home personalizzabili",

    "featuresPage.ai.title": "Produttività Potenziata dall'IA",
    "featuresPage.ai.description":
      "Lascia che l'intelligenza artificiale aumenti la tua produttività. Le funzionalità IA di Mytaskly imparano dalle tue abitudini e ti aiutano a lavorare in modo più intelligente con suggerimenti intelligenti, creazione automatica di attività e approfondimenti personalizzati sulla produttività.",
    "featuresPage.ai.feature1": "Suggerimenti intelligenti di attività basati sulle tue abitudini",
    "featuresPage.ai.feature2": "Elaborazione del linguaggio naturale per l'inserimento rapido di attività",
    "featuresPage.ai.feature3": "Pianificazione automatica delle attività per una produttività ottimale",
    "featuresPage.ai.feature4": "Approfondimenti e report personalizzati sulla produttività",

    "featuresPage.calendar.title": "Integrazione Calendario Senza Interruzioni",
    "featuresPage.calendar.subtitle":
      "Connetti Mytaskly con le tue app di calendario preferite per una visione unificata del tuo programma e delle tue attività",
    "featuresPage.calendar.feature1.title": "Sincronizzazione Bidirezionale",
    "featuresPage.calendar.feature1.description":
      "Le modifiche apportate nel tuo calendario o in Mytaskly si riflettono istantaneamente in entrambi i luoghi",
    "featuresPage.calendar.feature2.title": "Calendari Multipli",
    "featuresPage.calendar.feature2.description": "Connettiti con Google Calendar, Apple Calendar, Outlook e altro",
    "featuresPage.calendar.feature3.title": "Pianificazione Intelligente",
    "featuresPage.calendar.feature3.description":
      "Trova il momento perfetto per le tue attività in base alla disponibilità del tuo calendario",

    "featuresPage.cta.title": "Pronto a trasformare la tua produttività?",
    "featuresPage.cta.subtitle":
      "Unisciti a migliaia di utenti che hanno rivoluzionato la loro gestione delle attività con Mytaskly.",
    "featuresPage.cta.download": "Scarica Ora",
    "featuresPage.cta.pricing": "Vedi prezzi",

    // Pricing Page
    "pricing.title": "Scegli il Tuo Piano",
    "pricing.subtitle": "Seleziona il piano Mytaskly perfetto che si adatta alle tue esigenze di produttività",
    "pricing.free.title": "Gratuito",
    "pricing.free.description": "Perfetto per iniziare con la gestione base delle attività",
    "pricing.premium.title": "Premium",
    "pricing.premium.description": "Produttività migliorata con funzionalità avanzate",
    "pricing.pro.title": "Pro",
    "pricing.pro.description": "Produttività definitiva con funzionalità potenziate dall'IA",
    "pricing.mostPopular": "Più Popolare",
    "pricing.month": "/mese",
    "pricing.cta.free": "Inizia Ora",
    "pricing.cta.premium": "Abbonati Ora",
    "pricing.cta.pro": "Passa a Pro",

    "pricing.free.feature1": "Fino a 3 liste di attività",
    "pricing.free.feature2": "Gestione attività di base",
    "pricing.free.feature3": "Promemoria giornalieri",
    "pricing.free.feature4": "Accesso app mobile",
    "pricing.free.feature5": "Filtri avanzati",
    "pricing.free.feature6": "Temi e personalizzazione",
    "pricing.free.feature7": "Suggerimenti attività IA",

    "pricing.premium.feature1": "Liste di attività illimitate",
    "pricing.premium.feature2": "Gestione attività avanzata",
    "pricing.premium.feature3": "Promemoria e notifiche personalizzate",
    "pricing.premium.feature4": "Sincronizzazione multi-piattaforma",
    "pricing.premium.feature5": "Filtri avanzati e ordinamento",
    "pricing.premium.feature6": "Temi e personalizzazione",
    "pricing.premium.feature7": "Suggerimenti attività IA",

    "pricing.pro.feature1": "Tutto ciò che è in Premium",
    "pricing.pro.feature2": "Supporto prioritario",
    "pricing.pro.feature3": "Analisi e report avanzati",
    "pricing.pro.feature4": "Funzionalità di collaborazione di team",
    "pricing.pro.feature5": "Integrazione calendario",
    "pricing.pro.feature6": "Flussi di lavoro personalizzati",
    "pricing.pro.feature7": "Suggerimenti attività IA e automazione",

    "pricing.faq.title": "Domande frequenti",
    "pricing.faq.subtitle": "Hai domande sui nostri piani tariffari? Trova risposte alle domande comuni qui sotto.",
    "pricing.faq.q1": "Posso passare da un piano all'altro?",
    "pricing.faq.a1":
      "Sì, puoi aggiornare o declassare il tuo piano in qualsiasi momento. Le modifiche saranno applicate all'inizio del tuo prossimo ciclo di fatturazione.",
    "pricing.faq.q2": "C'è una prova gratuita per i piani a pagamento?",
    "pricing.faq.a2":
      "Sì, offriamo una prova gratuita di 14 giorni per entrambi i piani Premium e Pro. Nessuna carta di credito richiesta per iniziare la prova.",
    "pricing.faq.q3": "Quali metodi di pagamento accettate?",
    "pricing.faq.a3":
      "Accettiamo tutte le principali carte di credito, PayPal e Apple Pay per i pagamenti degli abbonamenti.",
    "pricing.faq.q4": "Posso annullare il mio abbonamento in qualsiasi momento?",
    "pricing.faq.a4":
      "Assolutamente. Puoi annullare il tuo abbonamento in qualsiasi momento dalle impostazioni del tuo account. Continuerai ad avere accesso fino alla fine del tuo periodo di fatturazione corrente.",

    "pricing.cta.ready": "Pronto a migliorare la tua produttività?",
    "pricing.cta.readySubtitle": "Inizia a organizzare le tue attività con Mytaskly oggi e sperimenta la differenza.",
    "pricing.cta.getStarted": "Inizia Gratuitamente",
    "pricing.cta.learnMore": "Scopri di più",

    "pricing.monthly": "Mensile",
    "pricing.yearly": "Annuale",
    "pricing.billed": "fatturato annualmente",
    "pricing.save": "risparmi",

    // Pricing Comparison Table
    "pricing.comparison.title": "Confronta i Piani",
    "pricing.comparison.subtitle": "Trova il piano perfetto per le tue esigenze di produttività",
    "pricing.comparison.feature": "Funzionalità",
    "pricing.comparison.upTo3": "Fino a 3",
    "pricing.comparison.upTo50": "Fino a 50",
    "pricing.comparison.unlimited": "Illimitato",
    "pricing.comparison.basic": "Base",
    "pricing.comparison.advanced": "Avanzato",
    "pricing.comparison.limited": "Limitato",

    "pricing.comparison.category.core": "Funzionalità Principali",
    "pricing.comparison.category.organization": "Organizzazione",
    "pricing.comparison.category.reminders": "Promemoria e Notifiche",
    "pricing.comparison.category.sync": "Sincronizzazione e Dispositivi",
    "pricing.comparison.category.customization": "Personalizzazione",
    "pricing.comparison.category.advanced": "Funzionalità Avanzate",
    "pricing.comparison.category.support": "Supporto",

    "pricing.comparison.taskLists": "Liste di Attività",
    "pricing.comparison.tasks": "Attività per Lista",
    "pricing.comparison.subtasks": "Sottoattività",
    "pricing.comparison.attachments": "Allegati",
    "pricing.comparison.tags": "Tag ed Etichette",
    "pricing.comparison.filters": "Filtri",
    "pricing.comparison.sorting": "Opzioni di Ordinamento",
    "pricing.comparison.customViews": "Viste Personalizzate",
    "pricing.comparison.basicReminders": "Promemoria Base",
    "pricing.comparison.recurringReminders": "Promemoria Ricorrenti",
    "pricing.comparison.locationReminders": "Promemoria Basati sulla Posizione",
    "pricing.comparison.customNotifications": "Suoni di Notifica Personalizzati",
    "pricing.comparison.devices": "Dispositivi",
    "pricing.comparison.cloudSync": "Sincronizzazione Cloud",
    "pricing.comparison.offlineMode": "Modalità Offline",
    "pricing.comparison.dataBackup": "Backup dei Dati",
    "pricing.comparison.themes": "Temi",
    "pricing.comparison.customColors": "Colori Personalizzati",
    "pricing.comparison.widgets": "Widget per Schermata Home",
    "pricing.comparison.customFonts": "Font Personalizzati",
    "pricing.comparison.calendarIntegration": "Integrazione Calendario",
    "pricing.comparison.aiSuggestions": "Suggerimenti Attività IA",
    "pricing.comparison.teamCollaboration": "Collaborazione di Team",
    "pricing.comparison.analytics": "Analisi di Produttività",
    "pricing.comparison.emailSupport": "Supporto Email",
    "pricing.comparison.prioritySupport": "Supporto Prioritario",
    "pricing.comparison.dedicatedManager": "Manager Account Dedicato",

    // Download Page
    "download.title": "Prossimamente",
    "download.subtitle":
      "Mytaskly è quasi pronto! Unisciti alla nostra lista d'attesa per essere tra i primi a sperimentare il futuro della gestione delle attività.",
    "download.comingSoonAppStore": "Presto su App Store",
    "download.comingSoonGooglePlay": "Presto su Google Play",

    "download.countdown.title": "Lancio nell'Estate 2024",
    "download.countdown.description":
      "Stiamo mettendo gli ultimi ritocchi a Mytaskly. Iscriviti alla nostra lista d'attesa per ottenere accesso anticipato esclusivo e vantaggi speciali.",

    "download.waitlist.title": "Unisciti alla Lista d'Attesa",
    "download.waitlist.description":
      "Sii il primo a sapere quando Mytaskly verrà lanciato e ricevi vantaggi esclusivi.",

    "download.form.name": "Nome",
    "download.form.namePlaceholder": "Mario Rossi",
    "download.form.email": "Email",
    "download.form.emailPlaceholder": "mario@esempio.com",
    "download.form.platform": "Piattaforma Preferita",
    "download.form.both": "Entrambe",
    "download.form.notifications": "Inviami aggiornamenti su Mytaskly",
    "download.form.submitting": "Invio in corso...",
    "download.form.submit": "Unisciti alla Lista d'Attesa",

    "download.toast.title": "Sei nella lista!",
    "download.toast.description":
      "Grazie per esserti unito alla nostra lista d'attesa. Ti avviseremo quando Mytaskly sarà lanciato.",

    "download.benefits.title": "Vantaggi della Lista d'Attesa",
    "download.benefits.subtitle":
      "Unisciti alla nostra lista d'attesa oggi e goditi questi vantaggi esclusivi quando Mytaskly verrà lanciato.",

    "download.benefits.earlyAccess.title": "Accesso Anticipato",
    "download.benefits.earlyAccess.description":
      "Ottieni accesso a Mytaskly prima del pubblico generale e sii il primo a sperimentare le nostre funzionalità innovative.",

    "download.benefits.exclusiveFeatures.title": "Funzionalità Esclusive",
    "download.benefits.exclusiveFeatures.description":
      "Sblocca funzionalità speciali disponibili solo per i membri della nostra lista d'attesa, inclusi temi personalizzati e strumenti di organizzazione avanzati.",

    "download.benefits.premiumDiscount.title": "Sconto Premium",
    "download.benefits.premiumDiscount.description":
      "Ricevi uno sconto speciale del 30% su Mytaskly Premium per il primo anno quando ti iscrivi dalla nostra lista d'attesa.",

    "download.faq.title": "Domande Frequenti",
    "download.faq.subtitle": "Hai domande sul nostro lancio? Trova le risposte qui sotto.",
    "download.faq.q1": "Quando esattamente verrà lanciato Mytaskly?",
    "download.faq.a1":
      "Stiamo puntando a un lancio nell'Estate 2024. I membri della lista d'attesa riceveranno accesso a ondate a partire da alcune settimane prima del lancio pubblico.",
    "download.faq.q2": "Mytaskly sarà disponibile sia su iOS che su Android?",
    "download.faq.a2":
      "Sì! Stiamo lanciando simultaneamente su entrambe le piattaforme, oltre a fornire un'applicazione web per gli utenti desktop.",
    "download.faq.q3": "C'è un costo per unirsi alla lista d'attesa?",
    "download.faq.a3":
      "No, unirsi alla lista d'attesa è completamente gratuito. Riceverai anche vantaggi speciali e sconti quando l'app verrà lanciata.",

    "download.cta.title": "Non Perdere l'Opportunità",
    "download.cta.description":
      "I posti nella nostra lista d'attesa prioritaria sono limitati. Assicurati il tuo posto oggi!",
    "download.cta.button": "Unisciti alla Lista d'Attesa",

    // Launch Banner
    "launch.notLaunched": "Mytaskly non è ancora stato lanciato!",
    "launch.joinWaitlist": "Iscriviti alla nostra waitlist per provare la versione beta in anteprima e ricevere",
    "launch.sixMonthsFree": "6 mesi di abbonamento Premium gratuito",
    "launch.atOfficialLaunch": "al lancio ufficiale.",
    "launch.earlyAccess": "Accesso anticipato + 6 mesi gratis",
    "launch.joinWaitlistButton": "Iscriviti alla Waitlist",

    // Testimonials
    "testimonials.title": "Cosa Dicono i Nostri Utenti",
    "testimonials.subtitle":
      "Unisciti a migliaia di utenti soddisfatti che hanno trasformato la loro produttività con Mytaskly",
    "testimonials.quote1":
      "Mytaskly ha completamente cambiato il modo in cui organizzo la mia giornata. L'interfaccia è bella e intuitiva, e la funzione delle liste intelligenti mi fa risparmiare molto tempo. Ho provato decine di app todo, ma questa è quella con cui rimarrò.",
    "testimonials.author1": "Sara Bianchi",
    "testimonials.position1": "Direttrice Marketing",
    "testimonials.quote2":
      "Come persona con ADHD, ho sempre avuto difficoltà con la gestione delle attività. Il design pulito e i promemoria intelligenti di Mytaskly hanno cambiato radicalmente la mia produttività. Finalmente posso rimanere al passo con le mie responsabilità senza sentirmi sopraffatto.",
    "testimonials.author2": "Marco Chen",
    "testimonials.position2": "Ingegnere Software",
    "testimonials.quote3":
      "La sincronizzazione multi-piattaforma è impeccabile! Posso iniziare una lista di attività sul mio telefono durante il pendolarismo e continuare sul mio laptop al lavoro. La modalità scura è anche facile per gli occhi durante le sessioni di lavoro notturne.",
    "testimonials.author3": "Emma Rossi",
    "testimonials.position3": "Designer Freelance",
    "testimonials.appStoreRating": "Valutazione App Store",
    "testimonials.averageRating": "4.8 su 5 stelle da oltre 10.000 recensioni",

    // Contact Page
    "contact.title": "Contattaci",
    "contact.subtitle":
      "Hai domande o hai bisogno di aiuto? Siamo qui per te. Contatta il nostro team e ti risponderemo il prima possibile.",

    "contact.form.title": "Inviaci un messaggio",
    "contact.form.name": "Nome",
    "contact.form.namePlaceholder": "Mario Rossi",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "mario@esempio.com",
    "contact.form.subject": "Oggetto",
    "contact.form.subjectPlaceholder": "Aiuto con Mytaskly",
    "contact.form.message": "Messaggio",
    "contact.form.messagePlaceholder": "Dicci come possiamo aiutarti...",
    "contact.form.submit": "Invia Messaggio",
    "contact.form.sending": "Invio in corso...",

    "contact.validation.nameRequired": "Il nome deve contenere almeno 2 caratteri.",
    "contact.validation.emailValid": "Inserisci un indirizzo email valido.",
    "contact.validation.subjectRequired": "L'oggetto deve contenere almeno 5 caratteri.",
    "contact.validation.messageRequired": "Il messaggio deve contenere almeno 10 caratteri.",

    "contact.toast.success": "Messaggio Inviato!",
    "contact.toast.successMessage": "Grazie per averci contattato. Ti risponderemo il prima possibile.",

    "contact.info.title": "Informazioni di Contatto",
    "contact.info.description":
      "Hai una domanda o hai bisogno di aiuto? Il nostro team di supporto è pronto ad aiutarti con qualsiasi richiesta su Mytaskly.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telefono",
    "contact.info.address": "Indirizzo",
    "contact.info.hours": "Orari di Lavoro",
    "contact.info.hoursDetails": "Lunedì - Venerdì: 9:00 - 18:00 (PST)",

    "contact.social.title": "Seguici",

    "contact.faq.title": "Domande Frequenti",
    "contact.faq.subtitle": "Trova risposte rapide alle domande comuni sul contatto con il nostro team di supporto.",
    "contact.faq.q1": "Quanto velocemente riceverò una risposta?",
    "contact.faq.a1":
      "Miriamo a rispondere a tutte le richieste entro 24 ore durante i giorni lavorativi. Gli utenti Premium e Pro ricevono supporto prioritario con tempi di risposta più rapidi.",
    "contact.faq.q2": "Quali informazioni dovrei includere nella mia richiesta di supporto?",
    "contact.faq.a2":
      "Per aiutarci ad assisterti meglio, includi la versione dell'app, il tipo di dispositivo, una descrizione chiara del problema e, se possibile, screenshot pertinenti.",
    "contact.faq.q3": "Offrite supporto telefonico?",
    "contact.faq.a3":
      "Il supporto telefonico è disponibile per gli abbonati al piano Pro. Gli utenti Free e Premium possono contattarci via email o tramite il modulo di contatto in questa pagina.",
    "contact.faq.q4": "Come posso segnalare un bug?",
    "contact.faq.a4":
      "Puoi segnalare bug tramite questo modulo di contatto o inviando un'email a support@mytaskly.com. Includi i passaggi per riprodurre il problema e le informazioni sul tuo dispositivo.",

    "contact.cta.title": "Pronto a migliorare la tua produttività?",
    "contact.cta.description":
      "Unisciti a migliaia di utenti che hanno trasformato la loro gestione delle attività con Mytaskly.",
    "contact.cta.button": "Scarica Mytaskly",
    "contact.cta.link": "Visualizza i piani tariffari",

    // Footer
    "footer.copyright": "© 2024 Mytaskly. Tutti i diritti riservati.",

    // Common
    "common.learnMore": "Scopri di più",
    "common.getStarted": "Inizia Ora",
    "common.comingSoon": "Prossimamente",

    // Theme
    "theme.switchToLight": "Passa al tema chiaro",
    "theme.switchToDark": "Passa al tema scuro",
    "theme.system": "Usa il tema di sistema",

    // About Page
    "about.title": "Chi Siamo",
    "about.subtitle":
      "Scopri il team dietro Mytaskly e la nostra missione di rendere la gestione delle attività semplice, bella ed efficace per tutti.",
    "about.story.title": "La Nostra Storia",
    "about.story.description":
      "Mytaskly è nato dalla frustrazione del nostro fondatore con le app di produttività esistenti - troppo complesse, troppo ingombranti, o semplicemente non abbastanza belle da usare quotidianamente.",
    "about.story.idea.title": "L'Idea (2021)",
    "about.story.description":
      "Tutto è iniziato con uno schizzo su un tovagliolo durante una pausa pranzo. Marco Rossi, frustrato dalle app di produttività esistenti, ha immaginato un'app che combinasse semplicità, bellezza e potenza.",
    "about.story.team.title": "Il Team (2022)",
    "about.story.description":
      "Marco ha riunito un team di designer, sviluppatori e esperti di produttività appassionati della stessa visione: creare l'app di gestione attività definitiva che le persone avrebbero amato usare ogni giorno.",
    "about.story.today.title": "Oggi",
    "about.story.description":
      "Mytaskly è cresciuta fino a diventare una delle app di produttività più amate, con utenti in oltre 150 paesi. Continuiamo a innovare e migliorare, mantenendo sempre la nostra filosofia di design originale.",
    "about.mission.title": "La Nostra Missione",
    "about.mission.description":
      "In Mytaskly, crediamo che la tecnologia dovrebbe semplificare la vita, non complicarla. La nostra missione è creare strumenti che aiutino le persone a organizzare la propria vita con il minimo sforzo e il massimo piacere.",
    "about.mission.userCentric.title": "Design Centrato sull'Utente",
    "about.mission.description":
      "Ogni funzionalità, ogni pixel, ogni interazione in Mytaskly è progettata pensando all'esperienza dell'utente. Crediamo che il software dovrebbe essere una gioia da usare.",
    "about.mission.simplicity.title": "Semplicità con Potenza",
    "about.mission.simplicity.description":
      "Rifiutiamo l'idea che le app potenti debbano essere complesse. Mytaskly offre funzionalità avanzate in un'interfaccia intuitiva che non ti rallenta mai.",
    "about.mission.accessibility.title": "Accessibilità per Tutti",
    "about.mission.description":
      "Crediamo che strumenti di produttività eccellenti dovrebbero essere accessibili a tutti. Lavoriamo costantemente per rendere Mytaskly utilizzabile da persone con diverse abilità.",
    "about.mission.innovation.title": "Innovazione Continua",
    "about.mission.description":
      "Non ci accontentiamo mai dello status quo. Il nostro team è costantemente alla ricerca di modi per migliorare Mytaskly, incorporando nuove tecnologie e idee.",
    "about.team.title": "Il Nostro Team",
    "about.team.description":
      "Siamo un gruppo diversificato di designer, sviluppatori e appassionati di produttività uniti dalla missione di creare la migliore app di gestione attività al mondo.",
    "about.team.member1.name": "Marco Rossi",
    "about.team.member1.role": "CEO & Founder",
    "about.team.member1.bio":
      "Marco ha fondato Mytaskly con la visione di creare un'app di produttività che fosse sia potente che bella da usare.",
    "about.team.member2.name": "Sofia Bianchi",
    "about.team.member2.role": "Chief Design Officer",
    "about.team.member2.bio":
      "Sofia leads the design team, ensuring every pixel of Mytaskly is perfectly aligned with our design philosophy.",
    "about.team.member3.name": "Luca Verdi",
    "about.team.member3.role": "CTO",
    "about.team.member3.bio":
      "Luca oversees the technical development of Mytaskly, building a robust architecture that supports millions of users.",
    "about.team.member4.name": "Giulia Marino",
    "about.team.member4.role": "Head of Customer Experience",
    "about.team.member4.bio":
      "Giulia ensures every interaction with Mytaskly is intuitive and delightful, from first installation to daily use.",
    "about.joinUs.title": "Unisciti a Noi",
    "about.joinUs.description":
      "Stiamo sempre cercando persone di talento appassionate di produttività e design. Se ti piace creare prodotti che le persone amano usare, potremmo essere il posto giusto per te.",
    "about.joinUs.openPositions": "Vedi Posizioni Aperte",
    "about.joinUs.contactUs": "Contattaci",
  },
}

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get the language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<Language>("en")

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Update localStorage when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook for using the language context
export function useLanguage() {
  return useContext(LanguageContext)
}
