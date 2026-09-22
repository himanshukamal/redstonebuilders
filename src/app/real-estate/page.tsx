import type { Metadata } from "next";
import {
  Building2,
  Car,
  FileCheck2,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Store,
  Trees,
  Users,
} from "lucide-react";
import EnquirySection from "../components/EnquirySection";
import FeatureGrid from "../components/FeatureGrid";
import ListingGrid, { type Listing } from "../components/ListingGrid";
import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Real Estate",
  description: "Buy verified residential plots, villas, apartments and commercial properties.",
};

const offerings = [
  {
    icon: Trees,
    title: "Residential Plots",
    description: "Approved plots in fast-growing layouts with clear titles, ready for you to build on.",
  },
  {
    icon: Home,
    title: "Villas & Independent Houses",
    description: "Spacious, ready-to-move homes in gated communities and quiet residential areas.",
  },
  {
    icon: Building2,
    title: "Apartments",
    description: "2, 3 and 4 BHK apartments in well-connected projects with modern amenities.",
  },
  {
    icon: Store,
    title: "Commercial Spaces",
    description: "Showrooms, shops and office floors on high-visibility main roads.",
  },
];

const featuredProperties: Listing[] = [
  {
    title: "3 BHK Premium Apartment",
    location: "Whitefield, Bangalore",
    price: "₹1.25 Cr",
    type: "Apartment",
    beds: 3,
    baths: 3,
    area: "1,650 sq.ft",
    tag: "New Launch",
  },
  {
    title: "4 BHK Independent Villa",
    location: "Sarjapur Road, Bangalore",
    price: "₹2.40 Cr",
    type: "Villa",
    beds: 4,
    baths: 4,
    area: "2,800 sq.ft",
    tag: "Ready to Move",
  },
  {
    title: "Residential Plot (30x40)",
    location: "Devanahalli, Bangalore",
    price: "₹48 L",
    type: "Plot",
    area: "1,200 sq.ft",
    tag: "Approved Layout",
  },
  {
    title: "2 BHK Apartment",
    location: "Electronic City, Bangalore",
    price: "₹68 L",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,120 sq.ft",
  },
  {
    title: "Retail Showroom",
    location: "Indiranagar, Bangalore",
    price: "₹3.10 Cr",
    type: "Commercial",
    area: "2,200 sq.ft",
    tag: "Main Road",
  },
  {
    title: "Corner Plot (40x60)",
    location: "Yelahanka, Bangalore",
    price: "₹1.05 Cr",
    type: "Plot",
    area: "2,400 sq.ft",
  },
];

const buyingSteps = [
  {
    title: "Share Your Requirements",
    description: "Tell us your budget, preferred locations and the type of property you want.",
  },
  {
    title: "Shortlist & Site Visits",
    description: "We shortlist matching properties and arrange free, accompanied site visits.",
  },
  {
    title: "Legal Verification",
    description: "Our team checks titles, approvals and documents so you buy with confidence.",
  },
  {
    title: "Registration & Handover",
    description: "We help with loans, paperwork and registration until the keys are in your hands.",
  },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "RERA-Registered Projects",
    description: "We only list projects that meet regulatory requirements.",
  },
  {
    icon: FileCheck2,
    title: "Clear Legal Titles",
    description: "Every property is verified for ownership and approvals before listing.",
  },
  {
    icon: Landmark,
    title: "Home Loan Assistance",
    description: "Get help comparing and applying for home loans with leading banks.",
  },
  {
    icon: Car,
    title: "Free Site Visits",
    description: "We pick you up and show you around at a time that suits you.",
  },
];

export default function RealEstatePage() {
  return (
    <div>
      <PageHero
        title="Find your perfect property"
        subtitle="Verified plots, villas, apartments and commercial spaces in prime locations."
        image="/hero1.jpg"
        stats={[
          { icon: Building2, value: "120+", label: "Properties" },
          { icon: MapPin, value: "15+", label: "Locations" },
          { icon: Users, value: "3000+", label: "Happy Clients" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title="Properties for every need and budget"
          description="From your first plot to a premium villa or a commercial investment, we help you find the right property."
        />
        <FeatureGrid features={offerings} columns={4} />
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="Featured properties"
          title="Handpicked listings"
          description="A selection of our latest properties. Contact us for the full list and current availability."
        />
        <ListingGrid listings={featuredProperties} />
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="Buying made simple" />
        <ProcessSteps steps={buyingSteps} />
      </Section>

      <Section tinted>
        <SectionHeading eyebrow="Why choose us" title="Buy with complete peace of mind" />
        <FeatureGrid features={reasons} columns={4} />
      </Section>

      <EnquirySection
        title="Looking to buy or sell a property?"
        description="Share your requirements and our property advisor will get back to you within 24 hours."
        points={[
          "Personalised property recommendations",
          "Free site visits and legal verification",
          "Help selling your existing property at the right price",
        ]}
        formTitle="Find Your Property"
        formSubtitle="Tell us what you're looking for and we'll call you back"
        buttonText="Send Enquiry"
        enquiryType="Real Estate"
      />
    </div>
  );
}
