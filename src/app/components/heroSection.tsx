'use client';

import React, { useState, useEffect } from "react";
import { Home, Users, Building2 } from "lucide-react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const backgroundImageArray = ["/hero.jpg", "/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImageArray.length]);

  return (
    <div className="relative h-screen lg:h-[600px] flex flex-col lg:flex-row overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {backgroundImageArray.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-amber-950 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
      </div>

      {/* Black bottom gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0" 
        style={{
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
        }} 
      />

      {/* Content */}
      <div className="relative w-full lg:w-1/2 h-full flex flex-col z-10">
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
          className="lg:h-[86px] bg-black/80 w-full lg:w-[500px] flex items-center p-2 gap-2"
          style={{
            clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
          }}
        >
          <div className="flex items-center space-x-3 border-r border-white px-2">
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
      
      <div className="relative w-full lg:w-1/2 h-full flex items-center justify-center lg:px-10 z-10">
        <ContactForm />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImageArray.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;