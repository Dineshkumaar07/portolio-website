import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white  flex flex-col overflow-hidden">
      <div className="flex w-full justify-between  md:px-[9rem] md:py-[6rem] px-[3rem] py-[2rem] border-b-2 md:gap-0 gap-7 ">
        <div className="flex flex-col gap-7 ">
          <h1 className="font-bold tarcking-wider text-xl">DINESH KUMAAR</h1>
          <p className="text-sm">
            A Frontend focused Web Developer building the Frontend of Websites
            and <br /> Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="">
          <h1 className="font-bold tarcking-wider text-2xl mb-5 text-center ">
            Social
          </h1>
          <div className="flex md:gap-5 gap-3 h-6">
            <a href="https://www.linkedin.com/in/dinesh-kumaar/">
              <img
                className="h-7"
                src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
                alt=""
              />
            </a>

            <a href="https://github.com/Dineshkumaar07">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
                alt=""
              />
            </a>
            <a href="https://twitter.com/DineshK29987581">
              <img
                className="h-7"
                src="https://d33wubrfki0l68.cloudfront.net/ef67339f7016cb09ba66366c1dc9145ac69f2a21/feca1/assets/png/twitter-ico.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center my-5">
        <p>@Copyright 2023. Made by Dinesh Kumaar</p>
      </div>
    </div>
  );
};

export default Footer;
