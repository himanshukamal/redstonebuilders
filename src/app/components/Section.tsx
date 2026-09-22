import React from "react";

type SectionProps = {
  children: React.ReactNode;
  tinted?: boolean;
  id?: string;
};

const Section = ({ children, tinted = false, id }: SectionProps) => {
  return (
    <section id={id} className={tinted ? "bg-[#fff6f4]" : "bg-white"}>
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-[80px]">{children}</div>
    </section>
  );
};

export default Section;
