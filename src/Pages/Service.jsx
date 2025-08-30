import React from "react";
import ServiceBg from "../Assets/service.png";
import Header from "../Components/Header";
import AboutSection from "../Components/AboutSection";
import Offer from "../Components/Home/Offer";
import Testimonial from "../Components/Home/Testimonial";

const Service = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-36 pb-20">
      <div
        className="w-full h-[400px] mb-20"
        style={{
          backgroundImage: `url(${ServiceBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <Header
        title="Transform Your Outdoors / Indoor with Our Premier Services"
        desc="Enhance your outdoor space with our comprehensive range of services designed to create and maintain beautiful gardens. Whether you need professional landscaping to transform your property or expert flower maintenance to keep your garden vibrant, our team is here to help. We blend creativity with expertise to deliver stunning results that reflect your vision and suit your lifestyle. Explore our services and discover how we can bring your garden dreams to life."
      />

      <AboutSection />
      <Offer />
      <Testimonial />
    </div>
  );
};

export default Service;
