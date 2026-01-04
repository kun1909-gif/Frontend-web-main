import { HiArrowRight } from "react-icons/hi";

const Sixpage = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto h-[140px] flex justify-between items-center bg-[#D8D800] rounded-3xl px-10 shadow-lg mb-10">
      {/* Left Text */}
      <h1 className="text-2xl font-semibold text-[#10183A]">Ready to get started?</h1>

      {/* Button */}
      <button className="group flex items-center gap-2 text-lg font-semibold px-6 py-3 rounded-full 
       text-[#10183A] bg-[#F4F42A] hover:opacity-90 transition-all duration-300">
        Get in Touch 
        <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Sixpage;
