import React from "react";
import Image from "../../assets/images/graph.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Press = () => {
  const navigate = useNavigate();
  const images = [
    "https://bitsliced.io/images/outlets/beincrypto-logo.webp",
    "https://cdn.shopify.com/s/files/1/0567/3471/1923/files/CoinDeskLogo_Landscape_Light_1_884x.png?v=1649695130",
    "https://cdn.shopify.com/s/files/1/0714/1869/files/Bitcoin_Magazine_Logos_1.png?v=1631070162",
    "https://static1.squarespace.com/static/58665ccfd482e9e92a7ff561/t/59066a8703596ed6c1827266/1493592716224/whitetextlongreversed.png?format=1500w",
  ];

  return (
    <div className="flex flex-col  items-center justify-center md:p-2 px-10 gradient-bg-press h-screen">
      <div className="">
        <h1 className=" text-white font-bold md:text-5xl text-3xl pb-10  text-left ml-2">
          As seen in
        </h1>
        <motion.div className="flex flex-wrap justify-center grid-cols-2 md:grid-cols-4 gap-4 white-glassmorphism md:p-20 p-10 ">
          {images.map((image, index) => (
            <div key={index} className="md:w-60 w-40 md:h-auto ">
              <img src={image} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Press;
