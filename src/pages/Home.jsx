import React from "react";
import Linkedin from "../icons/Linkedin";
import Twitter from "../icons/Twitter";
import Github from "../icons/Github";
import Instagram from "../icons/Instagram";
import { Link } from "react-scroll";

const Home = () => {
  const sideMenu =
    "absolute left-0 bg-white  rounded-lg flex flex-col drop-shadow-[3px_5px_10px_rgba(0,0,0,0.25)] hidden lg:block";

  return (
    <div className="bg-black/5 w-full h-screen font-poppins  px-5 md:px-0 ">
      <div className="w-full h-full flex items-center justify-center flex-col md:gap-11 gap-9 ">
        <h1 className="font-bold md:text-5xl tracking-wide text-center text-4xl leading-[55px]">
          HEY, I'M DINESH KUMAAR M S
        </h1>
        <div className="flex flex-col items-center md:gap-3 ">
          <p className="md:text-xl text-lg text-center leading-8">
            A Full-stack Web Developer Building Full-Stack Web Applications
          </p>
          <p className="md:text-xl text-lg text-center leading-8">
            that leads to the success of the overall product.
          </p>
        </div>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          className="cursor-pointer  bg-[#7843e9] md:px-12 md:py-4 px-7 py-2 rounded-md text-[#FBFFFF] text-xl font-bold tracking-widest hover:shadow-purple-500 shadow-[0px_5px_35px_2px_[#7843e9]] duration-150"
        >
          PROJECTS
        </Link>
        <div className={sideMenu}>
          <a
            href="https://www.linkedin.com/in/dinesh-kumaar/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/Dineshkumaar07"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/DineshK29987581"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>

          <a
            href="https://www.instagram.com/dinesh____ms/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
