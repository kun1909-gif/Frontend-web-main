import React from "react";
import { motion } from "framer-motion";

const FifthPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start justify-center p-8 gap-7 min-h-screen">
        {/* Right Column: Image */}
        <div className="w-[45%] h-[650px] ml-10 bg-blue-500 rounded-xl shadow-lg flex">
          <img
            className="w-full h-full object-cover object-center rounded-xl shadow-lg"
            src="/image/shpycuMZdvnpfGzwPt5261Gbkc.jpg"
            alt="Centered"
          />
        </div>

        {/* Left Column: Text & Pills */}
        <div className="w-[45%] bg-[#FAEBC5] h-[650px] rounded-xl shadow-lg p-6">
          <h2 className="text-center text-2xl font-semibold mb-6 mt-[30%]">
            My favorite industries include:
          </h2>

          {/* Grid of pills */}
          <div className="grid grid-cols-2 gap-6 justify-items-center mt-[8%]">
            {/* Pill items with animation and different backgrounds */}
            {[
              { text: "Health", bg: "bg-pink-200" },
              { text: "Wellness", bg: "bg-orange-200" },
              { text: "Food & Bev", bg: "bg-green-200" },
              { text: "Sustainability", bg: "bg-yellow-200" },
              { text: "Femtech", bg: "bg-purple-200" },
              { text: "Pets", bg: "bg-blue-200" },
            ].map((item, index) => (
              <motion.span
                key={index}
                whileHover={{ x: Math.random() * 10 - 5, y: Math.random() * 10 - 5 }}
                className={`px-6 py-2 ${item.bg} text-black rounded-full shadow-md`}
              >
                {item.text}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-[95%] py-6 px-5 mx-7 bg-[#FFDF2B] rounded-lg shadow-lg my-10 flex flex-col lg:flex-row items-start lg:items-center overflow-hidden">
        {/* Text Content */}
        <div className="lg:w-2/3">
          <h1 className="text-[36px] md:text-[48px] lg:text-[50px] font-semibold text-[#10183A] leading-[1.3] tracking-[-0.05em] pl-6">
            Nice to meet you!
          </h1>

          <p className="pl-6 text-lg md:text-xl lg:text-[25px] font-semibold text-[#10183A]">
            I'm Christine Maggi, a.k.a. Design Gal
          </p>

          <p className="pl-6 text-sm md:text-base lg:text-[18px] mt-4 text-[#10183A]">
            My goal is to elevate companies like yours through the power of design. I am here to help you effectively convey your message and make a positive impact. Let's bring your vision to life!
          </p>
        </div>

        {/* Decorative Image - Positioned Absolutely */}
        <div className="absolute right-[-20px] bottom-[-30px] w-[200px] lg:w-[300px]">
          <img src="/image/download (2).svg" alt="Decorative" className="w-full h-auto" />
        </div>
      </div>

      {/* Two Column Section */}
      <div className="flex flex-wrap gap-4 mx-7">
        {/* Left Card */}
        <div className="w-full md:w-[48%] p-6 bg-[#EEEE39] rounded-xl shadow-lg">
          <h1 className="text-[28px] lg:text-[25px] font-semibold text-[#10183A] leading-[1.5] tracking-[-0.05em]">
            The perfect blend of visual design and UX.
          </h1>
          <p className="mt-2 text-lg lg:text-[17px] text-[#10183A]">
            With 15 years of multi-disciplinary design experience, I blend beautiful visual design and the clarity of UX, all under one roof.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-full md:w-[48%] p-6 bg-[#FEADD2] rounded-xl shadow-lg">
          <h1 className="text-[28px] lg:text-[25px] font-semibold text-[#10183A] leading-[1.5] tracking-[-0.05em]">
            A design approach that puts people first.
          </h1>
          <p className="mt-2 text-lg lg:text-[17px] text-[#10183A]">
            I create user-centric designs that align with your goals, ensuring a seamless experience for your audience.
          </p>
        </div>
      </div>

      {/* Final Section */}
      <div className="w-[95%] bg-[#FAEBC5] rounded-lg shadow-lg mx-7 my-10 p-6">
        <h1 className="text-[38px] font-semibold text-[#10183A] leading-[1.5] tracking-[-0.05em]">
          Elevating your mission through the power of design.
        </h1>
        <p className="mt-4 text-lg lg:text-[18px] text-[#10183A]">
          I serve mission-driven startups that take care. My favorite industries include health and wellness, food, sustainability, femtech, and pets.
        </p>
      </div>
    </>
  );
};

export default FifthPage;
