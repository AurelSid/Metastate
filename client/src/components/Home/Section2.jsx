import React from "react";
import Image from "../../assets/images/graph.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  flex-col md:flex-row-reverse items-center justify-center md:p-12 p-2 gradient-bg-section2 h-screen">
      <div className="md:w-2/4  ">
        <motion.img
          src={Image}
          alt="Hero Image"
          className="object-center rounded-lg  "
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <motion.div
        className="hero-text md:w-4/12 md:ml-5  text-left p-5 md:p-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h1 className="text-2xl md:text-5xl  font-bold m-2 text-white mobile-landscape:text-lg ">
          Connecting Buyers , Loaners and owners.
        </h1>
        <p className="md:text-2xl text-md text-green-200 mb-6 mobile-landscape:text-sm  ">
          Metastate connects all parties in total trust.
        </p>
        <p className="text-sm text-green-200 mb-6 white-glassmorphism md:p-10 p-3 mobile-landscape:p-2 md:text-base  ">
          Metastate is powered by smart contracts on the ethereul blockchain ,
          resulting in total security and reliability from each party. Smart
          contracts transactions and loans allow for an instant exchange between
          buyers and sellers without the need of third party intervention thanks
          the chains validation.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
