import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  Hammer,
  Home,
  KeyRound,
  PencilRuler,
  ShieldCheck,
  Sofa,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import BrandImageCarousel from "../components/BrandImageCarousel";
import CostEstimation from "../components/CostEstimation";
import EnquirySection from "../components/EnquirySection";
import FeatureGrid from "../components/FeatureGrid";
import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Construction",
  description: "End-to-end residential and commercial construction, from design to handover.",
};

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Independent houses, villas and duplexes built to your plans with quality materials.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Offices, shops, showrooms and mixed-use buildings delivered on schedule.",
  },
  {
    icon: PencilRuler,
    title: "Architecture & Design",
    description: "2D floor plans, 3D elevations and structural design by experienced architects.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodelling",
    description: "Floor additions, structural repairs and complete makeovers of existing homes.",
  },
  {
    icon: Sofa,
    title: "Interior Design",
    description: "Modular kitchens, wardrobes, false ceilings and full home interiors.",
  },
  {
    icon: KeyRound,
    title: "Turnkey Projects",
    description: "One team handles everything from approvals to handover, so you just move in.",
  },
];

const constructionSteps = [
  {
    title: "Consultation",
    description: "We understand your requirements, budget and timeline, and visit your plot.",
  },
  {
    title: "Design & Planning",
    description: "Our architects prepare floor plans, elevations and a detailed cost estimate.",
  },
  {
    title: "Approvals",
    description: "We handle building plan approvals and the paperwork with local authorities.",
  },
  {
    title: "Construction",
    description: "Work begins with a dedicated site engineer and regular progress updates.",
  },
  {
    title: "Quality Checks",
    description: "Every stage is inspected before we move to the next one.",
  },
  {
    title: "Handover",
    description: "We do a final walkthrough, hand over the keys and share all documents.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Stage-wise Quality Checks",
    description: "Inspections at every milestone, from foundation to finishing.",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    description: "Detailed quotes, stage-wise payments and no hidden costs.",
  },
  {
    icon: CalendarCheck,
    title: "On-time Delivery",
    description: "A clear project schedule with regular updates on progress.",
  },
  {
    icon: Wrench,
    title: "Post-handover Support",
    description: "We stay available for fixes and maintenance after you move in.",
  },
];

export default function ConstructionPage() {
  return (
    <div>
      <PageHero
        title="Building with quality you can trust"
        subtitle="End-to-end residential and commercial construction, from design to handover."
        image="/hero.jpg"
        stats={[
          { icon: Home, value: "7000+", label: "Homes" },
          { icon: Users, value: "3000+", label: "Happy Clients" },
          { icon: Building2, value: "120+", label: "Properties" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Our services"
          title="Everything you need to build"
          description="Whether it's a new home, a commercial building or a renovation, one team manages it all."
        />
        <FeatureGrid features={services} />
      </Section>

      <Section tinted>
        <SectionHeading eyebrow="Our process" title="From first meeting to moving in" />
        <ProcessSteps steps={constructionSteps} />
      </Section>

      <CostEstimation />

      <Section tinted>
        <SectionHeading eyebrow="Why choose us" title="Built right, the first time" />
        <FeatureGrid features={reasons} columns={4} />
      </Section>

      <div className="bg-white pt-16">
        <SectionHeading
          eyebrow="Materials we trust"
          title="Only branded, quality materials"
          align="center"
        />
      </div>
      <BrandImageCarousel />

      <EnquirySection
        title="Ready to build your dream home?"
        description="Book a free consultation and get a detailed estimate for your project."
        points={[
          "Free site visit and consultation",
          "Detailed, itemised cost estimate",
          "Dedicated site engineer for your project",
        ]}
        enquiryType="Construction"
      />
    </div>
  );
}
