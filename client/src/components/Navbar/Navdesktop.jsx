import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { AiFillWallet } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const Navdesktop = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="fixed h-screen w-60 flex z-10 "
    >
      <div className="flex m-10 h-60 rounded-full">
        <div
          className="m-auto  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div>
            <img
              src={Image}
              alt="Hero Image"
              className="object-center rounded-lg invert w-8 ml-1    "
              onClick={() => navigate("Home")}
            />
          </motion.div>

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={() => navigate("/Login")}
          >
            <motion.div layout="position">
              <AiOutlineUser />
            </motion.div>
            {isHovered && (
              <motion.h1 layout="position" className="ml-2 text-sm mr-8">
                My profile
              </motion.h1>
            )}
          </motion.div>

          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={() => navigate("/Shop")}
          >
            <motion.div layout="position">
              <AiFillShop />
            </motion.div>
            {isHovered && (
              <motion.h1 layout="position" className="ml-2 text-sm mr-8">
                Marketplace
              </motion.h1>
            )}
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={() => navigate("/Login")}
          >
            <motion.div layout="position">
              <AiFillWallet />
            </motion.div>
            {isHovered && (
              <motion.h1 layout="position" className="ml-2 text-sm mr-8">
                My Wallet
              </motion.h1>
            )}
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
          >
            <motion.div layout="position">
              <GrContact />
            </motion.div>
            {isHovered && (
              <motion.h1 layout="position" className="ml-2 text-sm mr-8">
                Contact
              </motion.h1>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navdesktop;
