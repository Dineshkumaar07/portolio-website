import React from "react";

const ProjectTemplate = ({ title, desc, image, link }) => {
  return (
    <div className="w-screen flex flex-col sm:flex-row sm:w-3/4 h-max justify-between sm:gap-14 gap-4 font-poppins bg-white px-5 py-8 rounded-lg shadow-md ">
      <div className="max-w-[500px] ">
        <img src={image} alt={title} className=" border-2" />
      </div>
      <div className="w-full sm:w-3/4">
        <h1 className="font-bold text-lg mb-3 tracking-wider">{title}</h1>
        <p className="leading-8 tracking-wider">{desc}</p>
        <a
          href={link}
          className="bg-[#7843e9] px-5 py-2 mt-7 rounded-md text-[#FBFFFF] text-md font-bold tracking-widest hover:shadow-purple-500 shadow-[0px_5px_35px_2px_[#7843e9]] duration-150 inline-block "
        >
          DEMO
        </a>
      </div>
    </div>
  );
};

export default ProjectTemplate;
