import React from 'react'

const Sevenpage = () => {
  return (
    <div className='w-full pl-7 pt-10 mb-10'>
      <h1 className='text-[60px] font-medium mb-20'>Happy Clients</h1>

      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between gap-y-6">
        {/* Top Left (Yellow) */}
        <div className="w-[47%] bg-[#FFDF2B] rounded-xl shadow-lg px-10 py-10">
          <p className="text-lg text-[#10183A]">
            Christine was responsive, attentive, and fantastic to work with. She understood our problem, was receptive to our ideas, and{" "}
            <strong>delivered a beautiful product on time and in budget.</strong>
          </p>
          <div className="mt-4">
            <p className="font-semibold text-[#10183A]">Joe Cody</p>
            <p className="text-[#10183A]">Founder, Grain Fertility</p>
          </div>
        </div>

        {/* Top Right (Pink) */}
        <div className="w-[47%] bg-[#FF9999] rounded-xl shadow-lg px-10 py-10 ml-[50%]">
          <p className="text-lg text-[#10183A]">
            Working with Christine was enjoyable and efficient. She was fantastic at helping us think through realistic and creative solutions.{" "}
            <strong>We knew we could trust her as a member of our team.</strong>
          </p>
          <div className="mt-4">
            <p className="font-semibold text-[#10183A]">Erin Mahoney</p>
            <p className="text-[#10183A]">Behavioral Scientist, Irrational Labs</p>
          </div>
        </div>

        {/* Bottom Left (Purple) */}
        <div className="w-[47%] bg-[#EDBBF9] rounded-xl shadow-lg px-10 py-10">
          <p className="text-lg text-[#10183A]">
            Christine was responsive, attentive, and fantastic to work with. She understood our problem, was receptive to our ideas, and{" "}
            <strong>delivered a beautiful product on time and in budget.</strong>
          </p>
          <div className="mt-4">
            <p className="font-semibold text-[#10183A]">Joe Cody</p>
            <p className="text-[#10183A]">Founder, Grain Fertility</p>
          </div>
        </div>

        {/* Bottom Right (Green) */}
        <div className="w-[47%] bg-[#D8D800] rounded-xl shadow-lg px-10 py-10 ml-[50%]">
          <p className="text-lg text-[#10183A]">
            Christine is <strong>one of the most creatively talented and business-savvy design pros</strong> I've worked with. She was my go-to partner on nearly all projects. I can't recommend Christine enough.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-[#10183A]">Brian Trapp</p>
            <p className="text-[#10183A]">eCommerce and Marketing Director</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sevenpage;
