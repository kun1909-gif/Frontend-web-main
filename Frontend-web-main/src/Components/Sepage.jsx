import React, { useRef } from "react";
import { motion } from "framer-motion";

const Sepage = () => {
  // Use public paths for your SVG files
  const images = [
    "/SVG/brandbird-Amazon-logotype.svg",
    "/SVG/brandbird-Behance-logotype.svg",
    "/SVG/brandbird-Buffer-logotype.svg",
    "/SVG/brandbird-CodePen-logotype.svg",
    "/SVG/brandbird-Freshworks-logotype.svg",
    "/SVG/brandbird-Finsweet-logotype.svg",
    "/SVG/brandbird-Dribbble-logotype.svg",
    "/SVG/brandbird-Deezer-logotype.svg",
  ];

  const carouselRef = useRef(null);

  return (
    <>
      {/* Main Image (Optional) */}
      <img
        className="w-[95%] h-[420px] mx-7 object-cover my-7 rounded-[30px] shadow-lg"
        src="public\image\sQg7GSarPJc6AwCw87h5jbShME.avif" // Replace or remove if you don't need this
        alt="Decorative Shape"
      />

      {/* Scrolling Section */}
      <div className="w-[95%] h-[130px] mx-7 mt-4 rounded-[30px] shadow-lg bg-[#D8D800] flex items-center gap-2 p-6 justify-start overflow-hidden">
  


  <motion.div
  ref={carouselRef}
  className="flex gap-20 w-max"
  animate={{ x: ["0" , "-100%"] }}  // Moves from 0% to -100% (full width scroll)
  transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // Speed increased
>
  {/* Duplicate images for seamless scrolling */}
  {[...images, ...images].map((src, index) => (
    <img
      key={index}
      src={src}
      className="w-[15%] h-auto mx-2 rounded-lg"
      alt={`scrolling-img-${index}`}
    />
  ))}
</motion.div>

</div>


    </>
  );
};

export default Sepage;
