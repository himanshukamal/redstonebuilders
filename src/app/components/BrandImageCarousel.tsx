'use client';

import Image from 'next/image';

const brandImages = [
  '/ACC_Limited_logo.png',
  '/Ambuja_logo.png',
  '/Godrej_logo.png',
  '/images-2.png',
  '/images-3.svg',
  '/Tata_Logo.png',
  '/shree-cement.png',
  '/ramco-cement.jpeg'
];

const BrandImageCarousel = () => {
  return (
    <div className="relative w-full h-[155px]  overflow-hidden flex items-center  bg-[#fff6f4]">
      {/* Blur overlays */}
      <div className="absolute left-0 top-0 w-[100px] h-full z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 w-[100px] h-full z-10 bg-gradient-to-l from-white to-transparent" />
      
      {/* Sliding container */}
      <div className="flex animate-infinite-scroll hover:animation-pause">
        {[...brandImages, ...brandImages].map((image, index) => (
          <div 
            key={`image-${index}`} 
            className="flex-shrink-0 px-8 h-full flex items-center justify-center"
            style={{ minHeight: '80px', maxHeight: '110px' }}
          >
            <div className="h-full flex items-center">
              <Image
                src={image}
                alt={`Brand ${index % brandImages.length + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-auto max-h-[110px] min-h-[80px] object-contain hover:scale-110 transition-transform duration-300"
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '120px'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandImageCarousel;