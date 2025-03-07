"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../utils/SectionWrapper";
import Image from "next/image";


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <div className="mt-5 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="w-full md:w-1/3 flex justify-center"
        >
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-4 border-[#915eff]">
          <Image 
            src="/images/profile.jpg" 
            alt="Jason Jiang" 
            width={250} 
            height={250}
            className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="w-full md:w-2/3"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I&apos;m Jason Jiang, a Computer Science student at the University of Maryland. Previously at Amazon Project Kuiper, I developed satellite monitoring systems using React.js and machine learning. My background includes full-stack development for the National Children&apos;s Hospital, where I automated clinical processes, and machine learning research at the University of Delaware focusing on medical imaging applications. With expertise in Python, Java, JavaScript, and frameworks like React and TensorFlow, I blend software engineering with data science to create impactful solutions. Beyond my professional work, I&apos;m passionate about applying my technical skills to projects like my Premier League Match Predictor, which achieved 78% accuracy using CNN models trained on historical fixture data.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");