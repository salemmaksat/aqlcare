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
    "Cognitive Health Monitoring through AI-Assisted Video/Audio Calls.",
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
    "Seamlessly integrating AI-driven cognitive assessments into everyday conversations.",
  steps: [
    {
      title: "Initiate a Call",
      description:
        "Make a five-minute call to your loved one — it's a natural, routine check-in rather than a formal test.",
      imageSrc: pic1,
      imageAlt: "Call",
    },
    {
      title: "Chatbot Guidance",
      description:
        "A friendly AI chatbot gently prompts you with questions inspired by MMSE/MoCA assessments.",
      imageSrc: pic2,
      imageAlt: "Chatbot",
    },
    {
      title: "Multilingual Support",
      description:
        "Make assessments in 30+ languages, including 25 Arabic dialects for diverse regions.",
      imageSrc: pic5,
      imageAlt: "Languages",
    },
    {
      title: "Real-Time Transcription",
      description:
        "Advanced speech-to-text technology transcribes the conversation accurately.",
      imageAlt: "Transcribe",
    },
    {
      title: "Trend Tracking",
      description:
        "The AI reviews the transcript, scoring cognitive functions like memory, attention, language, and orientation.",
      imageSrc: pic4,
      imageAlt: "Trends", 
    },
    {
      title: "Recommendations",
      description:
        "If a decline is detected, you’ll receive an automated alert advising a consultation with a healthcare professional.",
      imageSrc: pic3,
      imageAlt: "Alerts",
    },
  ],
};

export const KEY_FEATURES_CONTENT = {
  sectionTitle: "Core Features of AqlCare",
  sectionDescription:
    "Revolutionizing Dementia Detection with AI-Enhanced, Family-Centered Care.",
  features: [
    {
      id: 1,
      icon: <RiHomeHeartFill className="w-8 h-8" />,
      title: "Non-Invasive Assessment",
      description:
        "Have a natural conversation instead of stressful clinical tests.",
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
        "Uses advanced NLP for immediate, accurate scoring.",
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

export const FOOTER_CONTENT = {

  platformsText:
    "AqlCare | Cure through Connection",
  copyrightText: "© 2025 AqlCare, Inc. All rights reserved.",
};
