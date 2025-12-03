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
  it: {
    // Header
    "nav.features": "Funzionalità",
    "nav.pricing": "Prezzi",
    "nav.download": "Scarica",
    "nav.about": "Chi Siamo",
    "nav.openSource": "Open Source",
    "nav.support": "Supporto",
    "nav.privacy": "Privacy",
    "nav.terms": "Termini",

    // Hero
    "hero.openSourceBadge": "Open Source su GitHub",
    "hero.pretitle": "PRODUTTIVITÀ VOCALE",
    "hero.title": "Parla alle tue attività.",
    "hero.subtitle":
      "Mytaskly è lo spazio di lavoro bianco e nero dove un assistente vocale AI organizza attività, pianificazioni e note nel momento in cui parli. L'applicazione sarà rilasciata tra qualche settimana. Iscriviti alla beta per l'accesso anticipato.",
    "hero.betaBadge": "Iscrizioni Beta Aperte",
    "hero.cta.download": "Unisciti alla Beta",
    "hero.cta.features": "Controlla lo stato di sviluppo",
    "hero.highlight.voice.title": "CHAT VOCALE",
    "hero.highlight.voice.description":
      "Cattura attività e idee a mani libere con conversazioni naturali.",
    "hero.highlight.memory.title": "MEMORIA VIVA",
    "hero.highlight.memory.description":
      "Il tuo assistente ricorda contesto, decisioni e follow-up.",
    "hero.highlight.focus.title": "VISTE FOCUS",
    "hero.highlight.focus.description":
      "Solo l'essenziale sullo schermo così ogni giorno rimane ordinato.",
    "hero.preview.assistant": "ASSISTENTE AI",
    "hero.preview.greeting": "Ciao! Cosa dovremmo pianificare insieme oggi?",
    "hero.preview.user": "TU",
    "hero.preview.userMessage":
      "Ricordami domani mattina di confermare l'appuntamento dal dentista.",
    "hero.preview.ai": "MYTASKLY",
    "hero.preview.aiMessage":
      "Assolutamente. Ti avviserò alle 8:00 e preparerò il resto della giornata intorno ad esso.",
    "hero.preview.placeholder": "Tieni premuto per parlare",

    // Organize Your Life
    "organize.pretitle": "TUTTO SCORRE DALLA VOCE",
    "organize.title": "Le conversazioni si trasformano in giorni organizzati.",
    "organize.description":
      "Parla naturalmente e lascia che Mytaskly traduca le parole in attività, promemoria e note con un layout monocromatico ponderato che mantiene spazio per respirare.",
    "organize.points.voice":
      "Detta attività, note e follow-up senza toccare lo schermo.",
    "organize.points.context":
      "Lascia che l'assistente comprenda automaticamente priorità e dipendenze.",
    "organize.points.calendar":
      "Sincronizza i piani con il tuo calendario e regola la pianificazione con una semplice frase.",
    "organize.points.sync":
      "Accedi alle tue attività da qualsiasi dispositivo con sincronizzazione offline-first.",
    "organize.cta": "Guarda come funziona",

    // Features
    "features.pretitle": "AI CHE ASCOLTA",
    "features.title": "Funzionalità Potenti",
    "features.subtitle":
      "Dalla prima frase al promemoria finale, l'assistente orchestra ogni dettaglio per te.",
    "features.whyChoose": "Perché scegliere Mytaskly",
    "features.learnMore": "Scopri di più",
    "features.appFeatures": "Elementi vocali nativi",
    "features.appFeaturesSubtitle":
      "Ogni modulo è ottimizzato per uno spazio di lavoro monocromatico calmo che mantiene la conversazione al centro della scena.",
    "features.carouselHint": "trascina lateralmente",
    "features.collectionsPretitle": "IL BANCO DI LAVORO",

    // Feature items
    "feature.voice.title": "Cattura vocale",
    "feature.voice.description":
      "Inizia una conversazione e guarda attività, note e promemoria apparire all'istante.",
    "feature.notifications.title": "Notifiche intelligenti",
    "feature.notifications.description":
      "Ricevi promemoria tempestivi e aggiornamenti che si adattano al tuo programma e priorità.",
    "feature.calendar.title": "Integrazione calendario",
    "feature.calendar.description":
      "Sincronizza perfettamente con Google Calendar per una vista unificata di attività ed eventi.",
    "feature.sync.title": "Sincronizzazione multi-dispositivo",
    "feature.sync.description":
      "Le tue attività ti seguono ovunque con sincronizzazione offline-first su tutti i dispositivi.",
    "feature.context.title": "Pianificazione consapevole del contesto",
    "feature.context.description":
      "L'assistente comprende dipendenze, collaboratori e priorità in tempo reale.",
    "feature.automation.title": "Routine automatizzate",
    "feature.automation.description":
      "Lascia che Mytaskly costruisca sequenze ricorrenti e ottimizzi gli orari automaticamente.",
    "feature.memory.title": "Memoria condivisa",
    "feature.memory.description":
      "Ogni interazione alimenta una base di conoscenza in evoluzione pronta per prompt futuri.",
    "feature.privacy.title": "Privacy by design",
    "feature.privacy.description":
      "Crittografia end-to-end e controlli chiari mantengono il tuo spazio di lavoro sicuro.",

    // Portfolio Grid Categories
    "category.all": "Tutto",
    "category.voice": "Spazio vocale",
    "category.core": "Funzionalità Core",
    "category.integration": "Integrazione",
    "category.security": "Sicurezza",
    "category.automation": "Automazione",
    "category.intelligence": "Intelligenza",
    "category.collaboration": "Collaborazione",

    // Portfolio Grid Items
    "portfolio.voice.title": "Console vocale",
    "portfolio.voice.description":
      "Emetti comandi, cattura pensieri e ricevi conferme vocali all'istante.",
    "portfolio.tasks.title": "Gestione Attività",
    "portfolio.tasks.description":
      "Crea, organizza e completa attività con operazioni CRUD complete e categorizzazione intelligente.",
    "portfolio.notifications.title": "Notifiche Intelligenti",
    "portfolio.notifications.description":
      "Ricevi promemoria tempestivi 1 ora prima delle scadenze con categorizzazione intelligente.",
    "portfolio.calendar.title": "Sincronizzazione calendario",
    "portfolio.calendar.description":
      "Sincronizzazione bidirezionale con Google Calendar per una vista unificata del programma.",
    "portfolio.sync.title": "Sincronizzazione Offline",
    "portfolio.sync.description":
      "Architettura offline-first con sincronizzazione automatica ogni 5 minuti quando online.",
    "portfolio.security.title": "Sicurezza e Privacy",
    "portfolio.security.description":
      "Autenticazione JWT, crittografia HTTPS e condivisione sicura delle categorie con permessi granulari.",
    "portfolio.routines.title": "Routine AI",
    "portfolio.routines.description":
      "Genera flussi ricorrenti che si adattano alla vita reale senza modifiche manuali.",
    "portfolio.context.title": "Hub di contesto",
    "portfolio.context.description":
      "Mantieni progetti, persone e priorità connessi nella memoria dell'assistente.",
    "portfolio.notes.title": "Note condivise",
    "portfolio.notes.description":
      "Crea bacheche collaborative che rimangono perfettamente sincronizzate con aggiornamenti vocali.",
    "portfolio.metrics.title": "Metriche di focus",
    "portfolio.metrics.description":
      "Traccia la tua capacità ed energia con visualizzazioni monocromatiche calme.",

    // Comparison
    "comparison.pretitle": "MEGLIO INSIEME",
    "comparison.title": "Costruito per la produttività AI-first",
    "comparison.subtitle":
      "Un design monocromatico incontra l'input vocale naturale per offrire il modo più veloce dall'intenzione all'azione.",
    "comparison.tableTitle": "Panoramica funzionalità",
    "comparison.featuresLabel": "Funzionalità",
    "comparison.cta": "Scopri ogni funzionalità",
    "comparison.competitors.mytaskly": "Mytaskly",
    "comparison.features.voice.name": "Interfaccia chat vocale",
    "comparison.features.voice.tooltip":
      "Emetti comandi, cattura note e delega attività attraverso il parlato naturale.",
    "comparison.features.ai.name": "Assistenza AI per attività",
    "comparison.features.ai.tooltip":
      "Suggerimenti intelligenti si adattano ai tuoi modelli e modi di dire.",
    "comparison.features.memory.name": "Memoria di contesto condivisa",
    "comparison.features.memory.tooltip":
      "L'assistente ricorda accordi, note e decisioni tra le chat.",
    "comparison.features.automation.name": "Routine automatizzate",
    "comparison.features.automation.tooltip":
      "Costruisci flussi ricorrenti, riprogramma e coordina scadenze automaticamente.",
    "comparison.features.design.name": "Design focus monocromatico",
    "comparison.features.design.tooltip":
      "Un'interfaccia in bianco e nero mantiene l'attenzione su ciò che dici e di cui hai bisogno.",

    // Marquee
    "marquee.voice": "VOCALE-FIRST",
    "marquee.ai": "STUDIO AI",
    "marquee.minimal": "SPAZIO MINIMALE",
    "marquee.focus": "MODALITÀ FOCUS",

    // Timeline
    "timeline.title": "Il Nostro Viaggio",
    "timeline.subtitle":
      "L'evoluzione di Mytaskly dal concept alla tua app di produttività preferita",
    "timeline.concept.title": "Concept Mytaskly",
    "timeline.concept.description":
      "È nata l'idea di un'app todo minimalista e user-friendly.",
    "timeline.concept.details":
      "Costruito da zero in un piccolo ufficio domestico da un singolo sviluppatore, Mytaskly si prepara al lancio. Preparati!",
    "timeline.beta.title": "Lancio Beta",
    "timeline.beta.description":
      "Prima versione rilasciata a un gruppo selezionato di appassionati di produttività.",
    "timeline.beta.details":
      "La versione beta iniziale è stata testata da utenti selezionati che hanno fornito feedback prezioso che ha plasmato le funzionalità principali di Mytaskly. La filosofia di design minimalista è stata stabilita durante questa fase.",
    "timeline.release.title": "Rilascio Pubblico",
    "timeline.release.description":
      "Mytaskly 1.0 lanciato su piattaforme iOS e Android.",
    "timeline.release.details":
      "Dopo mesi di perfezionamento, la prima versione pubblica è stata rilasciata con recensioni entusiastiche, elogiata per la sua interfaccia intuitiva e il design elegante.",
    "timeline.webapp.title": "Lancio App Web",
    "timeline.webapp.description":
      "Mytaskly si è espanso al desktop con un'applicazione web completa.",
    "timeline.webapp.details":
      "L'esperienza cross-platform è stata completata con la nostra app web responsive, permettendo agli utenti di accedere alle loro attività da qualsiasi dispositivo con sincronizzazione perfetta.",
    "timeline.premium.title": "Funzionalità Premium",
    "timeline.premium.description":
      "Introdotto Mytaskly Pro con strumenti di produttività avanzati.",
    "timeline.premium.details":
      "Per i power user, abbiamo lanciato Mytaskly Pro con funzionalità come progetti illimitati, analisi avanzate e supporto prioritario.",
    "timeline.global.title": "Espansione Globale",
    "timeline.global.description":
      "Raggiunto 1 milione di utenti in tutto il mondo e aggiunto supporto per 10 lingue.",
    "timeline.global.details":
      "Mytaskly è diventato uno strumento di produttività globale con localizzazione nelle principali lingue e utenti in 150 paesi.",
    "timeline.idea.title": "Idea Mytaskly",
    "timeline.idea.description":
      "L'idea di un'app todo minimalista e user-friendly è nata attraverso discussioni.",
    "timeline.idea.details":
      "Durante una serie di sessioni di brainstorming nel 2024, è emerso il concept di Mytaskly. Abbiamo identificato una lacuna nel mercato per un'app todo veramente elegante che dia priorità alla semplicità e all'immediatezza senza sacrificare la funzionalità.",
    "timeline.development.title": "Inizio Sviluppo",
    "timeline.development.description":
      "Gabriele Cipriani, un costruttore di 16 anni, inizia a gettare le fondamenta di Mytaskly.",
    "timeline.development.details":
      "A gennaio 2025, il fondatore sedicenne Gabriele Cipriani ha iniziato a programmare la prima versione di Mytaskly, concentrandosi su un'interfaccia pulita e intuitiva che avrebbe semplificato la gestione delle attività per utenti di tutte le abilità tecniche.",
    "timeline.launch.title": "Lancio Ufficiale",
    "timeline.launch.description":
      "Mytaskly 1.0 programmato per il rilascio su iOS e Android.",
    "timeline.launch.details":
      "Mytaskly è pronto per il lancio ad agosto 2025 su piattaforme iOS e Android. La prima versione presenterà la nostra funzionalità principale con la filosofia di design pulita e minimalista che ha guidato il nostro sviluppo.",
    "timeline.future.premium.title": "Funzionalità Premium",
    "timeline.future.premium.description":
      "Introduzione di Mytaskly Pro con strumenti di produttività avanzati.",
    "timeline.future.premium.details":
      "Dopo il nostro lancio di successo, prevediamo di introdurre un livello premium con funzionalità avanzate come progetti illimitati, analisi avanzate e supporto prioritario per i power user che hanno bisogno di più dalla loro soluzione di gestione attività.",
    "timeline.future.expansion.title": "Espansione Globale",
    "timeline.future.expansion.description":
      "Far crescere la nostra base utenti e aggiungere supporto per più lingue.",
    "timeline.future.expansion.details":
      "Guardando al 2026, la nostra roadmap include l'espansione di Mytaskly per servire utenti in tutto il mondo con localizzazione in più lingue e funzionalità culturalmente rilevanti per aiutare tutti a rimanere organizzati.",

    // Newsletter
    "newsletter.title": "Rimani Aggiornato",
    "newsletter.subtitle":
      "Iscriviti alla nostra newsletter per consigli di produttività e accesso anticipato a nuove funzionalità.",
    "newsletter.placeholder": "Inserisci la tua email",
    "newsletter.subscribing": "Iscrizione...",
    "newsletter.subscribe": "Iscriviti",
    "newsletter.success": "Grazie per esserti iscritto alla nostra newsletter!",

    // Features Page
    "featuresPage.hero.title": "Funzionalità Potenti",
    "featuresPage.hero.subtitle":
      "Scopri come Mytaskly ti aiuta a organizzare la tua vita con eleganza ed efficienza",

    // Voice & Audio
    "featuresPage.voice.title": "Voce e Audio Intelligente",
    "featuresPage.voice.description":
      "Interagisci con Mytaskly usando la tua voce. Registra note vocali, chatta con l'assistente AI e ricevi risposte audio in tempo reale.",
    "featuresPage.voice.feature1":
      "Registrazione vocale con streaming in tempo reale via WebSocket",
    "featuresPage.voice.feature2":
      "Voice Activity Detection (VAD) con stop automatico su silenzio prolungato",
    "featuresPage.voice.feature3":
      "Riproduzione sequenziale di chunk audio per risposte immediate",
    "featuresPage.voice.feature4": "Chat vocale naturale con bot AI integrato",

    // Notifications & Reminders
    "featuresPage.notifications.title": "Notifiche e Promemoria Avanzati",
    "featuresPage.notifications.description":
      "Sistema completo di notifiche push per non perdere mai una scadenza importante. Ricevi promemoria personalizzati in base al tipo di attività.",
    "featuresPage.notifications.feature1":
      "Notifiche Push con setup completo di Expo Notifications",
    "featuresPage.notifications.feature2":
      "Promemoria Attività Automatici 1 ora prima della scadenza",
    "featuresPage.notifications.feature3":
      "Notifiche categorizzate per tipo di attività con metadati specifici",
    "featuresPage.notifications.feature4":
      "Gestione intelligente delle notifiche senza sovraccarico",

    // Calendars
    "featuresPage.calendars.title": "Integrazione Calendario",
    "featuresPage.calendars.description":
      "Sincronizza le tue attività con Google Calendar per una vista unificata del tuo programma. Le modifiche si riflettono istantaneamente in entrambe le direzioni.",
    "featuresPage.calendars.feature1":
      "Sincronizzazione Google Calendar: sincronizzazione bidirezionale attività ↔ Google Calendar",
    "featuresPage.calendars.feature2":
      "Vista Calendario: vista calendario con attività organizzate per giorno",
    "featuresPage.calendars.feature3":
      "Aggiornamenti in tempo reale tra Mytaskly e il tuo calendario",
    "featuresPage.calendars.feature4":
      "Pianificazione intelligente basata sulla disponibilità del calendario",

    // Complete Task Management
    "featuresPage.taskManagement.title": "Gestione Attività Completa",
    "featuresPage.taskManagement.description":
      "Sistema CRUD completo per creare, leggere, aggiornare ed eliminare attività. Organizza con categorie personalizzate, filtra per stato, priorità e data. Ricerca globale istantanea per trovare qualsiasi attività.",
    "featuresPage.taskManagement.feature1":
      "CRUD Completo: Create, Read, Update, Delete per tutte le attività",
    "featuresPage.taskManagement.feature2":
      "Categorizzazione avanzata con creazione di categorie personalizzate",
    "featuresPage.taskManagement.feature3":
      "Filtri per stato, priorità, categoria e data di scadenza",
    "featuresPage.taskManagement.feature4":
      "Ricerca Globale: ricerca globale istantanea tra tutte le attività",

    // Multi-device Synchronization
    "featuresPage.multiDeviceSync.title": "Sincronizzazione Multi-dispositivo",
    "featuresPage.multiDeviceSync.description":
      "Sistema offline-first con sincronizzazione automatica. Le tue modifiche vengono salvate localmente e sincronizzate ogni 5 minuti quando online, con gestione intelligente della coda per operazioni offline.",
    "featuresPage.multiDeviceSync.feature1":
      "Offline-First: Sync manager con caching offline per lavorare senza connessione",
    "featuresPage.multiDeviceSync.feature2":
      "Sincronizzazione Periodica: sincronizzazione automatica ogni 5 minuti quando online",
    "featuresPage.multiDeviceSync.feature3":
      "Sistema a Coda: operazioni in coda quando offline, eseguite appena torna la connessione",
    "featuresPage.multiDeviceSync.feature4":
      "Versionamento Cache con deduplicazione automatica e pulizia intelligente",

    // Security
    "featuresPage.security.title": "Sicurezza e Privacy",
    "featuresPage.security.description":
      "I tuoi dati sono protetti con autenticazione JWT, comunicazione HTTPS e sistema di condivisione categorie sicuro con livelli di permesso granulari.",
    "featuresPage.security.feature1":
      "Autenticazione JWT: autenticazione sicura basata su token",
    "featuresPage.security.feature2":
      "HTTPS: tutte le comunicazioni sono crittografate end-to-end",
    "featuresPage.security.feature3":
      "Condivisione Categorie con livelli di permesso (READ_ONLY, READ_WRITE)",
    "featuresPage.security.feature4":
      "Gestione Password: cambio password sicuro e verifica email",

    // Other Features
    "featuresPage.other.title": "Altre Funzionalità",
    "featuresPage.other.description":
      "Note adesive trascinabili, chat testuale con bot AI, supporto multilingua e tutorial interattivo per un'esperienza completa e personalizzata.",
    "featuresPage.other.feature1":
      "Sistema Note: note adesive trascinabili con colori personalizzabili",
    "featuresPage.other.feature2":
      "Chat Bot: chat testuale con risposte in streaming in tempo reale",
    "featuresPage.other.feature3":
      "Multi-Lingua: supporto completo per italiano e inglese (i18n)",
    "featuresPage.other.feature4":
      "Sistema Tutorial: onboarding interattivo per nuovi utenti",

    // Roadmap - Planned Features
    "featuresPage.roadmap.title": "Roadmap e Funzionalità Future",
    "featuresPage.roadmap.subtitle":
      "Ecco cosa stiamo sviluppando per rendere Mytaskly ancora più potente",
    "featuresPage.roadmap.comingSoon": "Prossimamente",

    "featuresPage.roadmap.speechToText.title": "Speech-to-Text Avanzato",
    "featuresPage.roadmap.speechToText.description":
      "Trascrizione vocale automatica con OpenAI Whisper, Google Cloud Speech-to-Text o supporto Azure",

    "featuresPage.roadmap.voiceCommands.title": "Comandi Vocali",
    "featuresPage.roadmap.voiceCommands.description":
      "Controllo completo dell'app tramite comandi vocali naturali",

    "featuresPage.roadmap.locationReminders.title": "Promemoria Basati su Posizione",
    "featuresPage.roadmap.locationReminders.description":
      "Geofencing per ricevere promemoria quando arrivi in luoghi specifici",

    "featuresPage.roadmap.recurringTasks.title": "Attività Ricorrenti",
    "featuresPage.roadmap.recurringTasks.description":
      "Crea attività che si ripetono automaticamente con frequenze personalizzate",

    "featuresPage.roadmap.subtasks.title": "Sottoattività e Checklist",
    "featuresPage.roadmap.subtasks.description":
      "Suddividi attività complesse in sottoattività più piccole e gestibili",

    "featuresPage.roadmap.aiCategorization.title":
      "Categorizzazione AI Automatica",
    "featuresPage.roadmap.aiCategorization.description":
      "L'AI impara dalle tue abitudini e categorizza automaticamente le nuove attività",

    "featuresPage.roadmap.smartLists.title": "Liste Intelligenti Dinamiche",
    "featuresPage.roadmap.smartLists.description":
      "Liste generate automaticamente come 'Oggi', 'Questa Settimana', 'Prossimi 7 Giorni'",

    "featuresPage.roadmap.analytics.title": "Analisi Avanzate",
    "featuresPage.roadmap.analytics.description":
      "Tracciamento abitudini, apprendimento pattern e report di produttività",

    "featuresPage.roadmap.twoFactor.title": "Autenticazione a Due Fattori (2FA)",
    "featuresPage.roadmap.twoFactor.description":
      "Sicurezza extra con autenticazione biometrica e 2FA",

    "featuresPage.roadmap.automation.title": "Automazione Workflow",
    "featuresPage.roadmap.automation.description":
      "Regole di automazione, operazioni batch e azioni condizionali",
    "featuresPage.ai.description":
      "Lascia che l'intelligenza artificiale aumenti la tua produttività. Le funzionalità AI di Mytaskly imparano dalle tue abitudini e ti aiutano a lavorare in modo più intelligente con suggerimenti intelligenti, creazione automatica di attività e insight di produttività personalizzati.",
    "featuresPage.ai.feature1": "Suggerimenti intelligenti basati sulle tue abitudini",
    "featuresPage.ai.feature2":
      "Elaborazione del linguaggio naturale per inserimento rapido delle attività",
    "featuresPage.ai.feature3":
      "Pianificazione automatica delle attività per una produttività ottimale",
    "featuresPage.ai.feature4":
      "Insight e report di produttività personalizzati",

    "featuresPage.calendar.title": "Integrazione Calendario Perfetta",
    "featuresPage.calendar.subtitle":
      "Collega Mytaskly con le tue app calendario preferite per una vista unificata del tuo programma e attività",
    "featuresPage.calendar.feature1.title": "Sincronizzazione Bidirezionale",
    "featuresPage.calendar.feature1.description":
      "Le modifiche effettuate nel tuo calendario o in Mytaskly si riflettono istantaneamente in entrambi i posti",
    "featuresPage.calendar.feature2.title": "Calendari Multipli",
    "featuresPage.calendar.feature2.description":
      "Connettiti con l'app calendario più popolare",
    "featuresPage.calendar.feature3.title": "Pianificazione Intelligente",
    "featuresPage.calendar.feature3.description":
      "Trova il momento perfetto per le tue attività in base alla disponibilità del tuo calendario",

    "featuresPage.cta.title": "Pronto a trasformare la tua produttività?",
    "featuresPage.cta.subtitle":
      "Unisciti a migliaia di utenti che hanno rivoluzionato la loro gestione delle attività con Mytaskly.",
    "featuresPage.cta.download": "Scarica Ora",
    "featuresPage.cta.pricing": "Visualizza prezzi",

    // Add disclaimer translation
    "featuresPage.disclaimer":
      "Disclaimer: Mytaskly è attualmente in sviluppo. Le funzionalità mostrate in questa pagina rappresentano la nostra roadmap e visione, ma il prodotto finale potrebbe variare. Il team di Mytaskly si impegnerà a implementare tutte queste funzionalità, ma alcune potrebbero essere soggette a modifiche o disponibili in aggiornamenti futuri.",

    // Add pricing disclaimer
    "pricing.disclaimer":
      "Disclaimer: I prezzi e le funzionalità mostrati sono indicativi e soggetti a modifiche. I prezzi finali e le funzionalità disponibili potrebbero differire al lancio ufficiale di Mytaskly.",

    // Pricing Page
    "pricing.title": "Scegli il Tuo Piano",
    "pricing.subtitle":
      "Seleziona il piano Mytaskly perfetto che si adatta alle tue esigenze di produttività",
    "pricing.free.title": "Gratuito",
    "pricing.free.description":
      "Perfetto per iniziare con la gestione attività di base",
    "pricing.premium.title": "Premium",
    "pricing.premium.description":
      "Produttività migliorata con funzionalità avanzate",
    "pricing.pro.title": "Pro",
    "pricing.pro.description": "Produttività definitiva con funzionalità AI",
    "pricing.mostPopular": "Consigliato",
    "pricing.month": "/mese",
    "pricing.cta.free": "Inizia",
    "pricing.cta.premium": "Iscriviti Ora",
    "pricing.cta.pro": "Passa a Pro",

    "pricing.free.feature1": "Fino a 3 liste attività",
    "pricing.free.feature2": "Gestione attività di base",
    "pricing.free.feature3": "Promemoria giornalieri",
    "pricing.free.feature4": "Accesso app mobile",
    "pricing.free.feature5": "Filtri avanzati",
    "pricing.free.feature6": "Temi e personalizzazione",
    "pricing.free.feature7": "Suggerimenti AI per attività",

    "pricing.premium.feature1": "Liste attività illimitate",
    "pricing.premium.feature2": "Gestione attività avanzata",
    "pricing.premium.feature3": "Promemoria e notifiche personalizzate",
    "pricing.premium.feature4": "Sincronizzazione cross-platform",
    "pricing.premium.feature5": "Filtri e ordinamento avanzati",
    "pricing.premium.feature6": "Temi e personalizzazione",
    "pricing.premium.feature7": "Suggerimenti AI per attività",

    "pricing.pro.feature1": "Tutto in Premium",
    "pricing.pro.feature2": "Supporto prioritario",
    "pricing.pro.feature3": "Analisi e report avanzati",
    "pricing.pro.feature4": "Funzionalità di collaborazione team",
    "pricing.pro.feature5": "Integrazione calendario",
    "pricing.pro.feature6": "Workflow personalizzati",
    "pricing.pro.feature7": "Suggerimenti e automazione AI",

    "pricing.faq.title": "Domande frequenti",
    "pricing.faq.subtitle":
      "Hai domande sui nostri piani tariffari? Trova risposte alle domande comuni qui sotto.",
    "pricing.faq.q1": "Posso cambiare tra piani?",
    "pricing.faq.a1":
      "Sì, puoi passare a un piano superiore o inferiore in qualsiasi momento. Le modifiche saranno applicate all'inizio del tuo prossimo ciclo di fatturazione.",
    "pricing.faq.q2": "C'è una prova gratuita per i piani a pagamento?",
    "pricing.faq.a2":
      "Sì, offriamo una prova gratuita di 14 giorni sia per i piani Premium che Pro. Non è richiesta carta di credito per iniziare la prova.",
    "pricing.faq.q3": "Quali metodi di pagamento accettate?",
    "pricing.faq.a3":
      "Accettiamo tutte le principali carte di credito, PayPal e Apple Pay per i pagamenti degli abbonamenti.",
    "pricing.faq.q4": "Posso cancellare il mio abbonamento in qualsiasi momento?",
    "pricing.faq.a4":
      "Assolutamente. Puoi cancellare il tuo abbonamento in qualsiasi momento dalle impostazioni del tuo account. Continuerai ad avere accesso fino alla fine del periodo di fatturazione corrente.",

    "pricing.cta.ready": "Pronto a potenziare la tua produttività?",
    "pricing.cta.readySubtitle":
      "Inizia a organizzare le tue attività con Mytaskly oggi e sperimenta la differenza.",
    "pricing.cta.getStarted": "Inizia Gratuitamente",
    "pricing.cta.learnMore": "Scopri di più",

    "pricing.monthly": "Mensile",
    "pricing.yearly": "Annuale",
    "pricing.billed": "fatturato annualmente",
    "pricing.save": "risparmia",

    // Pricing Comparison Table
    "pricing.comparison.title": "Confronta i Piani",
    "pricing.comparison.subtitle":
      "Trova il piano perfetto per le tue esigenze di produttività",
    "pricing.comparison.feature": "Funzionalità",
    "pricing.comparison.upTo3": "Fino a 3",
    "pricing.comparison.upTo50": "Fino a 50",
    "pricing.comparison.unlimited": "Illimitato",
    "pricing.comparison.basic": "Base",
    "pricing.comparison.advanced": "Avanzato",
    "pricing.comparison.limited": "Limitato",

    "pricing.comparison.category.core": "Funzionalità Core",
    "pricing.comparison.category.organization": "Organizzazione",
    "pricing.comparison.category.reminders": "Promemoria e Notifiche",
    "pricing.comparison.category.sync": "Sincronizzazione e Dispositivi",
    "pricing.comparison.category.customization": "Personalizzazione",
    "pricing.comparison.category.advanced": "Funzionalità Avanzate",
    "pricing.comparison.category.support": "Supporto",

    "pricing.comparison.taskLists": "Liste Attività",
    "pricing.comparison.tasks": "Attività per Lista",
    "pricing.comparison.subtasks": "Sottoattività",
    "pricing.comparison.attachments": "Allegati",
    "pricing.comparison.tags": "Tag ed Etichette",
    "pricing.comparison.filters": "Filtri",
    "pricing.comparison.sorting": "Opzioni di Ordinamento",
    "pricing.comparison.customViews": "Viste Personalizzate",
    "pricing.comparison.basicReminders": "Promemoria Base",
    "pricing.comparison.recurringReminders": "Promemoria Ricorrenti",
    "pricing.comparison.locationReminders": "Promemoria Basati su Posizione",
    "pricing.comparison.customNotifications": "Suoni Notifica Personalizzati",
    "pricing.comparison.devices": "Dispositivi",
    "pricing.comparison.cloudSync": "Sincronizzazione Cloud",
    "pricing.comparison.offlineMode": "Modalità Offline",
    "pricing.comparison.dataBackup": "Backup Dati",
    "pricing.comparison.themes": "Temi",
    "pricing.comparison.customColors": "Colori Personalizzati",
    "pricing.comparison.widgets": "Widget Schermata Home",
    "pricing.comparison.customFonts": "Font Personalizzati",
    "pricing.comparison.calendarIntegration": "Integrazione Calendario",
    "pricing.comparison.aiSuggestions": "Suggerimenti AI",
    "pricing.comparison.teamCollaboration": "Collaborazione Team",
    "pricing.comparison.analytics": "Analisi Produttività",
    "pricing.comparison.emailSupport": "Supporto Email",
    "pricing.comparison.prioritySupport": "Supporto Prioritario",
    "pricing.comparison.dedicatedManager": "Account Manager Dedicato",

    // Download Page
    "download.title": "Unisciti alla Beta",
    "download.subtitle":
      "L'applicazione sarà rilasciata tra qualche settimana. Iscriviti ora per essere tra i primi a provarla e ricevere aggiornamenti esclusivi.",
    "download.comingSoonAppStore": "Versione iOS in sviluppo",
    "download.comingSoonGooglePlay": "Prossimamente su Google Play",

    "download.badge": "Iscrizioni Beta Aperte",
    "download.buttons.playStore": "Unisciti alla Lista d'Attesa",
    "download.buttons.progress": "Visualizza progresso sviluppo",

    "download.waitlist.title": "Unisciti alla lista d'attesa beta",
    "download.waitlist.description":
      "Iscriviti per provare Mytaskly beta in anticipo, seguire la roadmap ed essere il primo a sapere quando iOS sarà pronto.",
    "download.waitlist.formTitle": "Richiedi accesso beta",
    "download.waitlist.formDescription":
      "Dicci dove vuoi provare Mytaskly. Ti avviseremo appena la tua build sarà pronta.",
    "download.waitlist.formFootnote":
      "Rispettiamo la tua casella di posta. Puoi disiscriverti dagli aggiornamenti in qualsiasi momento.",
    "download.waitlist.confirmationTitle": "Sei nella lista!",
    "download.waitlist.confirmationDescription":
      "Grazie per esserti unito alla lista d'attesa beta. Ti invieremo un'email con i dettagli di accesso e aggiornamenti sulla roadmap.",
    "download.waitlist.confirmationButton": "Torna alla pagina download",

    "download.form.name": "Nome",
    "download.form.namePlaceholder": "Mario Rossi",
    "download.form.email": "Email",
    "download.form.emailPlaceholder": "mario@esempio.com",
    "download.form.platform": "Piattaforma Preferita",
    "download.form.platformPlaceholder": "Scegli una piattaforma",
    "download.form.both": "Entrambe",
    "download.form.notifications": "Inviami aggiornamenti su Mytaskly",
    "download.form.notificationsHint":
      "Changelog, traguardi roadmap e inviti beta.",
    "download.form.errorEmail": "Inserisci un'email valida per unirti alla lista d'attesa.",
    "download.form.errorGeneric": "Qualcosa è andato storto. Riprova.",
    "download.form.submitting": "Invio in corso...",
    "download.form.submit": "Unisciti alla Lista",

    "download.toast.title": "Sei a posto!",
    "download.toast.description":
      "Grazie per testare la beta. Ti terremo aggiornato su ogni rilascio.",

    "download.benefits.title": "Perché unirsi alla beta",
    "download.benefits.subtitle":
      "Prova subito e aiuta a plasmare il rilascio finale.",

    "download.benefits.earlyAccess.title": "Accesso Prioritario",
    "download.benefits.earlyAccess.description":
      "Sii tra i primi a provare la beta Android non appena sarà disponibile.",

    "download.benefits.exclusiveFeatures.title": "Tracciamento progressi",
    "download.benefits.exclusiveFeatures.description":
      "Segui lo stato di sviluppo dalla pagina progressi e leggi il changelog più recente.",

    "download.benefits.premiumDiscount.title": "Feedback prioritario",
    "download.benefits.premiumDiscount.description":
      "Condividi idee direttamente con il team durante la beta e influenza cosa verrà rilasciato dopo.",

    "download.faq.title": "Domande Frequenti",
    "download.faq.subtitle":
      "Tutto quello che devi sapere sul test della beta.",
    "download.faq.q1": "Come mi unisco alla beta?",
    "download.faq.a1":
      "Unisciti alla lista d'attesa. Ti avviseremo non appena la beta sarà pronta per il download.",
    "download.faq.q2": "iOS è supportato?",
    "download.faq.a2":
      "Stiamo costruendo la versione iOS ora. Nel frattempo, segui la pagina progressi per vedere traguardi e tempi di rilascio.",
    "download.faq.q3": "Cosa devo aspettarmi dalla beta?",
    "download.faq.a3":
      "L'app è stabile ma ancora in evoluzione. I flussi vocali sono pronti e stiamo perfezionando assistenza AI e collaborazione.",

    "download.cta.title": "Preparati per il lancio",
    "download.cta.description":
      "Unisciti alla lista d'attesa e ti avviseremo non appena sarà disponibile.",
    "download.cta.button": "Unisciti alla Lista d'Attesa",

    // Testimonials
    "testimonials.title": "Cosa Dicono i Nostri Utenti",
    "testimonials.subtitle":
      "Unisciti alla comunità di utenti soddisfatti che hanno trasformato la loro produttività con Mytaskly",
    "testimonials.quote1":
      "Mytaskly ha completamente cambiato il modo in cui organizzo la mia giornata. L'interfaccia è bella e intuitiva, e la funzione liste intelligenti mi fa risparmiare così tanto tempo. Ho provato dozzine di app todo, ma questa è quella che uso.",
    "testimonials.author1": "Sarah Johnson",
    "testimonials.position1": "Direttore Marketing",
    "testimonials.quote2":
      "Come persona con ADHD, ho sempre avuto difficoltà con la gestione delle attività. Il design pulito e i promemoria intelligenti di Mytaskly sono stati un cambiamento radicale per la mia produttività. Finalmente riesco a stare al passo con le mie responsabilità senza sentirmi sopraffatto.",
    "testimonials.author2": "Michael Chen",
    "testimonials.position2": "Ingegnere Software",
    "testimonials.quote3":
      "La sincronizzazione cross-platform è impeccabile! Posso iniziare una lista attività sul telefono durante il tragitto e continuare sul laptop al lavoro. Anche la modalità scura è facile per gli occhi durante le sessioni di lavoro notturne.",
    "testimonials.author3": "Emma Rodriguez",
    "testimonials.position3": "Designer Freelance",
    "testimonials.appStoreRating": "Valutazione App Store",
    "testimonials.averageRating": "4,8 su 5 stelle da oltre 10.000 recensioni",

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
    "contact.form.sending": "Invio...",

    "contact.validation.nameRequired": "Il nome deve essere di almeno 2 caratteri.",
    "contact.validation.emailValid": "Inserisci un indirizzo email valido.",
    "contact.validation.subjectRequired":
      "L'oggetto deve essere di almeno 5 caratteri.",
    "contact.validation.messageRequired":
      "Il messaggio deve essere di almeno 10 caratteri.",

    "contact.toast.success": "Messaggio Inviato!",
    "contact.toast.successMessage":
      "Grazie per averci contattato. Ti risponderemo il prima possibile.",

    "contact.info.title": "Informazioni di Contatto",
    "contact.info.description":
      "Hai una domanda o hai bisogno di assistenza? Il nostro team di supporto è pronto ad aiutarti con qualsiasi domanda su Mytaskly.",
    "contact.info.email": "Email",
    "contact.info.phone": "Telefono",
    "contact.info.address": "Indirizzo",
    "contact.info.hours": "Tempo di risposta",
    "contact.info.hoursDetails": "1/2 giorni lavorativi",

    "contact.social.title": "Seguici",

    "contact.faq.title": "Domande Frequenti",
    "contact.faq.subtitle":
      "Trova risposte rapide alle domande comuni sul contattare il nostro team di supporto.",
    "contact.faq.q1": "Quanto velocemente riceverò una risposta?",
    "contact.faq.a1":
      "Miriamo a rispondere a tutte le richieste entro 24 ore durante i giorni lavorativi. Gli utenti Premium e Pro ricevono supporto prioritario con tempi di risposta più rapidi.",
    "contact.faq.q2":
      "Quali informazioni dovrei includere nella mia richiesta di supporto?",
    "contact.faq.a2":
      "Per aiutarci ad assisterti meglio, includi la versione dell'app, il tipo di dispositivo, una descrizione chiara del problema e eventuali screenshot pertinenti se possibile.",
    "contact.faq.q3": "Offrite supporto telefonico?",
    "contact.faq.a3":
      "Il supporto telefonico è disponibile per gli abbonati al piano Pro. Gli utenti Gratuiti e Premium possono contattarci via email o tramite il modulo di contatto in questa pagina.",
    "contact.faq.q4": "Come posso segnalare un bug?",
    "contact.faq.a4":
      "Puoi segnalare bug tramite questo modulo di contatto o inviando un'email a support@mytaskly.com. Includi i passaggi per riprodurre il problema e le informazioni del tuo dispositivo.",

    "contact.cta.title": "Pronto a potenziare la tua produttività?",
    "contact.cta.description":
      "Unisciti a migliaia di utenti che hanno trasformato la loro gestione delle attività con Mytaskly.",
    "contact.cta.button": "Scarica Mytaskly",
    "contact.cta.link": "Visualizza piani tariffari",

    // Footer
    "footer.copyright": "© 2025 Mytaskly. Tutti i diritti riservati.",
    "footer.description":
      "Mytaskly — Lo spazio di lavoro AI vocale per l'organizzazione quotidiana.",
    "footer.section.product": "Prodotto",
    "footer.section.company": "Azienda",
    "footer.section.legal": "Legale",

    // Common
    "common.learnMore": "Scopri di più",
    "common.getStarted": "Inizia",
    "common.comingSoon": "Prossimamente",
    "common.back": "Indietro",

    // Launch Banner
    "launch.notLaunched": "Mytaskly non è ancora stato lanciato!",
    "launch.joinWaitlist":
      "Unisciti alla nostra lista d'attesa per provare la versione beta in anticipo e ricevere",
    "launch.sixMonthsFree":
      "3 mesi di abbonamento Premium gratuito + 30% di sconto",
    "launch.atOfficialLaunch": "al lancio ufficiale.",
    "launch.earlyAccess": "Accesso anticipato + 3 mesi gratis + 30% di sconto",
    "launch.joinWaitlistButton": "Unisciti alla Lista d'Attesa",

    // Theme
    "theme.switchToLight": "Passa al tema chiaro",
    "theme.switchToDark": "Passa al tema scuro",
    "theme.system": "Usa tema di sistema",

    // About Page
    "about.title": "Chi Siamo",
    "about.subtitle":
      "Scopri il team dietro Mytaskly e la nostra missione di rendere la gestione delle attività semplice, bella ed efficace per tutti.",
    "about.story.title": "La Nostra Storia",
    "about.story.description":
      "Mytaskly è nato dalla frustrazione del nostro fondatore con le app di produttività esistenti - troppo complesse, troppo disordinate o semplicemente non abbastanza belle da usare quotidianamente.",
    "about.story.idea.title": "L'Idea",
    "about.story.idea.description":
      "Tutto è iniziato come un semplice schizzo in un quaderno. La visione di uno sviluppatore: un'app todo minimalista per declutterare la vita.",
    "about.story.team.title": "Il Team (2024)",
    "about.story.team.description":
      "Gabriele ha progettato e sviluppato da solo un'app di gestione attività con una visione chiara: creare lo strumento definitivo che le persone amerebbero usare ogni giorno.",
    "about.story.today.title": "Oggi",
    "about.story.today.description":
      "Mytaskly viene sviluppato incessantemente dal nostro team con dedizione e pazienza, per garantire la migliore esperienza per te",
    "about.mission.title": "La Nostra Missione",
    "about.mission.description":
      "In Mytaskly, crediamo che la tecnologia dovrebbe semplificare la vita, non complicarla. La nostra missione è creare strumenti che aiutino le persone a organizzare le loro vite con il minimo sforzo e la massima gioia.",
    "about.mission.userCentric.title": "Design Centrato sull'Utente",
    "about.mission.userCentric.description":
      "Ogni funzionalità, ogni pixel, ogni interazione in Mytaskly è progettata con l'esperienza utente in mente. Crediamo che il software dovrebbe essere una gioia da usare.",
    "about.mission.simplicity.title": "Semplicità con Potenza",
    "about.mission.simplicity.description":
      "Rifiutiamo l'idea che le app potenti debbano essere complesse. Mytaskly offre funzionalità avanzate in un'interfaccia intuitiva che non ti rallenta mai.",
    "about.mission.accessibility.title": "Accessibilità per Tutti",
    "about.mission.accessibility.description":
      "Crediamo che ottimi strumenti di produttività dovrebbero essere accessibili a tutti. Lavoriamo continuamente per rendere Mytaskly utilizzabile da persone con diverse abilità.",
    "about.mission.innovation.title": "Innovazione Continua",
    "about.mission.innovation.description":
      "Non ci accontentiamo mai dello status quo. Il nostro team è costantemente alla ricerca di modi per migliorare Mytaskly, incorporando nuove tecnologie e idee.",
    "about.team.title": "Il Nostro Team",
    "about.team.description":
      "Sono Gabriele, fondatore di Mytaskly: designer, sviluppatore e ossessionato dall'ottimizzazione del tempo. Lavorare da solo mi permette di:" +
      "✔ mantenere una visione chiara e coerente – Nessun compromesso, solo l'app che ho sempre sognato." +
      "✔ Muovermi con agilità – Implemento nuove funzionalità in ore, non mesi." +
      "✔ Ascoltarti direttamente – Tutto il feedback arriva a me, senza filtri." +
      "" +
      "Il risultato? Un'app interamente costruita con precisione maniacale, dove ogni pixel e ogni riga di codice riflette un'unica ossessione: la tua produttività.",
    "about.team.member1.name": "Gabriele Cipriani",
    "about.team.member1.role": "CEO e Fondatore",
    "about.team.member1.bio":
      "Gabriele ha fondato Mytaskly con la visione di creare un'app di produttività che fosse sia potente che bella da usare.",
    "about.team.member2.name": "Sofia Bianchi",
    "about.team.member2.role": "Chief Design Officer",
    "about.team.member2.bio":
      "Sofia guida il team di design, assicurando che ogni pixel di Mytaskly sia perfettamente allineato con la nostra filosofia di design.",
    "about.team.member3.name": "Luca Verdi",
    "about.team.member3.role": "CTO",
    "about.team.member3.bio":
      "Luca supervisiona lo sviluppo tecnico di Mytaskly, costruendo un'architettura robusta che supporta milioni di utenti.",
    "about.team.member4.name": "Giulia Marino",
    "about.team.member4.role": "Responsabile Esperienza Cliente",
    "about.team.member4.bio":
      "Giulia assicura che ogni interazione con Mytaskly sia intuitiva e piacevole, dalla prima installazione all'uso quotidiano.",
    "about.joinUs.title": "Unisciti a Noi",
    "about.joinUs.description":
      "Siamo sempre alla ricerca di persone talentuose appassionate di produttività e design. Se ti piace creare prodotti che le persone amano usare, potremmo essere il posto giusto per te.",
    "about.joinUs.openPositions": "Visualizza Posizioni Aperte",
    "about.joinUs.contactUs": "Contattaci",

    // Blog
    "blog.section.title": "Dal Nostro Blog",
    "blog.card.readMore": "Leggi di Più",
    "blog.posts.welcome.title": "Benvenuto nel Blog di Mytaskly",
    "blog.posts.welcome.description":
      "Suggerimenti, notizie e approfondimenti per aiutarti a rimanere produttivo.",
    "blog.posts.tips.title": "5 Consigli di Produttività che Devi Conoscere",
    "blog.posts.tips.description":
      "Aumenta la tua efficienza con queste semplici tecniche.",
    "blog.posts.design.title": "La Nostra Filosofia di Design",
    "blog.posts.design.description":
      "Come abbiamo realizzato l'interfaccia minimalista e funzionale di Mytaskly.",
    "blog.page.title": "Blog",
    "blog.page.description":
      "Esplora articoli, suggerimenti e aggiornamenti dal team di Mytaskly.",

    // Features Blog Contents
    "features.blog.author": "Gabriele Cipriani",
    "features.blog.readTime": "5 min di lettura",
    "features.blog.tocTitle": "Indice",
    "features.blog.taskManagement.section1.title":
      "Introduzione alla Gestione Attività",
    "features.blog.taskManagement.section1.p1":
      "La gestione delle attività è il cuore di ogni routine produttiva. In Mytaskly puoi creare, organizzare e completare attività con facilità.",
    "features.blog.taskManagement.section1.p2":
      "Usa formattazione ricca, allegati e sottoattività per suddividere progetti complessi in passaggi gestibili.",
    "features.blog.taskManagement.section1.p3":
      "Grazie a drag & drop e gesti rapidi, adattare l'ordine delle tue attività è più intuitivo che mai.",
    "features.blog.taskManagement.section2.title": "Funzionalità Principali",
    "features.blog.taskManagement.section2.p1":
      "Liste intelligenti che raggruppano automaticamente le attività di oggi, domani e completate.",
    "features.blog.taskManagement.section2.p2":
      "Promemoria personalizzabili per non perdere mai una scadenza importante.",
    "features.blog.taskManagement.section2.p3":
      "Sincronizzazione in tempo reale su tutti i dispositivi, da mobile a desktop.",
    "features.blog.taskManagement.section3.title": "Best Practice e Suggerimenti",
    "features.blog.taskManagement.section3.p1":
      "Pianifica la tua giornata la sera prima per iniziare con chiarezza mentale.",
    "features.blog.taskManagement.section3.p2":
      "Limita la tua lista giornaliera a 5 attività chiave per mantenere il focus.",
    "features.blog.taskManagement.section3.p3":
      "Rivedi settimanalmente le attività completate per celebrare i progressi e identificare opportunità di miglioramento.",

    "features.blog.smartLists.section1.title": "Introduzione alle Liste Intelligenti",
    "features.blog.smartLists.section1.p1":
      "Le Liste Intelligenti organizzano automaticamente le tue attività in base a data di scadenza, priorità e tag.",
    "features.blog.smartLists.section1.p2":
      "Accedi alle viste Oggi, In Arrivo e Completate con un solo clic.",
    "features.blog.smartLists.section1.p3":
      "Personalizza le regole per creare liste su misura per progetti specifici.",
    "features.blog.smartLists.section2.title": "Configurazione e Uso",
    "features.blog.smartLists.section2.p1":
      "Crea tag e filtri per segmentare le attività subito dopo averle create.",
    "features.blog.smartLists.section2.p2":
      "Imposta parametri di filtro avanzati per evidenziare attività urgenti.",
    "features.blog.smartLists.section2.p3":
      "Salva viste personalizzate per tornare rapidamente alle attività prioritarie.",
    "features.blog.smartLists.section3.title": "Vantaggi delle Liste Intelligenti",
    "features.blog.smartLists.section3.p1":
      "Risparmio di tempo: non devi più spostare manualmente le attività.",
    "features.blog.smartLists.section3.p2":
      "Maggiore chiarezza: vedi immediatamente cosa richiede attenzione a breve termine.",
    "features.blog.smartLists.section3.p3":
      "Flessibilità: modifica le regole in qualsiasi momento in base alle esigenze del tuo flusso di lavoro.",

    // Privacy Policy Page
    "privacy.title": "Informativa sulla Privacy",
    "privacy.lastUpdated": "Ultimo Aggiornamento",
    "privacy.intro":
      'Questa Informativa sulla Privacy descrive come MyTaskly ("noi", "nostro" o "l\'app") gestisce le informazioni quando utilizzi la nostra applicazione mobile.',

    "privacy.section1.title": "1. INFORMAZIONI CHE RACCOGLIAMO",
    "privacy.section1.content":
      "MyTaskly può richiedere l'accesso al microfono del tuo dispositivo per abilitare la funzione di registrazione vocale per creare attività e note. Le registrazioni audio vengono salvate localmente sul tuo dispositivo.",

    "privacy.section2.title": "2. COME UTILIZZIAMO LE TUE INFORMAZIONI",
    "privacy.section2.item1":
      "Le registrazioni audio vengono utilizzate esclusivamente per creare note vocali all'interno dell'app",
    "privacy.section2.item2": "Tutti i dati vengono salvati localmente sul tuo dispositivo",
    "privacy.section2.item3":
      "Non trasmettiamo, condividiamo o vendiamo i tuoi dati audio a terze parti",

    "privacy.section3.title": "3. ARCHIVIAZIONE E SICUREZZA DEI DATI",
    "privacy.section3.item1": "Tutte le registrazioni audio rimangono sul tuo dispositivo",
    "privacy.section3.item2":
      "Hai il pieno controllo per eliminare le registrazioni in qualsiasi momento",
    "privacy.section3.item3": "Non abbiamo accesso alle tue registrazioni",

    "privacy.section4.title": "4. PERMESSI",
    "privacy.section4.permission1": "Per registrare note vocali per attività",
    "privacy.section4.permission2": "Per regolare le impostazioni audio durante la registrazione",

    "privacy.section5.title": "5. PRIVACY DEI MINORI",
    "privacy.section5.content":
      "La nostra app non raccoglie consapevolmente informazioni da bambini di età inferiore ai 13 anni.",

    "privacy.section6.title": "6. MODIFICHE A QUESTA INFORMATIVA SULLA PRIVACY",
    "privacy.section6.content":
      "Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Le modifiche saranno pubblicate all'interno dell'app.",

    "privacy.section7.title": "7. CONTATTACI",
    "privacy.section7.content":
      "Per domande su questa Informativa sulla Privacy, contattaci a:",

    "privacy.cta.title": "La Tua Privacy Conta",
    "privacy.cta.description":
      "Ci impegniamo a proteggere la tua privacy e garantire che i tuoi dati rimangano sicuri.",

    // Members Page
    "members.login.title": "Unisciti o accedi all'Area Membri",
    "members.login.description":
      "Inserisci la tua email per unirti alla lista d'attesa e accedere allo spazio beta riservato.",
    "members.login.emailLabel": "Email",
    "members.login.emailPlaceholder": "la-tua-email@esempio.com",
    "members.login.errorInvalid":
      "Email non valida. Controlla il formato dell'email.",
    "members.login.errorGeneric": "Errore durante il login. Riprova.",
    "members.login.buttonLoading": "Login in corso...",
    "members.login.button": "Accedi o Registrati",

    "members.header.title": "Area Membri",
    "members.header.subtitle": "Contenuti esclusivi per i membri della lista d'attesa",
    "members.header.logout": "Esci",

    "members.welcome.title": "Benvenuto nella comunità esclusiva!",
    "members.welcome.description":
      "Grazie per esserti unito alla lista d'attesa di MyTaskly. Ecco cosa puoi fare qui:",

    "members.card.betaPreview.title": "Anteprima Beta",
    "members.card.betaPreview.description":
      "Ottieni accesso anticipato alle funzionalità beta di MyTaskly",
    "members.card.betaPreview.button": "Accedi all'Accesso Anticipato",

    "members.card.community.title": "Comunità",
    "members.card.community.description":
      "Unisciti alle discussioni con altri early adopter",
    "members.card.community.badge": "Prossimamente",

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
    "earlyAccess.progress.phase1": "Concept e Design",
    "earlyAccess.progress.phase2": "Funzionalità Core",
    "earlyAccess.progress.phase3": "Integrazione AI",
    "earlyAccess.progress.phase4": "Beta Testing",
    "earlyAccess.progress.phase5": "Revisione App Store",

    "earlyAccess.features.title": "Anteprima Funzionalità Esclusive",
    "earlyAccess.features.ai.title": "Assistente AI Personale",
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
    "openSource.mcp.comingSoon.feature1Subtitle": "Documentazione API",
    "openSource.mcp.comingSoon.feature2Title": "SDK multi-linguaggio",
    "openSource.mcp.comingSoon.feature2Subtitle": "Python, JS, Go",
    "openSource.mcp.comingSoon.feature3Title": "Esempi pronti",
    "openSource.mcp.comingSoon.feature3Subtitle": "Deploy in 5 minuti",
    "openSource.mcp.comingSoon.cta":
      "Iscriviti per ricevere una notifica appena sarà disponibile",

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
    const languageTranslations = translations[language];
    if (!languageTranslations) {
      return key;
    }
    return languageTranslations[key] || key;
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
