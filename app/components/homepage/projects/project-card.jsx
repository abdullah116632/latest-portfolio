// @flow strict

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* title */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>

      <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
        {/* image */}
        <div className="h-48 lg:h-96 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image
            src={project?.cover_image}
            height={1080}
            width={1920}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* description */}
        <div className="p-2 sm:p-3 flex flex-col">
          <p className="text-sm lg:text-base text-[#d3d8e8] py-3 lg:pb-6 max-h-48 line-clamp-3 overflow-y-auto scrollbar-hide">
            {project.description}
          </p>
        </div>

        {/* button */}
        <div className="flex items-center justify-end gap-3 py-3 px-5">
            <Link href={project.code} target="_blank" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 hover:bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Code</span>
                <FaCode size={16} />
              </button>
            </Link>

            {
              project.demo && (<Link href={project.demo} target="_blank" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 hover:bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Live</span>
                  <CgWebsite size={16} />
                </button>
              </Link>)
            }
          </div>
      </div>
    </div>
  );
}

export default ProjectCard;
