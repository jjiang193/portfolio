"use client";

import { motion } from "framer-motion";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My technical skills
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills.
        </h2>
      </motion.div>
      
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <div
              className="w-full h-full rounded-full bg-tertiary flex justify-center items-center shadow-md hover:shadow-[#915eff] transition-shadow duration-300"
            >
              <div className="text-4xl">{technology.icon === "html" ? "🌐" : 
                technology.icon === "css" ? "🎨" : 
                technology.icon === "javascript" ? "📜" : 
                technology.icon === "typescript" ? "📘" : 
                technology.icon === "reactjs" ? "⚛️" : 
                technology.icon === "redux" ? "🔄" : 
                technology.icon === "tailwind" ? "💨" : 
                technology.icon === "nodejs" ? "🟢" : 
                technology.icon === "mongodb" ? "🍃" : 
                technology.icon === "threejs" ? "🔺" : 
                technology.icon === "git" ? "📂" : 
                technology.icon === "figma" ? "🖌️" : "💻"}</div>
            </div>
            <p className="text-center text-white mt-2">{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills"); 