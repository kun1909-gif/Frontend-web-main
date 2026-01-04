import React from 'react';

const Secpage = () => {
  const data = [
    {
      Image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
      Title: "Home of Christine Maggi",
      Description: "An independent digital designer in sunny California.",
    },
    {
      Image: "/image/reshot-icon-laptop-with-diagram-pie-SX8H4TUVNJ.svg",
      Title: "Web Design & Dev",
      Description: "Clean, conversion-focused, and built for easy updates.",
    },
    {
      Image: "/image/reshot-icon-laptop-with-diagram-pie-SX8H4TUVNJ.svg",
      Title: "UI/UX Design",
      Description: "Seamless web or mobile app design to wow your users.",
    },
  ];

  return (
    <div className="flex tems-center justify-center  gap-5 mb-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-[#FFDF2B] p-6 rounded-3xl text-center w-[420px]  shadow-lg my-5"
        >
          <img
            src={item.Image}
            alt=""
            className="w-20 h-20 rounded-full mx-auto border-4 border-white mb-5"
          />
          <h2 className="text-lg font-bold mt-3 mb-1">{item.Title}</h2>
          <p className="text-gray-700 ">{item.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default Secpage;
