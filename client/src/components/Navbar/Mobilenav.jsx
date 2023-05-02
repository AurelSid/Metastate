import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillShop } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { AiFillWallet } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
const Mobilenav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [Switch, setSwitch] = useState(false);
  const handleSwitch = () => {
    setSwitch(!Switch);
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={
        open ? "fixed h-full w-full  z-10 mobile-menu " : "fixed  w-full  z-10 "
      }
    >
      <motion.div className="flex  items-center mt-7">
        <img
          src={Image}
          className=" fixed right-0  invert w-8 m-5      "
          onClick={() => {
            if (Switch) {
              handleClick();
              handleSwitch();
              navigate("Home");
            } else {
              navigate("Home");
            }
          }}
        />
        <FiMenu
          className={Switch ? " hidden" : "w-8 m-10 h-8 invert fixed"}
          onClick={() => {
            handleClick();
            handleSwitch();
          }}
        />
        <AiOutlineClose
          className={Switch ? " w-8 m-10 h-8 invert fixed" : "hidden"}
          onClick={() => {
            handleClick();
            handleSwitch();
          }}
        />
      </motion.div>

      <div
        className={
          open
            ? "justify-center items-center pb-40 flex w-full h-full rounded-full "
            : "hidden "
        }
      >
        <div className="">
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={() => (navigate("/Login"), handleClick(), handleSwitch())}
          >
            <motion.div layout="position">
              <AiOutlineUser />
            </motion.div>

            <motion.h1 layout="position" className="ml-2 text-sm mr-8">
              My profile
            </motion.h1>
          </motion.div>

          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4 "
          >
            <motion.div layout="position">
              <AiFillShop />
            </motion.div>

            <motion.h1
              layout="position"
              className="ml-2 text-sm mr-8"
              onClick={() => (navigate("/Shop"), handleClick(), handleSwitch())}
            >
              Marketplace
            </motion.h1>
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={() => (navigate("/Login"), handleClick(), handleSwitch())}
          >
            <motion.div layout="position">
              <AiFillWallet />
            </motion.div>

            <motion.h1 layout="position" className="ml-2 text-sm mr-8">
              My Wallet
            </motion.h1>
          </motion.div>
          {/*///////////////////////////////// */}

          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex  mx-1 bg-slate-400 rounded-full p-2 hover:bg-green-400 m-4"
            onClick={handleClick}
          >
            <motion.div layout="position">
              <GrContact />
            </motion.div>

            <motion.h1 layout="position" className="ml-2 text-sm mr-8">
              Contact
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mobilenav;
