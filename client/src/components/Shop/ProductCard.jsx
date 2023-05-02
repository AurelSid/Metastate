import React from "react";
import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";

const ProductCard = ({ name, description, price, id, imageUrl }) => {
  return (
    <motion.div
      className="  text-[2vw]  md:text-base md:m-4 m-1  p-3 md:rounded-3xl rounded-lg bg-gray-700"
      whileHover={{
        backgroundColor: "#48BB78",
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <div id={id}>
        <img
          src={imageUrl}
          alt={name}
          className="md:rounded-2xl rounded-md aspect-w-16 aspect-h-9"
        />
        <div className="text-left m-3">
          <h3>{name}</h3>
          <p>{description}</p>
          <p className="">
            {price}
            <FaEthereum className="" />
          </p>
          <button className=" bg-teal-600 rounded-full px-3 py-1 mt-3">
            More details
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
