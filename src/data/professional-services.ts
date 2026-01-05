import type { LucideIcon } from "lucide-react";
import {
    Droplets,
    Gauge,
    Wrench,
    MapPin,
    AlertCircle,
} from "lucide-react";

export interface ProfessionalService {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor: "primary" | "accent";
    buttonText: string;
}

export const professionalServices: ProfessionalService[] = [
    {
        id: "leak-detection",
        title: "Leak Detection",
        description:
            "Expert leak detection and repair, including specialized slab leak solutions. Our experienced technicians guarantee accurate location and permanent fixes.",
        icon: Droplets,
        iconColor: "primary",
        buttonText: "Learn More",
    },
    {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        description:
            "Advanced drain cleaning with cable machines and hydro-jetting technology. DrainVision Sewer Camera for precise pipe inspection from house to roadway.",
        icon: Gauge,
        iconColor: "accent",
        buttonText: "Learn More",
    },
    {
        id: "toilets-fixtures",
        title: "Toilets & Fixtures",
        description:
            "Complete toilet repair and installation services. Expert handling of blockages, overflows, and drainage issues with quick, reliable solutions.",
        icon: Wrench,
        iconColor: "primary",
        buttonText: "Learn More",
    },
    {
        id: "water-heaters",
        title: "Water Heaters",
        description:
            "Professional water heater installation, repair, and maintenance. Energy-efficient solutions for residential and commercial properties.",
        icon: Gauge,
        iconColor: "accent",
        buttonText: "Learn More",
    },
    {
        id: "sewer-inspections",
        title: "Sewer Inspections",
        description:
            "State-of-the-art camera inspection technology to identify and diagnose sewer line issues without unnecessary excavation.",
        icon: MapPin,
        iconColor: "primary",
        buttonText: "Learn More",
    },
    {
        id: "emergency-services",
        title: "Emergency Services",
        description:
            "24/7 emergency plumbing services. Our team is always ready to respond to your urgent plumbing needs, day or night.",
        icon: AlertCircle,
        iconColor: "accent",
        buttonText: "Call Emergency",
    },
];
