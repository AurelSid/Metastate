import React from "react";
import Image from "../../assets/images/sphere.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col md:flex-row items-center justify-center md:p-12 p-2 gradient-bg-section1 h-screen">
      <div className="hero-image w-2/4 md:w-3/12 mb-6 md:mb-0 ">
        <motion.img
          src={Image}
          alt="Hero Image"
          className="object-center rounded-lg invert "
          animate={{
            rotate: 360,
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      </div>
      <motion.div
        className="hero-text md:w-4/12 md:ml-5 p-5 md:p-0  text-left"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-5xl  font-bold m-2 text-white mobile-landscape:text-lg ">
          The futur of real estate is here with MetaState
        </h1>
        <p className="md:text-2xl text-md text-green-200 mb-6 mobile-landscape:text-sm  ">
          Agents, buyers and sellers all over the world love the simplicity and
          security of MetaState.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
