import ConnectImg from "../assets/images/connect-image.svg";
import { connectLinks } from "../utils/constants";
import { eatIcon, codeIcon, sleepIcon, repeatIcon } from "../assets/icons";
import { motion } from "framer-motion";
import { FadeIn, RotateIn } from "../utils/motion";
const Connect = () => {
  return (
    <div className=" mx-[15%] h-screen flex-align-center" id="connect">
      <motion.div
        variants={RotateIn("left")}
        initial="hidden"
        whileInView="show"
        className="flex-1 w-full h-full flex justify-center items-center"
      >
        <img src={ConnectImg} className="h-[65vh] w-max z-10" />
      </motion.div>
      <div className="flex-1 w-full h-full flex flex-col justify-center items-start gap-14">
        <motion.div
          variants={FadeIn("left", "spring", 0.3, 0.6)}
          initial="hidden"
          whileInView="show"
          className="text-black-90 font-poppins font-bold text-5xl dark:text-white"
        >
          Connect with me
        </motion.div>
        <div className="flex flex-col gap-3">
          {connectLinks.map((item, i) => (
            <motion.div
              variants={FadeIn("left", "spring", i * 0.4, 0.8)}
              initial="hidden"
              whileInView="show"
              key={item.icon}
              className="flex gap-4 items-center"
            >
              <a
                href={item.href}
                className="h-11 w-11 flex justify-center items-center"
                target="blank"
              >
                <img src={item.icon} className={`${item.styles}`} />
              </a>
              <h2 className="text-black-90 font-poppins font-[500] text-xl dark:text-white">
                {item.name}
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/*<div className="absolute bottom-5 left-[30%]">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <img src={eatIcon} />
            <h2 className="font-poppins mr-2">Eat</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src={sleepIcon} />
            <h2 className="font-poppins mr-2">Sleep</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src={codeIcon} />
            <h2 className="font-poppins mr-2">Code</h2>
          </div>
          <div className="flex gap-2 items-center">
            <img src={repeatIcon} />
            <h2 className="font-poppins mr-2">Repeat</h2>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

export default Connect;
