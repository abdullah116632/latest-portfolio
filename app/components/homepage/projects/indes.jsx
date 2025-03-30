"use client";

import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import { useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const [showFullList, setShowFullList] = useState(false);
  const listRef = useRef(null); 

  const handleToggle = () => {
    setShowFullList((prev) => {
      if (prev) {
        // Scroll to top when collapsing
        setTimeout(() => {
          listRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 10);
      }
      return !prev;
    });
  };

  const visibleItems = showFullList ? projectsData : projectsData.slice(0, 4);

  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div>
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {visibleItems.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="w-full mx-auto"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center  mt-5 lg:mt-12">
          <button
            onClick={handleToggle}
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          >
            {showFullList ? "See Less" : "View All"}
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
