import React from "react";
import type { LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeatureGridProps = {
  features: Feature[];
  columns?: 3 | 4;
};

const FeatureGrid = ({ features, columns = 3 }: FeatureGridProps) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      } gap-4`}
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div
            key={feature.title}
            className="p-6 rounded-lg bg-white border-2 border-[#F6DCDC] hover:border-[#E76969] transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#F6DCDC] text-[#E76969] flex items-center justify-center mb-4">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureGrid;
