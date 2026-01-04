import React from "react";
import CircularText from "./Circular/CircularText"; // Ensure correct path
import { toast } from "react-hot-toast"; 

const ContactSection = () => {  // ✅ Function Declaration Added
  const copyEmail = () => {
    navigator.clipboard.writeText("christine@designgal.studio");
    toast.success("Email copied to clipboard!");
  };

  return (
    <div className="bg-[#F7965A] p-10 rounded-3xl text-[#10183A] relative h-[30%] mb-10 w-[95%] ml-10">
      {/* Header Text */}
      <h1 className="text-[60px] font-bold my-7 " >Thanks for stopping by!</h1>
      <p className="text-lg mt-2 ">I’d love to chat with you about how I can help. Get in touch!</p>

      {/* Contact Options */}
      <div className="mt-8 space-y-4 top-50 ">
        {/* Email Section */}
        <div className="flex items-center bg-yellow-400 rounded-2xl p-4 justify-between">
          <span className="font-bold text-lg">Email</span>
          <div className="flex items-center space-x-3">
            <button
              className="bg-pink-300 text-[#10183A] px-3 py-1 rounded-xl font-semibold text-sm"
              onClick={copyEmail}
            >
              Copy
            </button>
            <span className="font-semibold text-lg">christine@designgal.studio</span>
          </div>
        </div>

        {/* Other Contact Links */}
        {["Send a Message", "LinkedIn", "Back to Top"].map((text, index) => (
          <div
            key={index}
            className="bg-yellow-400 rounded-2xl p-4 flex justify-between items-center cursor-pointer my-10 hover:bg-yellow-300 transition-all"
          >
            <span className="font-bold text-lg">{text}</span>
            <span className="text-xl">→</span>
          </div>
        ))}
      </div>

      {/* Profile Image */}
      <div className="relative flex items-center justify-center w-64 h-64 -top-160 left-250">
      {/* Circular Text */}
      <div className="absolute w-48 h-48 flex items-center justify-center">
      <CircularText 
        className="bg-[#FFA9D4] text-sm text-black "
        text="Design Gal Studio. Design Gal Studio." spinDuration={5} 
        onHover="speedUp" />      </div>

      {/* Profile Image */}
      <div className="absolute top-6 left-5">
        <img
          src="public/image/Y4LtrTecZLh04Nlk6MEpdCnhpo0.jpg" // Replace with actual image path
          alt="Profile"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
 