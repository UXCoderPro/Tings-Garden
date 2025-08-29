"use client";
import Header from "../Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import g1 from "../../Assets/Gallery/g1.png";
import g2 from "../../Assets/Gallery/g2.png";
import g3 from "../../Assets/Gallery/g3.png";
import g4 from "../../Assets/Gallery/g4.png";
import g5 from "../../Assets/Gallery/g5.png";
import g6 from "../../Assets/Gallery/g6.png";
import g7 from "../../Assets/Gallery/g7.png";
import g8 from "../../Assets/Gallery/g8.png";
import g9 from "../../Assets/Gallery/g9.png";
import g10 from "../../Assets/Gallery/g10.png";
import g11 from "../../Assets/Gallery/g11.png";
import g12 from "../../Assets/Gallery/g1.png";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

const Visual = () => {
  return (
    <div className="flex flex-col justify-center items-center py-24 w-full px-4 gap-20">
      <Header
        title="Visual Highlights"
        desc="Explore our collection of stunning visuals and memorable moments captured just for you!`"
      />

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        className="w-full mx-auto"
      >
        <SwiperSlide>
          <div className="w-full h-96 flex justify-start items-center gap-1">
            <div className="flex flex-col gap-1 h-full w-96">
              <img
                src={images[0]}
                alt="img"
                className=" w-full h-96 object-cover rounded-lg"
              />
              <img
                src={images[1]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>

            <img
              src={images[2]}
              alt="img"
              className=" w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-1 h-full w-96">
              <img
                src={images[3]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
              <img
                src={images[4]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>

            <img
              src={images[5]}
              alt="img"
              className=" w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-96 flex justify-start items-center gap-1">
            <div className="flex flex-col gap-1 h-full w-96">
              <img
                src={images[6]}
                alt="img"
                className=" w-full h-96 object-cover rounded-lg"
              />
              <img
                src={images[7]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>

            <img
              src={images[8]}
              alt="img"
              className=" w-full h-full object-cover rounded-lg"
            />
            <div className="flex flex-col gap-1 h-full w-96">
              <img
                src={images[9]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
              <img
                src={images[10]}
                alt="img"
                className=" w-full h-full object-cover rounded-lg"
              />
            </div>

            <img
              src={images[11]}
              alt="img"
              className="col-span-2 row-span-2 w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Visual;
