import React from "react";
import personalportfolio from "../assets/portfolio/personal portfolio.jpg";
import ecom from "../assets/portfolio/e-com.jpg";

const Projects = () => {
  const projectsList = [
    // {
    //   id: 1,
    //   name: "E-Commerce Website (SIMULET)",
    //   src: ecom,
    //   hrefCode: "https://github.com/S1nggihsutansyach/simulet",
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full lg:p-24">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projectsList.map(({ id, name, src, hrefLive, hrefCode }) => (
            <div key={id} className="shadow-xl rounded-b-md duration-300 hover:scale-150">
              <div className="">
              <img
                src={src}
                alt=""
                className="rounded-t-md "
              />
              <p className="bg-gray-900 py-2 font-semibold">{name}</p>
              </div>
              <div className="flex items-center justify-center bg-zinc-900 rounded-b-md">
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                  <a href={hrefLive} target="_blank" rel="noreferrer">Live</a>
                </button>
                <button className="w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110 text-sky-400">
                <a href={hrefCode} target="_blank" rel="noreferrer">Code</a>
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
