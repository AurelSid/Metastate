import React from "react";
import Image from "../../assets/images/logo.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CirclePointer from "../CirclePointer";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-section flex flex-col md:flex-row items-center justify-center p-12 gradient-bg-hero h-screen">
      <motion.div
        className="hero-text md:w-1/2 md:ml-0"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="hero-image m-auto w-2/12 invert">
          <img
            src={Image}
            alt="Hero Image"
            className="object-center rounded-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold m-2 text-white">
          MetaState
        </h1>
        <p className="text-2xl text-green-200 mb-6">
          Real estate powered by the blockchain.
        </p>
        <button
          onClick={() => navigate("/Shop")}
          className="bg-gray-700 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full cursor-pointer"
        >
          Become an Owner
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
