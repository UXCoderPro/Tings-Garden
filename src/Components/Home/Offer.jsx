import React from "react";
import leftTop from "../../Assets/Offer/tl.png";
import rightTop from "../../Assets/Offer/rt.png";
import leftBottom from "../../Assets/Offer/bl.png";
import rightBottom from "../../Assets/Offer/br.png";
import logo from "../../Assets/logo.svg";
import Button from "../Button";

const Offer = () => {
  return (
    <div className="w-full py-16 flex justify-center items-center relative bg-offer-gradient">
      <div className="absolute top-0 left-0 w-40 h-40  md:w-56 md:h-56">
        <img
          src={leftTop}
          alt="Flowers"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute top-0  right-0 w-40 h-40 md:w-56 md:h-56">
        <img
          src={rightTop}
          alt="Flowers"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-56 md:h-56">
        <img
          src={leftBottom}
          alt="Flowers"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-56 md:h-56">
        <img
          src={rightBottom}
          alt="Flowers"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col justify-center z-10 items-center gap-6">
        <img
          src={logo}
          alt="tings Garden"
          className="w-72 h-auto object-cover"
        />
        <h1 className="font-italian mt-4 font-semibold text-white lg:text-7xl text-center md:text-4xl text-3xl">
          Special Offer Alert
        </h1>
        <h4 className="font-italian mt-4 font-medium lg:text-5xl md:text-3xl text-xl text-center text-[#FFD301]">
          Unlock Exclusive Benefits with Purchase Over $50!
        </h4>
        <Button
          title="Sign Up"
          color="bg-primary"
          outline={false}
          txtColor="text-white"
        />
      </div>
    </div>
  );
};

export default Offer;
