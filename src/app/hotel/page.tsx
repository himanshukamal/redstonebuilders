import type { Metadata } from "next";
import Image from "next/image";
import {
  BedDouble,
  CalendarCheck,
  Car,
  Check,
  Clock,
  ConciergeBell,
  Dumbbell,
  FileText,
  Maximize,
  Plane,
  Presentation,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";
import EnquirySection from "../components/EnquirySection";
import FeatureGrid from "../components/FeatureGrid";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Hotel",
  description: "Comfortable rooms, dining and event spaces for business and leisure travellers.",
};

const galleryImages = [
  { src: "/hotel1.jpeg", alt: "Hotel building exterior with lit balconies" },
  { src: "/hotel2.jpeg", alt: "Hotel building with glass balconies and wooden ceilings" },
];

const rooms = [
  {
    name: "Deluxe Room",
    price: "₹3,499",
    occupancy: "2 Adults",
    size: "280 sq.ft",
    bed: "Queen bed",
    amenities: ["Air conditioning", "Smart TV", "Free Wi-Fi", "Complimentary breakfast"],
  },
  {
    name: "Executive Room",
    price: "₹4,999",
    occupancy: "2 Adults + 1 Child",
    size: "360 sq.ft",
    bed: "King bed",
    amenities: ["City view", "Work desk", "Mini fridge", "Complimentary breakfast"],
    popular: true,
  },
  {
    name: "Family Suite",
    price: "₹7,499",
    occupancy: "4 Adults",
    size: "550 sq.ft",
    bed: "King + twin beds",
    amenities: ["Separate living area", "Bathtub", "Tea & coffee maker", "Breakfast & dinner"],
  },
];

const amenities = [
  { icon: Wifi, title: "Free Wi-Fi", description: "High-speed internet across rooms and common areas." },
  { icon: UtensilsCrossed, title: "Restaurant", description: "Multi-cuisine dining with local and continental dishes." },
  { icon: ConciergeBell, title: "24/7 Room Service", description: "Food and assistance whenever you need it." },
  { icon: Car, title: "Free Parking", description: "Secure on-site parking for all guests." },
  { icon: Presentation, title: "Conference & Banquet", description: "Spaces for meetings, parties and small weddings." },
  { icon: Dumbbell, title: "Fitness Centre", description: "A well-equipped gym open to all guests." },
  { icon: Plane, title: "Airport Transfers", description: "Pickup and drop available on request." },
  { icon: Sparkles, title: "Daily Housekeeping", description: "Fresh linen and a spotless room every day." },
];

const policies = [
  { icon: Clock, title: "Check-in", description: "From 12:00 PM. Early check-in subject to availability." },
  { icon: Clock, title: "Check-out", description: "Until 11:00 AM. Late check-out available on request." },
  { icon: FileText, title: "ID Required", description: "A valid government photo ID is required for all guests." },
  { icon: CalendarCheck, title: "Cancellation", description: "Free cancellation up to 24 hours before check-in." },
];

export default function HotelPage() {
  return (
    <div>
      <PageHero
        title="Stay in comfort"
        subtitle="Elegant rooms, warm hospitality and everything you need for business or leisure."
        image="/hotel1.jpeg"
        stats={[
          { icon: BedDouble, value: "40+", label: "Rooms" },
          { icon: Star, value: "4.6", label: "Guest Rating" },
          { icon: ConciergeBell, value: "24/7", label: "Service" },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="Our property"
              title="A modern home away from home"
              description="Our newly built hotel offers bright, airy rooms with private balconies, modern interiors and warm, attentive service, whether you're here for business or a family getaway."
            />
            <ul className="flex flex-col gap-3 -mt-4">
              {["Private balconies in most rooms", "Newly built with modern interiors", "Easy access to the city's business and shopping areas"].map(
                (point) => (
                  <li key={point} className="flex items-start gap-3 text-gray-900 font-medium">
                    <Check className="w-5 h-5 text-[#E76969] shrink-0 mt-0.5" />
                    {point}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-[#F6DCDC]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="Rooms & suites"
          title="Choose your stay"
          description="All rates are per night, inclusive of taxes. Special rates are available for long stays and group bookings."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.name}
              className={`rounded-lg overflow-hidden bg-white border-2 transition-all flex flex-col ${
                room.popular ? "border-[#E76969]" : "border-[#F6DCDC] hover:border-[#E76969]"
              }`}
            >
              <div className="relative h-[160px] bg-gradient-to-br from-[#F6DCDC] to-[#fff6f4] flex items-center justify-center">
                <BedDouble className="w-14 h-14 text-[#E76969]/60" />
                {room.popular && (
                  <span className="absolute top-3 right-3 bg-[#E76969] text-white text-xs font-bold px-3 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-gray-900">{room.name}</h3>
                <p className="text-[#E76969] font-bold text-xl mt-2">
                  {room.price}
                  <span className="text-sm font-medium text-gray-600"> /night</span>
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-700 mt-4 pb-4 border-b border-[#F6DCDC]">
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" /> {room.occupancy}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" /> {room.size}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble className="w-4 h-4" /> {room.bed}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2 text-sm text-gray-700 flex-1">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#E76969]" /> {amenity}
                    </li>
                  ))}
                </ul>

                <a
                  href="#enquiry"
                  className="mt-5 text-center bg-[#E76969] hover:bg-[#d45959] text-white px-6 py-2 rounded-md font-medium transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Amenities" title="Everything for a relaxing stay" />
        <FeatureGrid features={amenities} columns={4} />
      </Section>

      <Section tinted>
        <SectionHeading eyebrow="Good to know" title="Hotel policies" />
        <FeatureGrid features={policies} columns={4} />
      </Section>

      <EnquirySection
        title="Plan your stay with us"
        description="Share your travel dates and number of guests, and we'll confirm availability and the best rate."
        points={[
          "Best rates when you book directly",
          "Group, corporate and long-stay discounts",
          "Banquet and conference bookings",
        ]}
        formTitle="Book Your Stay"
        formSubtitle="Share your dates and we'll confirm availability"
        buttonText="Check Availability"
        enquiryType="Hotel"
      />
    </div>
  );
}
