import React from "react";

const FourthPage = () => {

  const count = [
    {
      image1: "/image/rfBUBDMStZ6uYfIFYPlhn9er7w.jpg",
      image2: "/image/Ljnr5jpWsplvkPJg7eEWp7CH3Ig.jpg",
      title: "Parenting App Site",
      tags: ["Web Design", "AI", "Parenthood","Sustainability"],
      bgcolor: "#D3A7F2",
    },
    {
      image1: "/image/img21.jpg",
      image2: "/image/0AU0wSc7z9ZRPvhQ3ivzSfPMo.jpg",
      title: "Meal Delivery Site",
      tags: ["Web Design", "Copywriting", "Food", "Sustainability"],
      bgcolor: "#C71E70",
    },
    {
      image1: "/image/wu3uvYqaJGBdnfrQjj7bWaQWLs.jpg",
      image2: "/image/XiHoOnC3BFpNYqwCdMrf7ynpjk.jpg",
      title: "Modern Law Firm Site",
      tags: ["Web Design", "Brand Refresh", "Legal Services"],
      bgcolor: "#0081C6",
    },
    {
      image1: "/image/nfC9RN5anXbHTRmMgJEEJfPZTgw.jpg",
      image2: "/image/TUe64mqgCFEXoo0zQga24YO8QU.jpg",
      title: "Sustainable Goods Site",
      tags: ["Web Design", "Copywriting", "D2C", "Sustainability"],
      bgcolor: "#E3AA1F",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFF7E6] justify-center items-center p-6">
      
      {count.map((item,index)=>(

<div
key ={index}
 className="my-7  ">


<div
 className="w-[100%] h-[400px] overflow-hidden  rounded-3xl p-8 flex items-center gap-10"
 style ={{backgroundColor:item.bgcolor}}
 >

    {/* Left Section - Large Image */}
    <div className="w-[80%] h-auto mt-[30%]">
          <img
            className="w-full h-auto rounded-xl shadow-lg"
            src={item.image1}
            alt="Parenting App UI"
          />
        </div>
      
        {/* Right Section - Second Image */}
        <div className="w-[55%] h-auto mt-[40%] ">
          <img 
            className="w-full h-auto rounded-xl shadow-lg"
            src={item.image2}
            alt="AI Parenting Support"
          />
        </div>
              
        
        
      </div>
      
      {/* Tags Section */}
<div className="mt-6 flex ">
  <h1 className="text-xl font-extrabold pl-5 mt-2">{item.title}</h1>
  
  {/* Tags Container */}
  <div className="flex justify-center gap-3 mt-2  pl-[45%]">
    {item.tags.map((tag,idx)=>(
  <span 
  key={idx}
  className="bg-[#FAEBC5] px-4 py-2 rounded-full text-black font-bold text-3sm">
    {tag}
  </span>

    ))}

</div>

</div>

</div>
  
))}




    </div>
  );
};

export default FourthPage;
