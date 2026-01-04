import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const Fipage = () => {
  return (
    <div className="relative w-[95%] py-10 px-5 mx-7 bg-[#F889E7] rounded-lg shadow-lg overflow-hidden">
      
      {/* Main Heading */}
      <h1 className="text-[40px] md:text-[56px] lg:text-[48px] font-semibold text-[#10183A] leading-[1.3] tracking-tight pl-6">
        Here to make you look good and win business.
      </h1>

      {/* Paragraph */}
      <p className="pl-6 text-[24px] md:text-[32px] lg:text-[20px] text-[#10183A] mt-4">
        Websites that convert and apps that feel effortless. <br />
        Clean, clear, and thoughtfully designed.
      </p>

      {/* Button & Image */}
      <div className="pl-6 mt-6 flex flex-col md:flex-row items-start md:items-center gap-6">
        
        {/* Call-to-Action Button */}
        <button className="group flex items-center gap-3 text-xl px-8 py-4 
          rounded-full text-white bg-[#10183A] hover:bg-[#232B5F] transition-all duration-300">
          Get in Touch 
          <HiArrowNarrowRight className="ml-1 transition-transform duration-300 group-hover:translate-x-2" />
        </button>

        {/* Decorative Image - Positioned Absolutely */}
        <div className="absolute right-[-200px] bottom-[-80px] w-[800px] lg:w-[500px] overflow-hidden">
          <img 
            src="public\image\flower_1_500x.webp" 
            alt="Decorative" 
            className="w-full h-auto" 
          />
        </div>

      </div>
    </div>
  );
}

export default Fipage;
