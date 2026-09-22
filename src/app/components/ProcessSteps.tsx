import React from "react";

type Step = {
  title: string;
  description: string;
};

const ProcessSteps = ({ steps }: { steps: Step[] }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 ${
        steps.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"
      } gap-4`}
    >
      {steps.map((step, index) => (
        <div key={step.title} className="p-6 rounded-lg bg-white border-2 border-[#F6DCDC]">
          <p className="text-4xl font-black text-[#E76969]">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="font-semibold text-lg text-gray-900 mt-3">{step.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProcessSteps;
