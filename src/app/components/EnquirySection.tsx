import React from "react";
import { CheckCircle2 } from "lucide-react";
import ContactForm from "./ContactForm";

type EnquirySectionProps = {
  title: string;
  description: string;
  points: string[];
  formTitle?: string;
  formSubtitle?: string;
  buttonText?: string;
  enquiryType?: string;
};

const EnquirySection = ({
  title,
  description,
  points,
  formTitle,
  formSubtitle,
  buttonText,
  enquiryType,
}: EnquirySectionProps) => {
  return (
    <section className="bg-[#fff6f4] border-t-2 border-[#F6DCDC]">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-[80px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#E76969] font-bold uppercase tracking-wider text-sm mb-2">Get in touch</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-700 mt-3">{description}</p>
          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-900 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#E76969] shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ContactForm
            title={formTitle}
            subtitle={formSubtitle}
            buttonText={buttonText}
            enquiryType={enquiryType}
          />
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
