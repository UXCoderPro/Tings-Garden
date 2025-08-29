import React from "react";
import { motion } from "motion/react";

const Header = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="flex flex-col justify-center items-center gap-6 lg:w-3/4 md:w-3/4 w-full px-4"
    >
      <h1 className="text-secondary text-center font-italian font-semibold lg:text-5xl md:text-4xl text-2xl">
        {title}
      </h1>
      <p className="text-center font-mont text-text font-medium lg:text-2xl md:text-xl text-lg">
        {desc}
      </p>
    </motion.div>
  );
};

export default Header;
