import React from "react";
import foodsite from "../assets/portfolio/foodsite.png";
import pokersite from "../assets/portfolio/pokersite.png";
import techinfo from "../assets/portfolio/techinfo.png";
import reactportfolio from "../assets/portfolio/reactportfolio.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: techinfo,
      href: "https://github.com/Shivansh10000/blog-website-backend",
      href2: "https://techinfowebsite.netlify.app/",
    },
    {
      id: 2,
      src: reactportfolio,
      href: "https://github.com/Shivansh10000/new-portfolio-website",
      href2: "https://shivansh-joshi.netlify.app/",
    },
    {
      id: 3,
      src: pokersite,
      href: "https://github.com/Shivansh10000/Poker-Game-Website",
      href2: "",
    },
    {
      id: 4,
      src: foodsite,
      href: "https://github.com/Shivansh10000/Food-Delivery-Website",
      href2: "",
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
          {portfolios.map(({ id, src, href, href2 }) => (
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
                  <a href={href} target="_blank" rel="noreferrer">
                    Code Link
                  </a>
                </button>
                {href2 !== "" && (
                  <button className="w-full px-2 py-2 m-1 duration-200 hover:scale-105">
                    <a href={href2} target="_blank" rel="noreferrer">
                      Live Site
                    </a>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
