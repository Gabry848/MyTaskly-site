"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Define available languages
export type Language = "en" | "it";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

// Aggiorna il dizionario delle traduzioni per includere tutti i testi del sito
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.download": "Download",
    "nav.about": "About Us",
    "nav.openSource": "Open Source",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",

    // Hero
    "hero.openSourceBadge": "Open Source on GitHub",
    "hero.pretitle": "VOICE-FIRST PRODUCTIVITY",
    "hero.title": "Talk to your tasks.",
    "hero.subtitle":
      "Mytaskly is the black-and-white workspace where an AI voice assistant organises tasks, schedules and notes the moment you speak. The application will be released in a few weeks. Sign up for the beta for early access.",
    "hero.betaBadge": "Beta Signups Open",
    "hero.cta.download": "Join the Beta",
    "hero.cta.features": "Check development status",
    "hero.highlight.voice.title": "VOICE CHAT",
    "hero.highlight.voice.description":
      "Capture tasks and ideas hands-free with natural conversations.",
    "hero.highlight.memory.title": "LIVING MEMORY",
    "hero.highlight.memory.description":
      "Your assistant remembers context, decisions and follow-ups.",
    "hero.highlight.focus.title": "FOCUS VIEWS",
    "hero.highlight.focus.description":
      "Only the essentials on screen so every day stays uncluttered.",
    "hero.preview.assistant": "AI ASSISTANT",
    "hero.preview.greeting": "Hi! What should we plan together today?",
    "hero.preview.user": "YOU",
    "hero.preview.userMessage":
      "Remind me tomorrow morning to confirm the dentist appointment.",
    "hero.preview.ai": "MYTASKLY",
    "hero.preview.aiMessage":
      "Absolutely. I'll notify you at 8:00 and prepare the rest of the day around it.",
    "hero.preview.placeholder": "Hold to speak",

    // Organize Your Life
    "organize.pretitle": "EVERYTHING FLOWS FROM VOICE",
    "organize.title": "Conversations turn into organised days.",
    "organize.description":
      "Speak naturally and let Mytaskly translate words into tasks, reminders and notes with a considered monochrome layout that keeps space to breathe.",
    "organize.points.voice":
      "Dictate tasks, notes and follow-ups without touching the screen.",
    "organize.points.context":
      "Let the assistant understand priorities and dependencies automatically.",
    "organize.points.calendar":
      "Sync plans with your calendar and adjust scheduling with a simple sentence.",
    "organize.points.sync":
      "Access your tasks from any device with offline-first synchronization.",
    "organize.cta": "See how it works",

    // Features
    "features.pretitle": "AI THAT LISTENS",
    "features.title": "Powerful Features",
    "features.subtitle":
      "From the first sentence to the final reminder, the assistant orchestrates every detail for you.",
    "features.whyChoose": "Why choose Mytaskly",
    "features.learnMore": "Learn more",
    "features.appFeatures": "Voice-native building blocks",
    "features.appFeaturesSubtitle":
      "Each module is tuned for a calm monochrome workspace that keeps the conversation centre stage.",
    "features.carouselHint": "drag sideways",
    "features.collectionsPretitle": "THE WORKBENCH",

    // Feature items
    "feature.voice.title": "Voice-first capture",
    "feature.voice.description":
      "Start a conversation and watch tasks, notes and reminders appear instantly.",
    "feature.notifications.title": "Smart notifications",
    "feature.notifications.description":
      "Receive timely reminders and updates that adapt to your schedule and priorities.",
    "feature.calendar.title": "Calendar integration",
    "feature.calendar.description":
      "Sync seamlessly with Google Calendar for a unified view of tasks and events.",
    "feature.sync.title": "Multi-device sync",
    "feature.sync.description":
      "Your tasks follow you everywhere with offline-first synchronization across all devices.",
    "feature.context.title": "Context-aware planning",
    "feature.context.description":
      "The assistant understands dependencies, collaborators and priorities in real time.",
    "feature.automation.title": "Automated routines",
    "feature.automation.description":
      "Let Mytaskly build recurring sequences and optimise schedules automatically.",
    "feature.memory.title": "Shared memory",
    "feature.memory.description":
      "Every interaction feeds an evolving knowledge base ready for future prompts.",
    "feature.privacy.title": "Private by design",
    "feature.privacy.description":
      "End-to-end encryption and clear controls keep your workspace secure.",

    // Portfolio Grid Categories
    "category.all": "All",
    "category.voice": "Voice workspace",
    "category.core": "Core Features",
    "category.integration": "Integration",
    "category.security": "Security",
    "category.automation": "Automation",
    "category.intelligence": "Intelligence",
    "category.collaboration": "Collaboration",

    // Portfolio Grid Items
    "portfolio.voice.title": "Voice console",
    "portfolio.voice.description":
      "Issue commands, capture thoughts and receive spoken confirmations instantly.",
    "portfolio.tasks.title": "Task Management",
    "portfolio.tasks.description":
      "Create, organize and complete tasks with full CRUD operations and smart categorization.",
    "portfolio.notifications.title": "Smart Notifications",
    "portfolio.notifications.description":
      "Receive timely reminders 1 hour before deadlines with intelligent categorization.",
    "portfolio.calendar.title": "Calendar sync",
    "portfolio.calendar.description":
      "Bidirectional synchronization with Google Calendar for unified schedule view.",
    "portfolio.sync.title": "Offline Sync",
    "portfolio.sync.description":
      "Offline-first architecture with automatic synchronization every 5 minutes when online.",
    "portfolio.security.title": "Security & Privacy",
    "portfolio.security.description":
      "JWT authentication, HTTPS encryption and secure category sharing with granular permissions.",
    "portfolio.routines.title": "AI routines",
    "portfolio.routines.description":
      "Generate recurring flows that adjust to real life without manual tweaks.",
    "portfolio.context.title": "Context hub",
    "portfolio.context.description":
      "Keep projects, people and priorities connected inside the assistant's memory.",
    "portfolio.notes.title": "Shared notes",
    "portfolio.notes.description":
      "Create collaborative boards that stay perfectly in sync with voice updates.",
    "portfolio.metrics.title": "Focus metrics",
    "portfolio.metrics.description":
      "Track your capacity and energy with calm, monochrome visualisations.",

    // Comparison
    "comparison.pretitle": "BETTER TOGETHER",
    "comparison.title": "Built for AI-first productivity",
    "comparison.subtitle":
      "A monochrome design meets natural voice input to deliver the fastest way from intention to action.",
    "comparison.tableTitle": "Feature overview",
    "comparison.featuresLabel": "Features",
    "comparison.cta": "Discover every feature",
    "comparison.competitors.mytaskly": "Mytaskly",
    "comparison.features.voice.name": "Voice chat interface",
    "comparison.features.voice.tooltip":
      "Issue commands, capture notes and delegate tasks through natural speech.",
    "comparison.features.ai.name": "AI task assistance",
    "comparison.features.ai.tooltip":
      "Smart suggestions adapt to your patterns and phrasing.",
    "comparison.features.memory.name": "Shared context memory",
    "comparison.features.memory.tooltip":
      "The assistant remembers agreements, notes and decisions across chats.",
    "comparison.features.automation.name": "Automated routines",
    "comparison.features.automation.tooltip":
      "Build recurring flows, reschedule and coordinate deadlines automatically.",
    "comparison.features.design.name": "Monochrome focus design",
    "comparison.features.design.tooltip":
      "A black and white interface keeps attention on what you say and need.",

    // Marquee
    "marquee.voice": "VOICE-FIRST",
    "marquee.ai": "AI STUDIO",
    "marquee.minimal": "MINIMAL SPACE",
    "marquee.focus": "FOCUS MODE",

    // Timeline
    "timeline.title": "Our Journey",
    "timeline.subtitle":
      "The evolution of Mytaskly from concept to your favorite productivity app",
    "timeline.concept.title": "Mytaskly Concept",
    "timeline.concept.description":
      "The idea for a minimalist, user-friendly todo app was born.",
    "timeline.concept.details":
      "Built from the ground up in a small home office by a single developer, Mytaskly is gearing up for its launch. Get ready!",
    "timeline.beta.title": "Beta Launch",
    "timeline.beta.description":
      "First version released to a select group of productivity enthusiasts.",
    "timeline.beta.details":
      "The initial beta version was tested by select users who provided valuable feedback that shaped Mytaskly's core features. The minimalist design philosophy was established during this phase.",
    "timeline.release.title": "Public Release",
    "timeline.release.description":
      "Mytaskly 1.0 launched on iOS and Android platforms.",
    "timeline.release.details":
      "After months of refinement, the first public version was released to enthusiastic reviews, praised for its intuitive interface and elegant design.",
    "timeline.webapp.title": "Web App Launch",
    "timeline.webapp.description":
      "Mytaskly expanded to desktop with a full-featured web application.",
    "timeline.webapp.details":
      "The cross-platform experience was completed with our responsive web app, allowing users to access their tasks from any device with perfect synchronization.",
    "timeline.premium.title": "Premium Features",
    "timeline.premium.description":
      "Introduced Mytaskly Pro with advanced productivity tools.",
    "timeline.premium.details":
      "For power users, we launched Mytaskly Pro with features like unlimited projects, advanced analytics, and priority support.",
    "timeline.global.title": "Global Expansion",
    "timeline.global.description":
      "Reached 1 million users worldwide and added support for 10 languages.",
    "timeline.global.details":
      "Mytaskly became a global productivity tool with localization in major languages and users across 150 countries.",
    "timeline.idea.title": "Mytaskly Idea",
    "timeline.idea.description":
      "The idea for a minimalist, user-friendly todo app was born through discussions.",
    "timeline.idea.details":
      "During a series of brainstorming sessions in 2024, the concept of Mytaskly emerged. We identified a gap in the market for a truly elegant todo app that prioritizes simplicity and immediacy without sacrificing functionality.",
    "timeline.development.title": "Development Begins",
    "timeline.development.description":
      "Gabriele Cipriani, a 16-year-old builder, starts laying Mytaskly's foundation.",
    "timeline.development.details":
      "In January 2025, 16-year-old founder Gabriele Cipriani began coding the first version of Mytaskly, focusing on a clean, intuitive interface that would simplify task management for users of all technical abilities.",
    "timeline.launch.title": "Official Launch",
    "timeline.launch.description":
      "Mytaskly 1.0 scheduled for release on iOS and Android.",
    "timeline.launch.details":
      "Mytaskly is set to launch in August 2025 on iOS and Android platforms. The first version will feature our core functionality with the clean, minimalist design philosophy that has guided our development.",
    "timeline.future.premium.title": "Premium Features",
    "timeline.future.premium.description":
      "Introduction of Mytaskly Pro with advanced productivity tools.",
    "timeline.future.premium.details":
      "Following our successful launch, we plan to introduce a premium tier with enhanced features like unlimited projects, advanced analytics, and priority support for power users who need more from their task management solution.",
    "timeline.future.expansion.title": "Global Expansion",
    "timeline.future.expansion.description":
      "Growing our user base and adding support for multiple languages.",
    "timeline.future.expansion.details":
      "Looking ahead to 2026, our roadmap includes expanding Mytaskly to serve users worldwide with localization in multiple languages and culturally relevant features to help everyone stay organized.",

    // Contact Form

    // Newsletter
    "newsletter.title": "Stay Updated",
    "newsletter.subtitle":
      "Subscribe to our newsletter for productivity tips and early access to new features.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.subscribing": "Subscribing...",
    "newsletter.subscribe": "Subscribe",
    "newsletter.success": "Thank you for subscribing to our newsletter!",

    // Features Page
    "featuresPage.hero.title": "Powerful Features",
    "featuresPage.hero.subtitle":
      "Discover how Mytaskly helps you organize your life with elegance and efficiency",

    // Voice & Audio
    "featuresPage.voice.title": "Smart Voice & Audio",
    "featuresPage.voice.description":
      "Interact with Mytaskly using your voice. Record voice notes, chat with the AI assistant, and receive audio responses in real-time.",
    "featuresPage.voice.feature1":
      "Voice recording with real-time streaming via WebSocket",
    "featuresPage.voice.feature2":
      "Voice Activity Detection (VAD) with auto-stop on prolonged silence",
    "featuresPage.voice.feature3":
      "Sequential audio chunk playback for immediate responses",
    "featuresPage.voice.feature4": "Natural voice chat with integrated AI bot",

    // Notifications & Reminders
    "featuresPage.notifications.title": "Advanced Notifications & Reminders",
    "featuresPage.notifications.description":
      "Complete push notification system to never miss an important deadline. Receive personalized reminders based on task type.",
    "featuresPage.notifications.feature1":
      "Push Notifications with complete Expo Notifications setup",
    "featuresPage.notifications.feature2":
      "Automatic Task Reminders 1 hour before deadline",
    "featuresPage.notifications.feature3":
      "Categorized notifications by task type with specific metadata",
    "featuresPage.notifications.feature4":
      "Smart notification management without overload",

    // Calendars
    "featuresPage.calendars.title": "Calendar Integration",
    "featuresPage.calendars.description":
      "Sync your tasks with Google Calendar for a unified view of your schedule. Changes reflect instantly in both directions.",
    "featuresPage.calendars.feature1":
      "Google Calendar Sync: bidirectional tasks ↔ Google Calendar synchronization",
    "featuresPage.calendars.feature2":
      "Calendar View: calendar view with tasks organized by day",
    "featuresPage.calendars.feature3":
      "Real-time updates between Mytaskly and your calendar",
    "featuresPage.calendars.feature4":
      "Smart scheduling based on calendar availability",

    // Complete Task Management
    "featuresPage.taskManagement.title": "Complete Task Management",
    "featuresPage.taskManagement.description":
      "Full CRUD system to create, read, update, and delete tasks. Organize with custom categories, filter by status, priority, and date. Instant global search to find any task.",
    "featuresPage.taskManagement.feature1":
      "Complete CRUD: Create, Read, Update, Delete for all tasks",
    "featuresPage.taskManagement.feature2":
      "Advanced categorization with custom category creation",
    "featuresPage.taskManagement.feature3":
      "Filtering by status, priority, category, and due date",
    "featuresPage.taskManagement.feature4":
      "Global Search: instant global search across all tasks",

    // Multi-device Synchronization
    "featuresPage.multiDeviceSync.title": "Multi-device Synchronization",
    "featuresPage.multiDeviceSync.description":
      "Offline-first system with automatic synchronization. Your changes are saved locally and synced every 5 minutes when online, with smart queue management for offline operations.",
    "featuresPage.multiDeviceSync.feature1":
      "Offline-First: Sync manager with offline caching to work without connection",
    "featuresPage.multiDeviceSync.feature2":
      "Periodic Sync: automatic synchronization every 5 minutes when online",
    "featuresPage.multiDeviceSync.feature3":
      "Queue System: queued operations when offline, executed as soon as back online",
    "featuresPage.multiDeviceSync.feature4":
      "Cache Versioning with automatic deduplication and smart cleanup",

    // Security
    "featuresPage.security.title": "Security & Privacy",
    "featuresPage.security.description":
      "Your data is protected with JWT authentication, HTTPS communication, and secure category sharing system with granular permission levels.",
    "featuresPage.security.feature1":
      "JWT Authentication: secure token-based authentication",
    "featuresPage.security.feature2":
      "HTTPS: all communications are end-to-end encrypted",
    "featuresPage.security.feature3":
      "Category Sharing with permission levels (READ_ONLY, READ_WRITE)",
    "featuresPage.security.feature4":
      "Password Management: secure password change and email verification",

    // Other Features
    "featuresPage.other.title": "Other Features",
    "featuresPage.other.description":
      "Draggable sticky notes, text chat with AI bot, multi-language support, and interactive tutorial for a complete and personalized experience.",
    "featuresPage.other.feature1":
      "Notes System: draggable sticky notes with customizable colors",
    "featuresPage.other.feature2":
      "Bot Chat: text chat with real-time streaming responses",
    "featuresPage.other.feature3":
      "Multi-Language: full support for Italian and English (i18n)",
    "featuresPage.other.feature4":
      "Tutorial System: interactive onboarding for new users",

    // Roadmap - Planned Features
    "featuresPage.roadmap.title": "Roadmap & Future Features",
    "featuresPage.roadmap.subtitle":
      "Here's what we're developing to make Mytaskly even more powerful",
    "featuresPage.roadmap.comingSoon": "Coming Soon",

    "featuresPage.roadmap.speechToText.title": "Advanced Speech-to-Text",
    "featuresPage.roadmap.speechToText.description":
      "Automatic voice transcription with OpenAI Whisper, Google Cloud Speech-to-Text, or Azure support",

    "featuresPage.roadmap.voiceCommands.title": "Voice Commands",
    "featuresPage.roadmap.voiceCommands.description":
      "Complete app control via natural voice commands",

    "featuresPage.roadmap.locationReminders.title": "Location-Based Reminders",
    "featuresPage.roadmap.locationReminders.description":
      "Geofencing to receive reminders when you arrive at specific locations",

    "featuresPage.roadmap.recurringTasks.title": "Recurring Tasks",
    "featuresPage.roadmap.recurringTasks.description":
      "Create tasks that automatically repeat with custom frequencies",

    "featuresPage.roadmap.subtasks.title": "Subtasks & Checklists",
    "featuresPage.roadmap.subtasks.description":
      "Break down complex tasks into smaller, manageable subtasks",

    "featuresPage.roadmap.aiCategorization.title":
      "Automatic AI Categorization",
    "featuresPage.roadmap.aiCategorization.description":
      "AI learns from your habits and automatically categorizes new tasks",

    "featuresPage.roadmap.smartLists.title": "Dynamic Smart Lists",
    "featuresPage.roadmap.smartLists.description":
      "Automatically generated lists like 'Today', 'This Week', 'Next 7 Days'",

    "featuresPage.roadmap.analytics.title": "Advanced Analytics",
    "featuresPage.roadmap.analytics.description":
      "Habit tracking, pattern learning, and productivity reports",

    "featuresPage.roadmap.twoFactor.title": "Two-Factor Authentication (2FA)",
    "featuresPage.roadmap.twoFactor.description":
      "Extra security with biometric authentication and 2FA",

    "featuresPage.roadmap.automation.title": "Workflow Automation",
    "featuresPage.roadmap.automation.description":
      "Automation rules, batch operations, and conditional actions",
    "featuresPage.ai.description":
      "Let artificial intelligence boost your productivity. Mytaskly's AI features learn from your habits and help you work smarter with intelligent suggestions, automated task creation, and personalized productivity insights.",
    "featuresPage.ai.feature1": "Smart task suggestions based on your habits",
    "featuresPage.ai.feature2":
      "Natural language processing for quick task entry",
    "featuresPage.ai.feature3":
      "Automated task scheduling for optimal productivity",
    "featuresPage.ai.feature4":
      "Personalized productivity insights and reports",

    "featuresPage.calendar.title": "Seamless Calendar Integration",
    "featuresPage.calendar.subtitle":
      "Connect Mytaskly with your favorite calendar apps for a unified view of your schedule and tasks",
    "featuresPage.calendar.feature1.title": "Two-way Sync",
    "featuresPage.calendar.feature1.description":
      "Changes made in either your calendar or Mytaskly are instantly reflected in both places",
    "featuresPage.calendar.feature2.title": "Multiple Calendars",
    "featuresPage.calendar.feature2.description":
      "Connect with most popular calendar app",
    "featuresPage.calendar.feature3.title": "Smart Scheduling",
    "featuresPage.calendar.feature3.description":
      "Find the perfect time for your tasks based on your calendar availability",

    "featuresPage.cta.title": "Ready to transform your productivity?",
    "featuresPage.cta.subtitle":
      "Join thousands of users who have revolutionized their task management with Mytaskly.",
    "featuresPage.cta.download": "Download Now",
    "featuresPage.cta.pricing": "View pricing",

    // Add disclaimer translation
    "featuresPage.disclaimer":
      "Disclaimer: Mytaskly is currently under development. Features shown on this page represent our roadmap and vision, but the final product may vary. The Mytaskly team will strive to implement all these features, but some may be subject to change or available in future updates.",

    // Add pricing disclaimer
    "pricing.disclaimer":
      "Disclaimer: Prices and features shown are indicative and subject to change. Final pricing and available features may differ upon official launch of Mytaskly.",

    // Pricing Page
    "pricing.title": "Choose Your Plan",
    "pricing.subtitle":
      "Select the perfect Mytaskly plan that fits your productivity needs",
    "pricing.free.title": "Free",
    "pricing.free.description":
      "Perfect for getting started with basic task management",
    "pricing.premium.title": "Premium",
    "pricing.premium.description":
      "Enhanced productivity with advanced features",
    "pricing.pro.title": "Pro",
    "pricing.pro.description": "Ultimate productivity with AI-powered features",
    "pricing.mostPopular": "Recommended",
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
    "pricing.faq.subtitle":
      "Have questions about our pricing plans? Find answers to common questions below.",
    "pricing.faq.q1": "Can I switch between plans?",
    "pricing.faq.a1":
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle.",
    "pricing.faq.q2": "Is there a free trial for paid plans?",
    "pricing.faq.a2":
      "Yes, we offer a 14-day free trial for both Premium and Pro plans. No credit card required to start your trial.",
    "pricing.faq.q3": "What payment methods do you accept?",
    "pricing.faq.a3":
      "We accept all major credit cards, PayPal, and Apple Pay for subscription payments.",
    "pricing.faq.q4": "Can I cancel my subscription anytime?",
    "pricing.faq.a4":
      "Absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your current billing period.",

    "pricing.cta.ready": "Ready to boost your productivity?",
    "pricing.cta.readySubtitle":
      "Start organizing your tasks with Mytaskly today and experience the difference.",
    "pricing.cta.getStarted": "Get Started for Free",
    "pricing.cta.learnMore": "Learn more",

    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.billed": "billed annually",
    "pricing.save": "save",

    // Pricing Comparison Table
    "pricing.comparison.title": "Compare Plans",
    "pricing.comparison.subtitle":
      "Find the perfect plan for your productivity needs",
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
    "download.title": "Join the Beta",
    "download.subtitle":
      "The application will be released in a few weeks. Sign up now to be among the first to try it and receive exclusive updates.",
    "download.comingSoonAppStore": "iOS version in development",
    "download.comingSoonGooglePlay": "Coming soon on Google Play",

    "download.badge": "Beta Signups Open",
    "download.buttons.playStore": "Join the Waitlist",
    "download.buttons.progress": "View development progress",

    "download.waitlist.title": "Join the beta waitlist",
    "download.waitlist.description":
      "Sign up to try Mytaskly beta early, follow the roadmap, and be first to know when iOS is ready.",
    "download.waitlist.formTitle": "Request beta access",
    "download.waitlist.formDescription":
      "Tell us where you want to try Mytaskly. We'll notify you as soon as your build is ready.",
    "download.waitlist.formFootnote":
      "We respect your inbox. You can unsubscribe from updates at any time.",
    "download.waitlist.confirmationTitle": "You're on the list!",
    "download.waitlist.confirmationDescription":
      "Thanks for joining the beta waitlist. We'll email you with access details and roadmap updates.",
    "download.waitlist.confirmationButton": "Back to download page",

    "download.form.name": "Name",
    "download.form.namePlaceholder": "John Doe",
    "download.form.email": "Email",
    "download.form.emailPlaceholder": "john@example.com",
    "download.form.platform": "Preferred Platform",
    "download.form.platformPlaceholder": "Choose a platform",
    "download.form.both": "Both",
    "download.form.notifications": "Send me updates about Mytaskly",
    "download.form.notificationsHint":
      "Changelogs, roadmap milestones, and beta invites.",
    "download.form.errorEmail": "Enter a valid email to join the waitlist.",
    "download.form.errorGeneric": "Something went wrong. Please try again.",
    "download.form.submitting": "Submitting...",
    "download.form.submit": "Join Waitlist",

    "download.toast.title": "You're set!",
    "download.toast.description":
      "Thanks for testing the beta. We'll keep you updated on each release.",

    "download.benefits.title": "Why join the beta",
    "download.benefits.subtitle":
      "Get hands-on now and help shape the final release.",

    "download.benefits.earlyAccess.title": "Priority Access",
    "download.benefits.earlyAccess.description":
      "Be among the first to try the Android beta as soon as it is available.",

    "download.benefits.exclusiveFeatures.title": "Progress tracking",
    "download.benefits.exclusiveFeatures.description":
      "Follow the development status from the progress page and read the latest changelog.",

    "download.benefits.premiumDiscount.title": "Priority feedback",
    "download.benefits.premiumDiscount.description":
      "Share ideas directly with the team during beta and influence what ships next.",

    "download.faq.title": "Frequently Asked Questions",
    "download.faq.subtitle":
      "Everything you need to know about testing the beta.",
    "download.faq.q1": "How do I join the beta?",
    "download.faq.a1":
      "Join the waitlist. We will notify you as soon as the beta is ready for download.",
    "download.faq.q2": "Is iOS supported?",
    "download.faq.a2":
      "We're building the iOS version now. In the meantime, follow the progress page to see milestones and release timing.",
    "download.faq.q3": "What should I expect from the beta?",
    "download.faq.a3":
      "The app is stable but still evolving. Voice-first flows are ready, and we're polishing AI assistance and collaboration.",

    "download.cta.title": "Get ready for launch",
    "download.cta.description":
      "Join the waitlist and we'll notify you as soon as it's available.",
    "download.cta.button": "Join the Waitlist",

    // Testimonials
    "testimonials.title": "What Our Users Say",
    "testimonials.subtitle":
      "Join the community of satisfied users who have transformed their productivity with Mytaskly",
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
    "contact.validation.subjectRequired":
      "Subject must be at least 5 characters.",
    "contact.validation.messageRequired":
      "Message must be at least 10 characters.",

    "contact.toast.success": "Message Sent!",
    "contact.toast.successMessage":
      "Thank you for reaching out. We'll get back to you as soon as possible.",

    "contact.info.title": "Contact Information",
    "contact.info.description":
      "Have a question or need assistance? Our support team is ready to help you with any inquiries about Mytaskly.",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.address": "Address",
    "contact.info.hours": "Time to response",
    "contact.info.hoursDetails": "1/2 business days",

    "contact.social.title": "Follow Us",

    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.subtitle":
      "Find quick answers to common questions about contacting our support team.",
    "contact.faq.q1": "How quickly will I receive a response?",
    "contact.faq.a1":
      "We aim to respond to all inquiries within 24 hours during business days. Premium and Pro users receive priority support with faster response times.",
    "contact.faq.q2":
      "What information should I include in my support request?",
    "contact.faq.a2":
      "To help us assist you better, please include your app version, device type, a clear description of the issue, and any relevant screenshots if possible.",
    "contact.faq.q3": "Do you offer phone support?",
    "contact.faq.a3":
      "Phone support is available for Pro plan subscribers. Free and Premium users can reach us via email or the contact form on this page.",
    "contact.faq.q4": "How can I report a bug?",
    "contact.faq.a4":
      "You can report bugs through this contact form or by emailing support@mytaskly.com. Please include steps to reproduce the issue and your device information.",

    "contact.cta.title": "Ready to boost your productivity?",
    "contact.cta.description":
      "Join thousands of users who have transformed their task management with Mytaskly.",
    "contact.cta.button": "Download Mytaskly",
    "contact.cta.link": "View pricing plans",

    // Footer
    "footer.copyright": "© 2025 Mytaskly. All rights reserved.",
    "footer.description":
      "Mytaskly — The voice-first AI workspace for everyday organisation.", // New key
    "footer.section.product": "Product", // New key
    "footer.section.company": "Company", // New key
    "footer.section.legal": "Legal", // New key

    // Common
    "common.learnMore": "Learn more",
    "common.getStarted": "Get Started",
    "common.comingSoon": "Coming Soon",
    "common.back": "Back", // Aggiunto

    // Launch Banner
    "launch.notLaunched": "Mytaskly has not been launched yet!",
    "launch.joinWaitlist":
      "Join our waitlist to try the beta version early and receive",
    "launch.sixMonthsFree":
      "3 months of Premium subscription for free + 30% discount",
    "launch.atOfficialLaunch": "at the official launch.",
    "launch.earlyAccess": "Early access + 3 months free + 30% discount",
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
    "about.story.idea.title": "The Idea",
    "about.story.idea.description":
      "It all started as a simple sketch in a notebook. One developer’s vision: a minimalist todo app to declutter life.",
    "about.story.team.title": "The Team (2024)",
    "about.story.team.description":
      "Gabriele single-handedly designed and developed a task management app with a clear vision: to create the ultimate tool that people would love to use every day.",
    "about.story.today.title": "Today",
    "about.story.today.description":
      "Mytaskly is being developed relentlessly by our team with dedication and patience, to ensure the best experience for you",
    "about.mission.title": "Our Mission",
    "about.mission.description":
      "At Mytaskly, we believe technology should simplify life, not complicate it. Our mission is to create tools that help people organize their lives with minimal effort and maximum joy.",
    "about.mission.userCentric.title": "User-Centered Design",
    "about.mission.userCentric.description":
      "Every feature, every pixel, every interaction in Mytaskly is designed with the user experience in mind. We believe software should be a joy to use.",
    "about.mission.simplicity.title": "Simplicity with Power",
    "about.mission.simplicity.description":
      "We reject the notion that powerful apps must be complex. Mytaskly offers advanced features in an intuitive interface that never slows you down.",
    "about.mission.accessibility.title": "Accessibility for All",
    "about.mission.accessibility.description":
      "We believe great productivity tools should be accessible to everyone. We continuously work to make Mytaskly usable by people with diverse abilities.",
    "about.mission.innovation.title": "Continuous Innovation",
    "about.mission.innovation.description":
      "We never settle for the status quo. Our team is constantly looking for ways to improve Mytaskly, incorporating new technologies and ideas.",
    "about.team.title": "Our Team",
    "about.team.description":
      "I'm Gabriele, founder of Mytaskly: designer, developer and obsessed with time optimization. Working alone allows me to:" +
      "✔ maintain a clear and coherent vision – No compromises, just the app I've always dreamed of." +
      "✔ Move with agility – I implement new features in hours, not months." +
      "✔ Listen to you directly – All feedback comes to me, without filters." +
      "" +
      "The result? An app entirely built with maniacal precision, where every pixel and every line of code reflects a single obsession: your productivity.",
    "about.team.member1.name": "Gabriele Cipriani",
    "about.team.member1.role": "CEO & Founder",
    "about.team.member1.bio":
      "Gabriele founded Mytaskly with the vision of creating a productivity app that was both powerful and beautiful to use.",
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

    // Blog
    "blog.section.title": "From Our Blog",
    "blog.card.readMore": "Read More",
    "blog.posts.welcome.title": "Welcome to the Mytaskly Blog",
    "blog.posts.welcome.description":
      "Tips, news, and insights to help you stay productive.",
    "blog.posts.tips.title": "5 Productivity Tips You Need to Know",
    "blog.posts.tips.description":
      "Boost your efficiency with these simple techniques.",
    "blog.posts.design.title": "Our Design Philosophy",
    "blog.posts.design.description":
      "How we crafted Mytaskly’s minimal and functional interface.",
    "blog.page.title": "Blog",
    "blog.page.description":
      "Explore articles, tips, and updates from the Mytaskly team.",

    // Features Blog Contents
    "features.blog.author": "Gabriele Cipriani",
    "features.blog.readTime": "5 min read",
    "features.blog.tocTitle": "Table of Contents",
    "features.blog.taskManagement.section1.title":
      "Introduction to Task Management",
    "features.blog.taskManagement.section1.p1":
      "Task management is the heart of every productive routine. In Mytaskly you can create, organize, and complete tasks with ease.",
    "features.blog.taskManagement.section1.p2":
      "Use rich formatting, attachments, and subtasks to break down complex projects into manageable steps.",
    "features.blog.taskManagement.section1.p3":
      "Thanks to drag & drop and quick gestures, adapting the order of your tasks is more intuitive than ever.",
    "features.blog.taskManagement.section2.title": "Main Features",
    "features.blog.taskManagement.section2.p1":
      "Smart lists that automatically group today's, tomorrow's, and completed tasks.",
    "features.blog.taskManagement.section2.p2":
      "Customizable reminders to never miss an important deadline.",
    "features.blog.taskManagement.section2.p3":
      "Real-time synchronization across all devices, from mobile to desktop.",
    "features.blog.taskManagement.section3.title": "Best Practices and Tips",
    "features.blog.taskManagement.section3.p1":
      "Plan your day the night before to start with mental clarity.",
    "features.blog.taskManagement.section3.p2":
      "Limit your daily list to 5 key tasks to maintain focus.",
    "features.blog.taskManagement.section3.p3":
      "Review completed tasks weekly to celebrate progress and identify improvement opportunities.",

    "features.blog.smartLists.section1.title": "Introduction to Smart Lists",
    "features.blog.smartLists.section1.p1":
      "Smart Lists automatically organize your tasks based on due date, priority, and tags.",
    "features.blog.smartLists.section1.p2":
      "Access Today, Coming Up, and Completed views with a single click.",
    "features.blog.smartLists.section1.p3":
      "Customize rules to create lists tailored to specific projects.",
    "features.blog.smartLists.section2.title": "Configuration and Use",
    "features.blog.smartLists.section2.p1":
      "Create tags and filters to segment tasks right after creating them.",
    "features.blog.smartLists.section2.p2":
      "Set advanced filter parameters to highlight urgent tasks.",
    "features.blog.smartLists.section2.p3":
      "Save custom views to quickly return to priority tasks.",
    "features.blog.smartLists.section3.title": "Benefits of Smart Lists",
    "features.blog.smartLists.section3.p1":
      "Time-saving: you no longer need to manually move tasks.",
    "features.blog.smartLists.section3.p2":
      "Greater clarity: see immediately what requires attention in the short term.",
    "features.blog.smartLists.section3.p3":
      "Flexibility: modify rules at any time based on your workflow needs.",

    // Privacy Policy Page
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdated": "Last Updated",
    "privacy.intro":
      'This Privacy Policy describes how MyTaskly ("we", "our" or "the app") handles information when you use our mobile application.',

    "privacy.section1.title": "1. INFORMATION WE COLLECT",
    "privacy.section1.content":
      "MyTaskly may request access to your device's microphone to enable the voice recording feature for creating tasks and notes. Audio recordings are saved locally on your device.",

    "privacy.section2.title": "2. HOW WE USE YOUR INFORMATION",
    "privacy.section2.item1":
      "Audio recordings are used exclusively to create voice notes within the app",
    "privacy.section2.item2": "All data is saved locally on your device",
    "privacy.section2.item3":
      "We do not transmit, share, or sell your audio data to third parties",

    "privacy.section3.title": "3. DATA STORAGE AND SECURITY",
    "privacy.section3.item1": "All audio recordings remain on your device",
    "privacy.section3.item2":
      "You have full control to delete recordings at any time",
    "privacy.section3.item3": "We do not have access to your recordings",

    "privacy.section4.title": "4. PERMISSIONS",
    "privacy.section4.permission1": "To record voice notes for tasks",
    "privacy.section4.permission2": "To adjust audio settings during recording",

    "privacy.section5.title": "5. CHILDREN'S PRIVACY",
    "privacy.section5.content":
      "Our app does not knowingly collect information from children under 13 years of age.",

    "privacy.section6.title": "6. CHANGES TO THIS PRIVACY POLICY",
    "privacy.section6.content":
      "We may update this Privacy Policy from time to time. Changes will be posted within the app.",

    "privacy.section7.title": "7. CONTACT US",
    "privacy.section7.content":
      "For questions about this Privacy Policy, contact us at:",

    "privacy.cta.title": "Your Privacy Matters",
    "privacy.cta.description":
      "We are committed to protecting your privacy and ensuring your data remains secure.",

    // Members Page
    "members.login.title": "Join or access the Members Area",
    "members.login.description":
      "Enter your email to join the waitlist and access the reserved beta space.",
    "members.login.emailLabel": "Email",
    "members.login.emailPlaceholder": "your-email@example.com",
    "members.login.errorInvalid":
      "Invalid email. Please check the email format.",
    "members.login.errorGeneric": "Error during login. Please try again.",
    "members.login.buttonLoading": "Logging in...",
    "members.login.button": "Access or Register",

    "members.header.title": "Members Area",
    "members.header.subtitle": "Exclusive content for waitlist members",
    "members.header.logout": "Logout",

    "members.welcome.title": "Welcome to the exclusive community!",
    "members.welcome.description":
      "Thank you for joining the MyTaskly waitlist. Here's what you can do here:",

    "members.card.betaPreview.title": "Beta Preview",
    "members.card.betaPreview.description":
      "Get early access to MyTaskly beta features",
    "members.card.betaPreview.button": "Access Early Access",

    "members.card.community.title": "Community",
    "members.card.community.description":
      "Join discussions with other early adopters",
    "members.card.community.badge": "Coming Soon",

    "members.card.feedback.title": "Feedback",
    "members.updates.preLaunch.title": "Pre-Lancio e Preparazione",
    "members.updates.preLaunch.description":
      "Completamento periodo di testing obbligatorio (14 giorni), raccolta feedback, preparazione marketing e setup social media.",
    "members.updates.preLaunch.badge": "Dicembre 2024",

    "members.updates.androidLaunch.title": "Lancio Pubblico Android",
    "members.updates.androidLaunch.description":
      "Versione ufficiale disponibile pubblicamente su Google Play Store dopo aver completato tutti i requisiti e ottimizzazioni basate sul feedback della beta.",
    "members.updates.androidLaunch.badge":
      "Fine Dicembre 2024 / Inizio Gennaio 2025",

    "members.updates.marketingExpansion.title": "Espansione Marketing",
    "members.updates.marketingExpansion.description":
      "Lancio su Product Hunt, campagne social media e outreach a influencer e community tech.",
    "members.updates.marketingExpansion.badge": "Gennaio 2025",

    "members.updates.chatgptIntegration.title": "ChatGPT Apps Integration",
    "members.updates.chatgptIntegration.description":
      "Sfruttare il vantaggio first-mover per integrare MyTaskly come ChatGPT App, raggiungendo potenzialmente 800M+ utenti della piattaforma.",
    "members.updates.chatgptIntegration.badge": "Q1 2025 (Gennaio-Marzo)",

    "members.updates.advancedVoiceChat.title": "Chat Vocale Avanzata",
    "members.updates.advancedVoiceChat.description":
      "Perfezionamento dell'esperienza di chat vocale con IA e ottimizzazioni basate sui dati d'uso reali.",
    "members.updates.advancedVoiceChat.badge": "Q1 2025",

    "members.updates.iosLaunch.title": "Lancio iOS App Store",
    "members.updates.iosLaunch.description":
      "Pubblicazione su App Store Apple dopo aver validato il prodotto su Android e raccolto feedback per ottimizzare l'esperienza iOS.",
    "members.updates.iosLaunch.badge": "Q2 2025 (Aprile-Giugno)",

    // Early Access Page
    "earlyAccess.login.title": "Accesso Early Access",
    "earlyAccess.login.description":
      "Inserisci la tua email per accedere all'early access di MyTaskly",
    "earlyAccess.login.emailLabel": "Email",
    "earlyAccess.login.emailPlaceholder": "la-tua-email@esempio.com",
    "earlyAccess.login.errorNotFound":
      "Email non trovata nella waitlist. Registrati prima di accedere.",
    "earlyAccess.login.errorGeneric": "Errore durante il login. Riprova.",
    "earlyAccess.login.buttonLoading": "Verifica in corso...",
    "earlyAccess.login.button": "Accedi",

    "earlyAccess.backButton": "Area Membri",
    "earlyAccess.badge": "Early Access Esclusivo",
    "earlyAccess.hero.title": "Il Futuro della Produttività è Qui",
    "earlyAccess.hero.description":
      "Scopri in anteprima le funzionalità rivoluzionarie di MyTaskly prima del lancio ufficiale",

    "earlyAccess.progress.title": "Stato dello Sviluppo",
    "earlyAccess.progress.description":
      "Segui i progressi in tempo reale dello sviluppo di MyTaskly",
    "earlyAccess.progress.phase1": "Concept & Design",
    "earlyAccess.progress.phase2": "Core Features",
    "earlyAccess.progress.phase3": "AI Integration",
    "earlyAccess.progress.phase4": "Beta Testing",
    "earlyAccess.progress.phase5": "App Store Review",

    "earlyAccess.features.title": "Exclusive Features Preview",
    "earlyAccess.features.ai.title": "AI Assistente Personale",
    "earlyAccess.features.ai.description":
      "Un assistente IA che impara dalle tue abitudini e suggerisce automaticamente come organizzare al meglio la tua giornata.",
    "earlyAccess.features.ai.badge": "In Sviluppo",

    "earlyAccess.features.privacy.title": "Privacy Avanzata",
    "earlyAccess.features.privacy.description":
      "Crittografia end-to-end e controllo completo sui tuoi dati e sincronizzazione sicura.",
    "earlyAccess.features.privacy.badge": "Completato",

    "earlyAccess.features.sync.title": "Sync Cross-Platform",
    "earlyAccess.features.sync.description":
      "Sincronizzazione istantanea tra tutti i tuoi dispositivi con supporto offline e conflitti risolti automaticamente.",
    "earlyAccess.features.sync.badge": "Completato",

    "earlyAccess.beta.title": "Accesso Beta Esclusivo",
    "earlyAccess.beta.description":
      "Sei tra i primi ad avere accesso alla versione beta di MyTaskly!",
    "earlyAccess.beta.stat1.value": "2025",
    "earlyAccess.beta.stat1.label": "Anno di Lancio",
    "earlyAccess.beta.stat2.value": "11",
    "earlyAccess.beta.stat2.label": "Mesi di Sviluppo",
    "earlyAccess.beta.stat3.value": "50+",
    "earlyAccess.beta.stat3.label": "Funzionalità",
    "earlyAccess.beta.available":
      "L'app non è ancora disponibile per il download. Iscriviti alla lista d'attesa per ricevere una notifica al lancio.",
    "earlyAccess.beta.button1": "Unisciti alla Waitlist",
    "earlyAccess.beta.button2": "Unisciti alla Waitlist",

    "earlyAccess.guide.title": "Come Accedere alla Beta",
    "earlyAccess.guide.step1":
      'Unisciti al Google Group e clicca sul pulsante "Unisciti al gruppo" in alto a sinistra',
    "earlyAccess.guide.step2":
      'Clicca su "Accetta l\'invito per tester" per diventare tester sul Play Store',
    "earlyAccess.guide.step3": "Installa l'app MyTaskly sul tuo dispositivo",
    "earlyAccess.guide.step4":
      "Registrati con la tua email per creare un account",
    "earlyAccess.guide.step5":
      "Inizia ad usare la beta e goditi tutte le funzionalità! 🎉",

    // Open Source Page
    "openSource.hero.badge": "Open Source senza compromessi",
    "openSource.hero.badgeSubtitle": "Creata da un 16enne in 11 mesi",
    "openSource.hero.pretitle": "Mytaskly è aperta a tutti",
    "openSource.hero.title":
      "MyTaskly è open source, sviluppata in 11 mesi da un ragazzo di 16 anni e pronta per essere migliorata da chiunque.",
    "openSource.hero.description":
      "Abbiamo scelto l'open source per rendere trasparente ogni scelta tecnologica e invitare la community a costruire insieme la migliore esperienza di produttività vocale. Ogni commit racconta la determinazione di chi ha dedicato quasi un anno per portare questa visione alla vita.",
    "openSource.hero.ctaRepositories": "Esplora le repository",
    "openSource.hero.ctaMCP": "Scopri l'MCP ufficiale",
    "openSource.hero.whyTitle": "Trasparenza, fiducia e integrazione ovunque",
    "openSource.hero.whyDescription":
      "MyTaskly nasce come progetto personale di un sedicenne e diventa una piattaforma aperta: questo garantisce revisione pubblica, miglioramenti continui e la libertà di integrare l'assistente vocale nei tuoi flussi.",
    "openSource.hero.tag1": "Community-first",
    "openSource.hero.tag2": "Licenza aperta",
    "openSource.hero.tag3": "MCP incluso",

    "openSource.advantages.pretitle": "Vantaggi reali",
    "openSource.advantages.title": "Perché MyTaskly è open source",
    "openSource.advantages.description":
      "Rendere pubblica la base di codice è la scelta più coerente con la nostra missione: offrire un assistente vocale di produttività etico, controllabile e potenziato dalla forza della community.",
    "openSource.advantages.transparency.title": "Trasparenza totale",
    "openSource.advantages.transparency.description":
      "Codice aperto e consultabile da chiunque: sai sempre come vengono gestiti dati, algoritmi e modelli IA, senza segreti nascosti.",
    "openSource.advantages.community.title": "Affidabilità di comunità",
    "openSource.advantages.community.description":
      "Chiunque può proporre miglioramenti, segnalare bug e contribuire con nuove idee: MyTaskly cresce più velocemente grazie a contributi reali.",
    "openSource.advantages.customization.title": "Personalizzazione libera",
    "openSource.advantages.customization.description":
      "Forka, adatta e distribuisci la tua versione: l'open source ti permette di creare esattamente l'esperienza di produttività che cerchi.",

    "openSource.mcp.badge": "MCP ufficiale",
    "openSource.mcp.title": "Integra MyTaskly ovunque grazie all'MCP",
    "openSource.mcp.description":
      "L'MCP di MyTaskly rende l'assistente accessibile da agent, workflow personalizzati e tool interni. È open source, documentato e pronto per essere adattato a qualsiasi stack, dal tuo CRM alle automazioni no-code.",
    "openSource.mcp.feature1Title": "Integrazione immediata",
    "openSource.mcp.feature1Description":
      "Endpoint chiari e esempi già pronti per collegare MyTaskly a bot, dashboard e flussi vocali.",
    "openSource.mcp.feature2Title": "Contributi benvenuti",
    "openSource.mcp.feature2Description":
      "Issue, PR e proposte di nuove capability MCP sono incoraggiate: la community guida la roadmap.",
    "openSource.mcp.highlight": "Dal codice al tuo ecosistema",
    "openSource.mcp.highlightSubtitle":
      "Open source significa libertà di integrare senza barriere",
    "openSource.mcp.benefit1":
      "SDK e esempi pronti all'uso per agent AI e workflow vocali.",
    "openSource.mcp.benefit2":
      "Documentazione aperta e migliorabile via PR dalla community.",
    "openSource.mcp.benefit3":
      "Compatibilità pensata per cloud, self-hosting e tool no-code.",
    "openSource.mcp.button": "Vai al repository MCP",

    "openSource.mcp.comingSoon.badge": "In arrivo",
    "openSource.mcp.comingSoon.title":
      "L'MCP ufficiale di MyTaskly è quasi pronto",
    "openSource.mcp.comingSoon.description":
      "Stiamo ultimando gli ultimi dettagli del nostro Model Context Protocol ufficiale per renderlo il più potente e facile da integrare possibile. Presto potrai usare MyTaskly in agent IA, automazioni e workflow personalizzati senza limitazioni.",
    "openSource.mcp.comingSoon.feature1Title": "Endpoint reali",
    "openSource.mcp.comingSoon.feature1Subtitle": "API documentation",
    "openSource.mcp.comingSoon.feature2Title": "SDK multi-linguaggio",
    "openSource.mcp.comingSoon.feature2Subtitle": "Python, JS, Go",
    "openSource.mcp.comingSoon.feature3Title": "Esempi pronti",
    "openSource.mcp.comingSoon.feature3Subtitle": "Deploy in 5 minuti",
    "openSource.mcp.comingSoon.cta":
      "Iscriviti per ricevere un notifica appena sarà disponibile",

    "openSource.repos.pretitle": "Repository pubbliche",
    "openSource.repos.title": "Contribuisci, studia, integra",
    "openSource.repos.description":
      "Troverai il codice aperto su repository dedicate: sostituisci i link placeholder con quelli ufficiali e inizia a contribuire. Ogni issue o PR aiuta un giovane founder di 16 anni a crescere insieme al progetto.",
    "openSource.repos.badge": "Repo aperta",
    "openSource.repos.repo1Title": "Repository principale di MyTaskly",
    "openSource.repos.repo1Description":
      "Il cuore dell'app, pronta per essere studiata, forkata e migliorata dalla community.",
    "openSource.repos.repo2Title": "Interfaccia web e landing",
    "openSource.repos.repo2Description":
      "La base del sito e dell'esperienza web: perfetta per contribuire a UI, accessibilità e performance.",
    "openSource.repos.repo3Title": "MCP di MyTaskly",
    "openSource.repos.repo3Description":
      "Il connettore ufficiale per integrare MyTaskly in automazioni, agent e strumenti personalizzati.",
    "openSource.repos.buttonText": "Apri la repository",
    "openSource.repos.footerTitle":
      "MyTaskly nasce dalla passione di un sedicenne",
    "openSource.repos.footerDescription":
      "Dopo 11 mesi di lavoro costante, il codice è aperto per permettere a chiunque di verificarlo, migliorarlo e integrarlo. Se ami la produttività open source, questo è il momento di unirti.",
  },
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Try to get the language from localStorage, default to 'it'
  const [language, setLanguageState] = useState<Language>("it");

  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "it")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Update localStorage when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook for using the language context
export function useLanguage() {
  return useContext(LanguageContext);
}
