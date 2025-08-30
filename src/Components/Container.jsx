import React from "react";

import { motion } from "motion/react";

const Container = ({ image, alt, name, type, price }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }} // fade + shrink on mount
      animate={{ opacity: 1, scale: 1 }} // grow into place
      whileHover={{ scale: 1.05, y: -2 }} // subtle pop + lift
      whileTap={{ scale: 0.95, y: 0 }} // press down effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col gap-4 items-start cursor-pointer border border-solid border-stroke hover:shadow-[4px_4px_8px_0_rgba(255,211,211,0.25)]  rounded-md pb-4 h-auto w-64  "
    >
      <div className="w-full h-64 bg-product-gradient">
        <img src={image} alt={alt} className="object-contain bg-center" />
      </div>

      <div className="flex-col flex w-full h-auto gap-2">
        <h2 className="text-text font-italian text-2xl font-semibold text-center">
          {name}
        </h2>
        <p className="font-mont font-normal text-lg text-center text-text">
          {type}
        </p>

        <h3 className="font-mont text-secondary font-medium text-center text-xl">
          {price}
        </h3>
      </div>
    </motion.div>
  );
};

export default Container;
