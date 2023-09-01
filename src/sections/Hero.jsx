import Navbar from "../components/Navbar";
import HeroImg from "../assets/images/hero-image.svg";
import { Herolinks } from "../utils/constants";
import { FadeIn, SlideIn, navVariants } from "../utils/motion";
import { motion, stagger } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen flex flex-col gap-8 z-[5]">
      <Navbar />

      <motion.div
        variants={navVariants(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="blur-[145px] gradient-1 h-[50vh] w-[40vw] absolute top-2 left-[-2] -z-[1]"
      />
      <div className="flex-align-center mx-[15%] mt-4 py-5">
        <div className="flex-1  w-full h-full flex flex-col gap-7 justify-center items-start">
          <motion.div className="flex flex-col justify-center gap-3 mb-8">
            <motion.h2
              variants={FadeIn("right", "tween", 0.7, 0.4)}
              initial="hidden"
              whileInView="show"
              className="font-poppins text-5xl font-bold text-black-90 dark:text-white"
            >
              Hi
            </motion.h2>
            <motion.h2
              variants={FadeIn("right", "tween", 1, 0.4)}
              initial="hidden"
              whileInView="show"
              className="font-poppins text-5xl text-black-90 dark:text-white"
            >
              I'm <span className="gradient-text">GOKULNATH R S</span>
            </motion.h2>
            <motion.h2
              variants={FadeIn("right", "spring", 1.3, 0.4)}
              initial="hidden"
              whileInView="show"
              className="text-black-90 font-gruppo font-bold text-lg dark:text-white"
            >
              Front-End Developer | UI/UX Designer
            </motion.h2>
          </motion.div>
          <div className="flex gap-3 items-center">
            {Herolinks.map((link, i) => (
              <motion.a
                variants={FadeIn("right", "tween", i * 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                href={link.href}
                key={link.icon}
                target="blank"
              >
                <img
                  src={link.icon}
                  className="cursor-pointer h-[40px] w-[40px]"
                />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="flex-1 w-full h-full flex justify-center items-center"
          variants={FadeIn("left", "tween", 0.4, 0.6)}
          initial="hidden"
          whileInView="show"
        >
          <img src={HeroImg} className="h-[60vh] w-max" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
