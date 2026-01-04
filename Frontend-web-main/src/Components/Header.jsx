import React, { useState, useEffect } from "react";

const Header = () => {
  const menuItems = [
    { text: "Work", hoverColor: "hover:bg-[#FEADD2]" },
    { text: "Services", hoverColor: "hover:bg-[#D8D80C]" },
    { text: "Meet Christine", hoverColor: "hover:bg-[#FFDF2B]" },
    { text: "FAQ", hoverColor: "hover:bg-[#EDBAFA]" },
    { text: "Get in Touch", hoverColor: "hover:bg-[#FFBE81]" }
  ];

  const [isVisible, setIsVisible] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`h-15 w-full flex items-center justify-center px-4 py-10 fixed top-0 bg-[#FDF9EC] shadow-md z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ul className="flex items-center justify-center space-x-4">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`text-lg md:text-xl lg:text-xl px-6 p-2 rounded-3xl font-semibold text-black bg-[#FAEBC5] ${
              item.hoverColor
            } cursor-pointer transition-all duration-300`}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;