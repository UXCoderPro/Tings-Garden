import React from "react";
import Button from "./Button";

import { Link } from "react-router-dom";
import { aboutUs } from "../Data/index";

const AboutSection = () => {
  return (
    <section className="w-full bg-white  text-text">
      {/* Section 01 */}
      {aboutUs.map((item) => (
        <div key={item.id} className="relative w-full">
          <div
            className="relative h-[70vh] flex items-center bg-red-400 justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.mainImage})`,
              backgroundSize: "conver",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col gap-6 justify-center items-center">
              <h2 className="text-4xl md:text-5xl font-bold font-italian text-white">
                {item.mainTitle}
              </h2>
              <p className="mt-4 text-lg font-mont text-white font-normal">
                {item.mainDesc}
              </p>
              <Link to="/contact">
                <Button
                  title="Contact Us"
                  color="bg-primary"
                  outline={false}
                  txtColor="text-white"
                />
              </Link>
            </div>
            <span className="absolute top-10 left-5 text-[8rem] font-mont font-bold text-white/20 select-none">
              {item.sno}
            </span>
          </div>

          {/* Custom Landscaping */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 py-16 px-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={item.firstImage1}
                className="rounded-lg object-cover h-72 w-full"
                alt="garden"
              />
              <img
                src={item.firstImage2}
                className="rounded-lg object-cover h-72 w-full"
                alt="garden"
              />
            </div>
            <div>
              <h3 className="lg:text-2xl text-lg font-semibold font-mont text-text">
                {item.firstHeading}
              </h3>
              <p className="mt-4 text-gray-600 font-mont lg:text-lg text-base">
                {item.firstDesc}
              </p>
              <ul className="list-disc mt-4 ml-5 text-gray-600 font-mont lg:text-lg text-base space-y-2">
                <li>{item.firstList[0]}</li>
                <li>{item.firstList[1]}</li>
                <li> {item.firstList[2]}</li>
                <li>{item.firstList[3]}</li>
                <li>{item.firstList[4]}</li>
              </ul>
            </div>
          </div>

          {/* Garden Installation */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-6">
            <div>
              <h3 className="lg:text-2xl text-lg font-semibold font-mont text-text">
                {item.secondHeading}
              </h3>
              <p className="mt-4 text-gray-600 font-mont lg:text-lg text-base">
                {item.secondDesc}
              </p>
              <ul className="list-disc mt-4 ml-5 text-gray-600 font-mont lg:text-lg text-base space-y-2">
                <li>{item.secondList[0]}</li>
                <li>{item.secondList[1]}</li>
                <li>{item.secondList[2]}</li>
                <li>{item.secondList[3]}</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={item.secondImage1}
                className="rounded-lg object-cover h-72 w-full"
                alt="garden"
              />
              <img
                src={item.secondImage2}
                className="rounded-lg object-cover h-72 w-full"
                alt="garden"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
