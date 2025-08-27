import React from "react";
import Hero from "../Components/Home/Hero";
import Category from "../Components/Home/Category";
import NewArrivals from "../Components/Home/NewArrivals";

const Home = () => {
  return (
    <div className=" w-full  flex flex-col  justify-center items-center">
      <Hero />
      <Category />
      <NewArrivals />
    </div>
  );
};

export default Home;
