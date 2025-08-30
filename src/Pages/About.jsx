import React from "react";
import aboutBg from "../Assets/about.png";
import Header from "../Components/Header";
import a01 from "../Assets/About/a01.png";
import a02 from "../Assets/About/a02.png";
import a03 from "../Assets/About/a03.png";
import OurService from "../Components/Home/OurService";
import Testimonial from "../Components/Home/Testimonial";
import Visual from "../Components/Home/Visual";
import Store from "../Components/Home/Store";
import Journey from "../Components/Home/Journey";

const aboutImages = [a01, a02, a03];

const About = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-36">
      <div
        className="w-full h-[400px] mb-20"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>

      <Header
        title="Welcome to Ting’s Garden"
        desc="At Tings Garden, we believe that every garden tells a story. Founded with a passion for nature and a commitment to excellence, we have been bringing the beauty of flowers and plants into homes and gardens across Singapore. Our journey began with a simple dream: to create a space where people could find the best in gardening and landscaping products and services, all under one roof."
      />

      <div className="max-w-7xl grid grid-cols-3 grid-rows-1 gap-2 px-4 ">
        {aboutImages.map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Social ${idx}`}
              className="w-full h-96 object-contain"
            />
          </div>
        ))}
      </div>

      <OurService
        title="Our Beginnings"
        desc="Our story started in the heart of Singapore, shared a common love for gardening and nature. They envisioned a place where garden enthusiasts, both novice and experienced, could find everything they needed to create their own green oasis. With hard work, dedication, and a deep-rooted passion for plants, Tings Garden was born."
      />

      <Testimonial />
      <Visual />
      <Store />
      <Journey />
    </div>
  );
};

export default About;
