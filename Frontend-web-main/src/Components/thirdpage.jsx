import React from "react";

const ThirdPage = () => {
  return (
    <div className="relative w-[95%] h-auto py-10 px-5 mx-7 bg-[#FAEBC5] rounded-lg shadow-lg mb-10 overflow-hidden">
      <h1 className="text-[40px] md:text-[48px] lg:text-[60px] font-figtree font-semibold text-[#10183A] leading-[1.5] tracking-[-0.05em] pl-6">
        Design is in the details.
      </h1>

      <p className="pl-6 text-[20px] md:text-[24px] lg:text-[20px] font-figtree mt-10 text-[#10183A]">
        My work is based on timeless design principles, clear copywriting, and <br /> well-established UX
        patterns. Each design is carefully crafted to meet your goals, tell your story, <br /> and make your
        business look awesome.
      </p>

      {/* Image container with overflow-hidden fix */}
      <div className="absolute -right-20 -bottom-30 w-[200px] lg:w-[300px] overflow-hidden">
        <img className="w-full h-auto" src="/image/download (1).svg" alt="Design" />
      </div>
    </div>
  );
};

export default ThirdPage;
