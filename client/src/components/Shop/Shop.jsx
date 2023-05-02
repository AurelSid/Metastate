import React from "react";
import ProductCard from "./ProductCard";
import Products from "./Products";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const latestAdditions = Products.filter(
    (product) => product.category === "latestAdditions"
  );
  const mostViewed = Products.filter(
    (product) => product.category === "mostViewed"
  );
  const flats = Products.filter((product) => product.category === "flats");
  const houses = Products.filter((product) => product.category === "houses");

  return (
    <div className="gradient-bg-hero h-full text-white  justify-center">
      <motion.div
        className="container mx-auto md:w-7/12 py-20 "
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="">
          <h2 className="md:text-4xl font-semibold text-left mx-5 p-3 ">
            Latest Additions
          </h2>
          <div className="grid grid-cols-2 justify-center items-center mx-3 md:mx-0">
            {latestAdditions.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <button className="bg-teal-600 rounded-full px-3 py-1 mt-3 md:text-xl text-sm">
            View all
          </button>
        </div>
        <div className="">
          <h2 className="md:text-4xl font-semibold text-left mx-5 p-3 ">
            Most Viewed
          </h2>
          <div className="grid grid-cols-2 justify-center items-center mx-3 md:mx-0">
            {mostViewed.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <button className="bg-teal-600 rounded-full px-3 py-1 mt-3 md:text-xl text-sm">
            View all
          </button>
        </div>
        <div className="">
          <h2 className="md:text-4xl font-semibold text-left mx-5 p-3 ">
            Houses
          </h2>
          <div className="grid grid-cols-2 justify-center items-center mx-3 md:mx-0">
            {houses.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <button className="bg-teal-600 rounded-full px-3 py-1 mt-3 md:text-xl text-sm">
            View all
          </button>
        </div>
        <div className="">
          <h2 className="md:text-4xl font-semibold text-left mx-5 p-3 ">
            Flats
          </h2>
          <div className="grid grid-cols-2 justify-center items-center mx-3 md:mx-0">
            {flats.map((product, index) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                id={product.id}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          <button className="bg-teal-600 rounded-full px-3 py-1 mt-3 md:text-xl text-sm">
            View all
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Shop;
