
import React, { useState } from "react";
import { Link } from "react-scroll";
import photo from "../assets/Photo1.jpeg"

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-40 font-poppins ">
      <div className="md:flex items-center justify-between py-5 bg-white md:px-10 px-9 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  ">
          {/* <img src={photo} className="w-10 h-10 " alt="" /> */}
          <p>Dinesh MS</p>

        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden flex items-center"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-9 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-16 text-xl md:my-0 my-7 cursor-pointer"
            >
              <Link
                onClick={() => {open?setOpen(!open):setOpen(open)}}
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className=" hover:text-[#7843e9] duration-500 font-semibold text-base tracking-wider"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
