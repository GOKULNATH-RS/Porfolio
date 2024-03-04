import { FadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { AchievementData } from "../utils/constants";

const Achievement = () => {
  return (
    <div
      className=" mx-[15%] h-screen flex-align-center flex-col max-sm:scale-90 max-sm:h-full max-sm:my-10 max-md:h-full"
      id="connect"
    >
      <motion.h2
        variants={FadeIn("left", "spring", 0.3, 0.6)}
        initial="hidden"
        whileInView="show"
        className="text-black-90 dark:text-white font-bold text-center font-poppins text-5xl mb-10"
      >
        Achievements
      </motion.h2>
      <div className="flex gap-4 flex-wrap">
        {AchievementData.map((event, i) => (
          <motion.div
            variants={FadeIn("left", "spring", i * 0.3, 0.6)}
            initial="hidden"
            whileInView="show"
            key={i}
            className="h-[350px] w-[500px] rounded-[25px]  overflow-hidden flex justify-center  items-center shadow-[2px_2px_15px_0_rgba(0,0,0,0.25)]  hover:shadow-[2px_2px_15px_0_rgba(0,0,0,0.35)] dark:bg-[#03001c] dark:hover:shadow-[2px_2px_15px_0_rgba(255,255,255,0.15)]"
          >
            <motion.img
              src={event.img}
              className="w-full h-full hover:scale-105 duration-300 z-0"
              alt={event.eventname}
            />
            <div className="h-[150px] w-[500px] rounded-[25px] z-1 absolute  bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0] bg-opacity-30 "></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
