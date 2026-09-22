import React from "react";
import type { LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

type PageHeroProps = {
  title: string;
  subtitle: string;
  image: string;
  stats: Stat[];
};

// Same banner treatment as the home page hero: clipped black title and stats bars over a photo
const PageHero = ({ title, subtitle, image, stats }: PageHeroProps) => {
  return (
    <section
      className="relative h-[460px] lg:h-[520px] flex flex-col overflow-hidden bg-amber-950"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Black bottom gradient overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
        }}
      />

      <div className="relative z-10 flex flex-col">
        <div
          className="bg-black/60 text-white w-full lg:w-[560px] py-4 pl-4 pr-12 lg:py-6"
          style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)" }}
        >
          <h1 className="text-[24px] lg:text-4xl uppercase font-black">{title}</h1>
          <p className="mt-2 text-sm lg:text-lg font-medium text-white/90">{subtitle}</p>
        </div>

        <div
          className="bg-black/80 w-full lg:w-[600px] flex items-center p-2 pr-8 gap-2"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center space-x-3 px-2 ${
                  index < stats.length - 1 ? "border-r border-white" : ""
                }`}
              >
                <Icon className="w-5 h-5 lg:w-8 lg:h-8 text-white shrink-0" />
                <div>
                  <p className="text-white font-extrabold lg:text-[20px]">{stat.value}</p>
                  <p className="text-white font-medium text-[10px] lg:text-[16px]">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
