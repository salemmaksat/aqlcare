import NYUADLogo from "../assets/nyuad_logo.png";
import CCADLogo from "../assets/ccad_logo.png";
import DOHLogo from "../assets/doh_logo.png";

import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.png";

import {
  RiHomeHeartFill,
  RiLineChartLine,
  RiBrain2Fill,
  RiChatVoiceAiFill,
  RiSpeakFill,
  RiShieldUserFill,
} from "@remixicon/react";

export const HERO_CONTENT = {
  badgeText: "🚀 New Feature: AqlCare 2.0 Now Live on Zoom!",
  mainHeading: "Connecting Families \n to Detect Dementia Early",
  subHeading:
    "Cognitive screening through Zoom calls. No stress, no puzzles — just a call.",
  callToAction: {
    primary: "Learn More",
    secondary: "Request a Demo",
  },
  trustedByText: "Trusted by Leading Health Organizations and Universities"
};

export const BRAND_LOGOS = [
  { src: NYUADLogo, alt: "NYUAD" },
  { src: CCADLogo, alt: "CCAD" },
  { src: DOHLogo, alt: "DOH" },
];

export const HOW_IT_WORKS_CONTENT = {
  sectionTitle: "AqlCare in Action",
  sectionDescription:
    "Seamlessly integrating cognitive screening into everyday conversations.",
  steps: [
    {
      title: "Initiate a Call",
      description:
        "Make a Zoom call to your loved one and our plugin analyzes the audio stream.",
      imageSrc: pic1,
      imageAlt: "Call",
    },
    {
      title: "Chatbot Guidance",
      description:
        "System monitors the dialogue and sends you an assessment question in the chat.",
      imageSrc: pic2,
      imageAlt: "Chatbot",
    },
    {
      title: "Multilingual Support",
      description:
        "Works in 30+ languages, including 25 Arabic dialects for diverse regions.",
      imageSrc: pic5,
      imageAlt: "Languages",
    },
    {
      title: "Real-Time Transcription",
      description:
        "Whisper converts speech to text on the fly, capturing every answer accurately.",
      imageAlt: "Transcribe",
    },
    {
      title: "Trend Tracking",
      description:
        "System instantly benchmarks responses against MMSE/MoCA tests and assigns scores.",
      imageSrc: pic4,
      imageAlt: "Trends", 
    },
    {
      title: "Recommendations",
      description:
        "Scores are displayed on your dashboard, and any significant drop triggers a medical follow-up.",
      imageSrc: pic3,
      imageAlt: "Alerts",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Core Features of AqlCare",
  sectionDescription:
    "Revolutionizing Dementia Screening with Family-Centered Care.",
  features: [
    {
      id: 1,
      icon: <RiHomeHeartFill className="w-8 h-8" />,
      title: "Non-Invasive Assessment",
      description:
        "Have a natural conversation instead of stressful clinical tests every month.",
    },
    {
      id: 2,
      icon: <RiBrain2Fill className="w-8 h-8" />,
      title: "Modular Cognitive Testing",
      description:
        "Breaks MMSE and MoCA into weekly prompts to reduce test fatigue.",
    },
    {
      id: 3,
      icon: <RiChatVoiceAiFill className="w-8 h-8" />,
      title: "Real-Time Transcription & Analysis",
      description:
        "Uses Logistic regression for immediate, accurate scoring.",
    },
    {
      id: 4,
      icon: <RiLineChartLine className="w-8 h-8" />,
      title: "Continuous Trend Tracking",
      description:
        "Visualizes performance over time via an intuitive dashboard.",
    },
    {
      id: 5,
      icon: <RiSpeakFill className="w-8 h-8" />,
      title: "Multilingual & Culturally Adaptable",
      description:
        "Supports 30+ languages, including 25 Arabic dialects.",
    },
    {
      id: 6,
      icon: <RiShieldUserFill className="w-8 h-8" />,
      title: "Robust Data Security",
      description:
        "Meets HIPAA, GDPR, SOC2, and CCPA standards for privacy and compliance.",
    },
  ],
};

export const PLANS_CONTENT = {
  sectionTitle: "Choose Your Plan",
  sectionDescription:
    "All plans include 4 hours of calls per month, AI-guided prompts, transcription, automated scoring, and trend dashboards.",
  popularBadge: "Most Popular",
  ctaText: "Get Started",
  plans: [
    {
      name: "Standard",
      price: "29 AED / month",
      description:
        "Perfect for individual caregivers.",
      features: [
        "Monitor 1 senior",
        "Single caregiver login",
        "Email support",
      ],
    },
    {
      name: "Family",
      price: "49 AED / month",
      description:
        "Ideal for households caring for multiple loved ones.",
      features: [
        "Monitor up to 3 seniors",
        "Shared dashboard",
        "Priority chat",
      ],
      popular: true,
    },
    {
      name: "Annual",
      price: "299 AED / year",
      description:
        "Best value for year-round peace of mind.",
      features: [
        "All Family features",
        "17% savings vs monthly",
        "VIP support",
      ],
    },
  ],
};

export const FOOTER_CONTENT = {

  platformsText:
    "AqlCare | Cure through Connection",
  copyrightText: "© 2025 AqlCare, Inc. All rights reserved.",
};
