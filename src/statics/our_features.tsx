import { FiSearch, FiShield, FiGlobe, FiCpu } from "react-icons/fi";
import { IconType } from "react-icons";

interface OurFeaturesProps {
    icon: IconType,
    title: string,
    description: string
}

const our_features: OurFeaturesProps[] = [
    {
        icon: FiSearch,
        title: "Effortless Product Comparison",
        description: "Quickly compare products across categories for informed decisions."
    },
    {
        icon: FiCpu,
        title: "Personalized AI Experience",
        description: "AI-driven recommendations based on your preferences and behavior."
    },
    {
        icon: FiShield,
        title: "Enhanced Data Security Assurance",
        description: "Robust security measures to protect your data and privacy."
    },
    {
        icon: FiGlobe,
        title: "Localized & Multilingual Support",
        description: "Access content in your preferred language with automatic localization."
    }
];

export default our_features;
