import React from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {eyebrow && (
        <p className="text-[#E76969] font-bold uppercase tracking-wider text-sm mb-2">{eyebrow}</p>
      )}
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
      {description && <p className="text-gray-700 mt-3">{description}</p>}
    </div>
  );
};

export default SectionHeading;
