import React from "react";
import { motion } from "motion/react";

const Button = ({
  title,
  icon,
  position,
  txtColor,
  handleClick,
  color,
  outline = false,
}) => {
  const outlineClasses = outline ? "border-solid border-secondary border" : "";
  return (
    <motion.button
      onClick={handleClick}
      className={`flex items-center justify-center font-mont px-9 py-3   ${color} ${outlineClasses} ${txtColor} lg:text-lg text-base rounded-full  font-normal hover:bg-primary hover:text-white transition-colors`}
      initial={{ opacity: 0, scale: 0.9 }} // fade + shrink on mount
      animate={{ opacity: 1, scale: 1 }} // grow into place
      whileHover={{ scale: 1.05, y: -2 }} // subtle pop + lift
      whileTap={{ scale: 0.95, y: 0 }} // press down effect
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </motion.button>
  );
};

export default Button;
