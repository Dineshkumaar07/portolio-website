import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hfliycc",
        "template_q1261ss",
        form.current,
        "JHO3oqwF8Fy30v7RD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="w-full  font-poppins  pt-16  flex flex-col overflow-x-hidden ">
      <div className="flex flex-col justify-center items-center gap-6 flex-grow">
        <h1 className='tracking-widest font-bold text-3xl relative after:content-[""] after:absolute after:h-[7px] after:bottom-[-23px] after:bg-purple-500 after:w-2/12 after:left-1/2 after:rounded-md '>
          CONTACT
        </h1>
        <p className="text-center text-lg mt-[23px] tracking-wider leading-7 sm:leading-9 px-8">
          Feel free to Contact me by submitting the form below and I will get
          back to you as <br /> soon as possible
        </p>
      </div>
      <div className="w-full h-max flex items-center justify-center px-16 md:my-20 mt-9 mb-14" data-aos="fade-right">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-7 bg-white p-9 rounded-lg drop-shadow-[3px_5px_10px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded max-w-[700px] h-14 py-2 px-3  font-medium bg-black/5 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              name="user_name"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight bg-black/5 focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              name="user_email"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="font-semibold tracking-widest text-sm">
              Message
            </label>
            <textarea
              rows="5"
              cols="60"
              type="text"
              className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 bg-black/5 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#7843e9] px-5 py-2 mt-7 rounded-md text-[#FBFFFF] text-md font-bold tracking-widest hover:shadow-purple-500 shadow-[0px_5px_35px_2px_[#7843e9]] duration-150 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
