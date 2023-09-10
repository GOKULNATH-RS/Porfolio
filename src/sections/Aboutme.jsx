import AboutImg from "../assets/images/about-me-image.svg";
import { AboutText, skills } from "../utils/constants";
import { FadeIn, RotateIn } from "../utils/motion";
import { motion } from "framer-motion";
const Aboutme = () => {
  return (
    <div
      className=" mx-[15%] h-screen flex-align-center gap-3 z-[5] max-sm:scale-90 max-sm:h-full max-sm:mt-10 max-md:h-full"
      id="about"
    >
      <motion.div
        variants={RotateIn("left")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex-1 w-full h-full flex justify-center items-center max-sm:hidden"
      >
        <img src={AboutImg} className="h-[65vh] w-max" />
      </motion.div>
      <div className="flex-1 w-full h-full flex flex-col gap-9 justify-center">
        <motion.h2
          variants={FadeIn("left", "spring", 0.3, 0.6)}
          initial="hidden"
          whileInView="show"
          className="text-black-90 dark:text-white font-bold text-center font-poppins text-7xl mb-10"
        >
          About
        </motion.h2>
        <motion.p
          variants={FadeIn("left", "spring", 0.6, 0.6)}
          initial="hidden"
          whileInView="show"
          className="text-lg flex justify-start leading-normal font-poppins text-black-90 dark:text-white md:text-md"
        >
          {AboutText}
        </motion.p>
        <div className="flex gap-4 ">
          {skills.map((skill, i) => (
            <motion.div
              variants={FadeIn("left", "spring", i * 0.3, 0.6)}
              initial="hidden"
              whileInView="show"
              key={skill.icon}
              className="h-[52px] w-[52px] rounded-full flex justify-center  items-center shadow-[2px_2px_15px_0_rgba(0,0,0,0.15)] p-2 hover:shadow-[2px_2px_15px_0_rgba(0,0,0,0.25)] dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]"
            >
              <motion.img
                src={skill.icon}
                className="h-[40px] w-[40px]"
                alt={skill.alt}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
