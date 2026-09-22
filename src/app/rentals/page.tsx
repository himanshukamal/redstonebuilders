import type { Metadata } from "next";
import {
  Building2,
  FileText,
  Home,
  ShieldCheck,
  Sofa,
  Store,
  UserCheck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import EnquirySection from "../components/EnquirySection";
import FeatureGrid from "../components/FeatureGrid";
import ListingGrid, { type Listing } from "../components/ListingGrid";
import PageHero from "../components/PageHero";
import ProcessSteps from "../components/ProcessSteps";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Rentals",
  description: "Apartments, houses and commercial spaces for rent, plus property management for owners.",
};

const categories = [
  {
    icon: Building2,
    title: "Apartments",
    description: "1, 2 and 3 BHK flats in gated societies with security, parking and power backup.",
  },
  {
    icon: Home,
    title: "Independent Houses",
    description: "Private houses and villas for families who want more space and privacy.",
  },
  {
    icon: Sofa,
    title: "Fully Furnished Homes",
    description: "Move in with just your suitcase: furniture, appliances and fittings included.",
  },
  {
    icon: Store,
    title: "Commercial & Office",
    description: "Plug-and-play offices, shops and showrooms in prime business areas.",
  },
];

const rentalListings: Listing[] = [
  {
    title: "2 BHK Semi-Furnished Flat",
    location: "HSR Layout, Bangalore",
    price: "₹32,000",
    priceNote: "/month",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,100 sq.ft",
    tag: "Available Now",
  },
  {
    title: "3 BHK Fully Furnished Flat",
    location: "Koramangala, Bangalore",
    price: "₹58,000",
    priceNote: "/month",
    type: "Apartment",
    beds: 3,
    baths: 3,
    area: "1,550 sq.ft",
    tag: "Furnished",
  },
  {
    title: "Independent House with Garden",
    location: "JP Nagar, Bangalore",
    price: "₹65,000",
    priceNote: "/month",
    type: "House",
    beds: 4,
    baths: 3,
    area: "2,400 sq.ft",
  },
  {
    title: "1 BHK Studio",
    location: "Marathahalli, Bangalore",
    price: "₹16,500",
    priceNote: "/month",
    type: "Apartment",
    beds: 1,
    baths: 1,
    area: "550 sq.ft",
    tag: "Budget",
  },
  {
    title: "Office Space (40 seats)",
    location: "Outer Ring Road, Bangalore",
    price: "₹2,20,000",
    priceNote: "/month",
    type: "Commercial",
    area: "3,000 sq.ft",
    tag: "Plug & Play",
  },
  {
    title: "Ground Floor Shop",
    location: "Jayanagar, Bangalore",
    price: "₹45,000",
    priceNote: "/month",
    type: "Commercial",
    area: "600 sq.ft",
  },
];

const rentingSteps = [
  {
    title: "Browse & Shortlist",
    description: "Tell us your budget and preferred area, and we'll share matching homes.",
  },
  {
    title: "Schedule a Visit",
    description: "Visit the properties you like at a time that works for you.",
  },
  {
    title: "Agreement & Verification",
    description: "We prepare the rental agreement and complete verification quickly.",
  },
  {
    title: "Move In",
    description: "Collect your keys and settle in. We're a call away if you need anything.",
  },
];

const ownerServices = [
  {
    icon: UserCheck,
    title: "Tenant Verification",
    description: "Background and document checks so you rent to reliable tenants.",
  },
  {
    icon: Wallet,
    title: "Rent Collection",
    description: "Timely monthly rent collection with clear statements.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repairs",
    description: "Our team handles repairs and upkeep so your property stays in top shape.",
  },
  {
    icon: FileText,
    title: "Rental Agreements",
    description: "Legally sound agreements, renewals and move-out inspections.",
  },
];

export default function RentalsPage() {
  return (
    <div>
      <PageHero
        title="Homes & spaces for rent"
        subtitle="Furnished and unfurnished apartments, houses and offices, ready to move in."
        image="/hero2.jpg"
        stats={[
          { icon: Building2, value: "120+", label: "Properties" },
          { icon: Users, value: "3000+", label: "Happy Clients" },
          { icon: ShieldCheck, value: "100%", label: "Verified" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="Rental options"
          title="Find a place that fits your life"
          description="Short or long stays, for families, professionals and businesses."
        />
        <FeatureGrid features={categories} columns={4} />
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="Available now"
          title="Properties for rent"
          description="Rents shown are monthly and exclude maintenance and deposit. Contact us for current availability."
        />
        <ListingGrid listings={rentalListings} />
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="Renting without the hassle" />
        <ProcessSteps steps={rentingSteps} />
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="For property owners"
          title="List your property with us"
          description="Earn steady rental income while we take care of tenants, rent and maintenance."
        />
        <FeatureGrid features={ownerServices} columns={4} />
      </Section>

      <EnquirySection
        title="Looking for a rental, or want to rent out your property?"
        description="Tell us what you need and our rentals team will get back to you within 24 hours."
        points={[
          "Verified listings with transparent terms",
          "Quick agreements and move-in",
          "Complete property management for owners",
        ]}
        formTitle="Rental Enquiry"
        formSubtitle="Find a home or list your property with us"
        buttonText="Send Enquiry"
        enquiryType="Rentals"
      />
    </div>
  );
}
