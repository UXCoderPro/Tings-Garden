import React from "react";
import Hero from "../Components/Home/Hero";
import Category from "../Components/Home/Category";
import NewArrivals from "../Components/Home/NewArrivals";
import OurService from "../Components/Home/OurService";
import Offer from "../Components/Home/Offer";
import Testimonial from "../Components/Home/Testimonial";
import Visual from "../Components/Home/Visual";
import Store from "../Components/Home/Store";
import Journey from "../Components/Home/Journey";

const Home = () => {
  return (
    <div className=" w-full  flex flex-col  justify-center items-center">
      <Hero />
      <Category />
      <NewArrivals />
      <OurService />
      <Offer />
      <Testimonial />
      <Visual />
      <Store />
      <Journey />
    </div>
  );
};

export default Home;
