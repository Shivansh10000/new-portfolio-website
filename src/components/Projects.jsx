import React from "react";
import foodsite from "../assets/portfolio/foodsite.png";
import pokersite from "../assets/portfolio/pokersite.png";
import djangoml from "../assets/portfolio/djangoml.png";
import reactportfolio from "../assets/portfolio/reactportfolio.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: foodsite,
      href: "https://github.com/Shivansh10000/Food-Delivery-Website",
    },
    {
      id: 2,
      src: pokersite,
      href: "https://github.com/Shivansh10000/Poker-Game-Website",
    },
    {
      id: 3,
      src: djangoml,
      href: "https://github.com/Shivansh10000/flower_recognition_website",
    },
    {
      id: 4,
      src: reactportfolio,
      href: "https://github.com/Shivansh10000/new-portfolio-website",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-5 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                width={400}
                height={400}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-2 py-2 m-1 duration-200 hover:scale-105">
                  Code Link:
                </button>
                <button className="w-full px-2 py-2 m-1 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
