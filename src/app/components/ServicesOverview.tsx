import Link from "next/link";
import React from "react";
import { ArrowRight, BedDouble, Building2, HardHat, KeyRound } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const services = [
  {
    href: "/real-estate",
    title: "Real Estate",
    description: "Buy or sell verified plots, villas, apartments and commercial spaces.",
    image: "/hero1.jpg",
    icon: Building2,
  },
  {
    href: "/construction",
    title: "Construction",
    description: "End-to-end home and commercial construction, from design to handover.",
    image: "/hero.jpg",
    icon: HardHat,
  },
  {
    href: "/rentals",
    title: "Rentals",
    description: "Furnished and unfurnished homes and offices, ready to move in.",
    image: "/hero2.jpg",
    icon: KeyRound,
  },
  {
    href: "/hotel",
    title: "Hotel",
    description: "Comfortable rooms and warm hospitality for business or leisure stays.",
    image: "/hotel1.jpeg",
    icon: BedDouble,
  },
];

const ServicesOverview = () => {
  return (
    <Section>
      <SectionHeading
        eyebrow="What we do"
        title="Everything property, under one roof"
        description="Whether you want to buy, build, rent or stay, our team takes care of it from start to finish."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-lg overflow-hidden bg-white border-2 border-[#F6DCDC] hover:border-[#E76969] transition-all flex flex-col"
            >
              <div
                className="relative h-[160px] bg-amber-950"
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 bg-black/80 text-white py-2 pl-4 pr-8 flex items-center gap-2"
                  style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-black uppercase">{service.title}</span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-gray-700 flex-1">{service.description}</p>
                <span className="mt-4 text-[#E76969] font-bold flex items-center gap-1">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default ServicesOverview;
