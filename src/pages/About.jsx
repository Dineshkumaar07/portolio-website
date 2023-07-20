import React from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration:1000
    });
  }, []);
  const skillsStyle =
    "px-8 py-3 bg-black/10 inline-block rounded-md w-max  h-1/2 text-center flex items-center justify-center";
  return (
    <div className="w-full h-max font-poppins px-8">
      <div className="flex flex-col justify-center items-center mt-11 md:gap-6 gap-9">
        <h1 className='tracking-widest font-bold text-3xl relative after:content-[""] after:absolute after:h-[7px] after:bottom-[-23px] after:bg-purple-500 after:w-2/12 after:left-1/2 after:rounded-md '>
          ABOUT ME
        </h1>
        <p className="text-center text-lg mt-[23px] tracking-wider sm:leading-9 ">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms <br />
          of programming and technology
        </p>
      </div>
      <div className="grid lg:grid-cols-2  gap-14 items-start w-full md:mt-20 mt-14 md:px-32 mb-11 ">
        <div  data-aos="fade-right">
          <h1 className="font-bold text-2xl md:mb-10 mb-5">Get to know me!</h1>
          <p className="leading-10 md:leading-8 mb-3 tracking-wider opacity-75">
            Hello! I'm Dinesh Kumar M S, a passionate
            <b className=""> full-stack web developer </b>. My journey began by
            honing my skills in <b>web development</b>, mastering languages such
            as HTML, CSS, and JavaScript which led to <b>advanced frameworks</b>{" "}
            and <b>library</b> like React JS , Node JS , Express JS .
          </p>

          <p className="leading-10 md:leading-8 tracking-wider opacity-75">
            I'm open to <b>Job</b> opportunities where I can contribute, learn
            and grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to <b>contact </b> me.
          </p>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-50}
            className="cursor-pointer inline-block bg-[#7843e9] px-5 py-2 mt-7 rounded-md text-[#FBFFFF] text-md font-bold tracking-widest hover:shadow-purple-500 shadow-[0px_5px_35px_2px_[#7843e9]] duration-150 "
          >
            CONTACT
          </Link>
        </div>
        <div data-aos="fade-left"> 
          <h1 className="font-bold text-xl mb-10 ">My Skills</h1>
          <div className="flex flex-wrap gap-7 ">
            <p className={skillsStyle}>HTML</p>
            <p className={skillsStyle}>CSS</p>
            <p className={skillsStyle}>Tailwind CSS</p>
            <p className={skillsStyle}>Javascript</p>
            <p className={skillsStyle}>React JS</p>
            <p className={skillsStyle}>Node JS</p>
            <p className={skillsStyle}>Express JS</p>
            <p className={skillsStyle}>Mongo DB</p>
            <p className={skillsStyle}>Postgres SQL</p>
            <p className={skillsStyle}>Figma</p>
            <p className={skillsStyle}>Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
