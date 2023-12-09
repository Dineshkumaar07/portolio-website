import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import recipe from "../assets/recipe app.png";
import todo from "../assets/Todo App.png";
import intel from "../assets/Intel.png";

import pricingComponent from "../assets/pricingComponent.png";
import chartComponent from "../assets/chartComponent.png";
import adviceApp from "../assets/adviceApp.png";
import snap from "../assets/snap.png";
import ratingComponent from "../assets/ratingComponent.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="bg-black/5  py-9 h-max">
      <div className="flex flex-col justify-center items-center sm:mt-11 gap-6">
        <h1 className='tracking-widest font-bold text-3xl relative after:content-[""] after:absolute after:h-[7px] after:bottom-[-18px] after:bg-purple-500 after:w-2/12 after:left-1/2 after:rounded-md '>
          PROJECTS
        </h1>
        <p className="text-center text-lg mt-1 tracking-wide">
          Here you will find some of the personal and hackathon projects
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center  mt-9 gap-14  ">
        <div data-aos="fade-right" className="w-full flex justify-center">
          <ProjectTemplate
            title="Task Management App"
            desc="This is a MERN App. Motive is to make simple CRUD App. Users can create account and use that to store their tasks. I used bcrypt for encrypting tasks and password to maintain privacy of the users."
            image={todo}
            link="https://todo-app-dineshms.onrender.com/"
          />
        </div>
        <div data-aos="fade-right" className="w-full flex justify-center">
          <ProjectTemplate
            title="Recipe App"
            desc="This is a MERN App. It allows to create accounts and used Bcrypt encryption for security . Here users can create recipe and able to see recipe created by other users . I also added save feature so that recipes created by other user can be saved."
            image={recipe}
            link="https://recipe-app-dineshms.netlify.app/ "
          />
        </div>
        <div data-aos="fade-right" className="w-full flex justify-center">
          <ProjectTemplate
            title="Sentimental Analysis of Customer"
            desc="This Project is submitted for INTEL OneAPI CodeMaven Hackathon. Team consists of group of 3. Here we implemented machiene learning model which predicts the customer emotion based on the review. As a demo build we directly have a page where classification of comments can be seen. Our team secured 7th place in this hackthon where we competed with many IT professionals "
            image={intel}
            link="https://github.com/Dineshkumaar07/INTEL-OneAPI-CodeMaven"
          />
        </div>

        <h1
          className="tracking-widest font-bold text-3xl relative text-center"
          data-aos="fade-left"
        >
          Frontend Mentor Challenges
        </h1>
        <div data-aos="fade-left" className="w-full flex justify-center">
          <ProjectTemplate
            title="Pricing Component"
            desc="This is a Pricing Component with toggle switch between annual and monthly subscription. It is completely responsive and can be integrated with any of the projects"
            image={pricingComponent}
            link="https://dinesh-frontend-mentor-5.netlify.app/"
          />
        </div>
        <div data-aos="fade-left" className="w-full flex justify-center">
          <ProjectTemplate
            title="Rating Component"
            desc="This is a rating Component with 2 steps. It is completely responsive and can be integrated with any of the projects"
            image={ratingComponent}
            link="https://dinesh-frontend-mentor-3.netlify.app/"
          />
        </div>

        <div data-aos="fade-left" className="w-full flex justify-center">
          <ProjectTemplate
            title="Single Advertising Page"
            desc="Here challenge is to create a single page advertisement for a company with complete responsivenss. Here more importance is given to navbar. It had lot of details and need to make friendly for all screen"
            image={snap}
            link="https://dinesh-frontend-mentor-2.netlify.app/"
          />
        </div>
        <div data-aos="fade-left" className="w-full flex justify-center">
          <ProjectTemplate
            title="Advice App"
            desc="Here challenge is to handle API request. Here Api for getting advices is provided. We have to consume it. It gives new advice on each time while pressing dice button"
            image={adviceApp}
            link="https://dinesh-frontend-mentor-4.netlify.app/"
          />
        </div>
        <div data-aos="fade-left" className="w-full flex justify-center">
          <ProjectTemplate
            title="Chart Component"
            desc="Here challenge is to create a chart component for spending amount in a week. Here I used ChartJs for plotting the charts."
            image={chartComponent}
            link="https://dinesh-expenses-chart.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
