import React from "react";
import bg from "../../Assets/bg.svg";
import Button from "../Button";

const Hero = () => {
  return (
    <div
      className="relative bg-yellow-gradient overflow-hidden w-full h-auto pb-52 flex flex-col items-center gap-10 px-4 justify-start"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h1 className="lg:max-w-2xl md:max-w-sm mt-32 text-secondary text-center font-italian lg:text-8xl md:text-6xl text-3xl font-semibold ">
        Bring Joy with Every Bloom
      </h1>
      <p className="lg:max-w-5xl md:max-w-lg  text-center font-mont text-text font-medium lg:text-lg md:text-base text-sm">
        At Tings Garden, we believe that every garden tells a story. Founded
        with a passion for nature and a commitment to excellence, we have been
        bringing the beauty of flowers and plants into homes and gardens across
        Singapore. Our journey began with a simple dream: to create a space
        where people could find the best in gardening and landscaping products
        and services, all under one roof.
      </p>
      <Button
        title="Explore our Collection"
        color="bg-primary"
        outline={false}
        txtColor="text-white"
      />
    </div>
  );
};

export default Hero;
