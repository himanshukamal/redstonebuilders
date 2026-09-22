import React from "react";
import { Home, Users, Building2 } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  return (
    <div
      className=" h-screen lg:h-[600px] bg-amber-950 flex flex-col lg:flex-row"
      style={{
        backgroundImage: "url(/hero.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        <div
          className="lg:h-[157px] p-1 bg-black/60 text-white lg:w-[400px] flex items-center"
          style={{
            clipPath: "polygon(0 0, 100% 0, 91% 100%, 0% 100%)",
          }}
        >
          <p className="text-[22px] lg:text-4xl uppercase font-black">
            Construct your dream home
          </p>
        </div>
        <div
          className="lg:h-[86px] bg-black/80 w-full lg:w-[500px] flex items-center p-2 gap-2 "
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
          }}
        >
          <div className="flex items-center space-x-3  border-r border-white px-2">
            <div className="text-white">
              <Home className="w-5 h-5 lg:w-8 lg:h-8" />
            </div>
            <div>
              <p className="text-white font-extrabold lg:text-[20px]">7000+</p>
              <p className="text-white font-medium text-[10px] lg:text-[16px]">
                Homes
              </p>
            </div>
          </div>

          {/* Section 2 - Clients */}
          <div className="flex items-center space-x-3 border-r border-white px-2">
            <div className="text-white">
              <Users className="w-5 h-5 lg:w-8 lg:h-8" />
            </div>
            <div>
              <p className="text-white font-extrabold lg:text-[20px]">3000+</p>
              <p className="text-white font-medium text-[10px] lg:text-[16px]">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Section 3 - Properties */}
          <div className="flex items-center space-x-3">
            <div className="text-white">
              <Building2 className="w-5 h-5 lg:w-8 lg:h-8" />
            </div>
            <div>
              <p className="text-white font-extrabold lg:text-[20px]">120+</p>
              <p className="text-white font-medium text-[10px] lg:text-[16px]">
                Properties
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center lg:px-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default HeroSection;
