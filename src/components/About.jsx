import React from "react";
import college from "../assets/imgdtu.png";
import school from "../assets/vbpsimg.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          My Name is Shivansh Joshi, and I am currently in the 4th year (2024
          Gradute) of B.Tech in Information Technology(I.T) at Delhi
          Technological University (formerly DCE). I like to design web
          application using MERN stack.
        </p>

        <br />

        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
          <div className="flex flex-col justify-center md:w-1/2 md:pr-4">
            <div className="flex flex-col justify-center md:items-center">
              <p className="text-xl mt-5">Delhi Technological University</p>
              <p>
                Currently studying IT in Delhi Technlogical University,
                enthusiatic about competitive Programming, Coding and Web
                Development. <br /> Aggregate CGPA : 9.01
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={college} alt="" width={300} height={100} />
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-1/2 md:pl-4">
            <div className="flex flex-col justify-center md:items-center">
              <p className="text-xl mt-5">VBPS</p>
              <p>
                Completed High School in 2019 <br /> 10th CGPA : 9.60 <br />{" "}
                12th Percentage : 92%
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img src={school} alt="" width={300} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
