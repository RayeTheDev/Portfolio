import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas/Computers";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute top-[120px] inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5 z-20`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Turbold</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop interfaces and web applications
          </p>
          <div className="flex gap-3 mt-5">
            <a
              className="cursor-pointer"
              target="blank"
              href="https://www.facebook.com/Fateu9/">
              <AiFillFacebook className="w-[40px] h-[40px]  " />
            </a>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://www.instagram.com/innerrae02/">
              <AiFillInstagram className="w-[40px] h-[40px] cursor-pointer" />
            </a>
            <a
              className="cursor-pointer"
              target="blank"
              href="https://github.com/RayeTheDev">
              <AiFillGithub className="w-[40px] h-[40px] cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-42 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
