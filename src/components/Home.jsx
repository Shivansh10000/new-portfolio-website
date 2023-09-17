import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full max-w-lg text-center md:text-left">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Hi ! My Name is Shivansh Joshi
          </h2>
          <p className="text-gray-300 py-4">
            I like to design and build software. I like to work on web
            applications using technologies like React, Tailwind, Node, and
            Express and I have recently started using Generative AI for my
            projects.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xs md:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
