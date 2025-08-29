import React from "react";
import { Link } from "react-router-dom";
import { service } from "../../Data";
import bgTree from "../../Assets/bgTree.png";
import Button from "../Button";
import { motion } from "motion/react";

const OurService = () => {
  return (
    <div className="w-full pb-48">
      <div
        className="flex justify-center items-center py-28 w-full"
        style={{
          backgroundImage: `url(${bgTree})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-italian font-bold lg:text-6xl text-secondary md:text-4xl text-3xl"
        >
          Our Service
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16 space-y-20">
        {service.map((items, index) => (
          <div
            key={items.id}
            className="flex flex-col items-center justify-center gap-20"
          >
            <div className="flex justify-between items-start w-full gap-9 flex-wrap ">
              <div className="flex flex-col gap-4 max-w-[600px]">
                <h1 className="font-italian w-full text-text lg:text-5xl md:text-3xl text-2xl font-normal">
                  {items.title}
                </h1>
                <p className="font-mont w-full text-text lg:text-base text-sm font-medium">
                  {items.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link to="/service" className="w-max">
                    <Button
                      title="View Service"
                      color="bg-primary"
                      outline={false}
                      txtColor="text-white"
                    />
                  </Link>
                  <Link to="/contact" className="w-max">
                    <Button
                      title="Contact Us"
                      color="bg-white"
                      outline={true}
                      txtColor="text-secondary"
                    />
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img
                  src={items.image}
                  alt={items.id}
                  className={`w-full h-[350px] object-cover shadow-lg ${
                    index % 2 === 0
                      ? "rounded-tr-[120px] rounded-bl-[120px]"
                      : "rounded-tl-[120px] rounded-br-[120px]"
                  }`}
                />
                <div
                  className={`absolute inset-0 border-2 border-secondary pointer-events-none ${
                    index % 2 === 0
                      ? "rounded-tr-[120px] rounded-bl-[120px] translate-x-3 translate-y-3"
                      : "rounded-tl-[120px] rounded-br-[120px] -translate-x-3 translate-y-3"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
