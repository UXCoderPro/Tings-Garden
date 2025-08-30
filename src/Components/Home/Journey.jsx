import React from "react";
import Header from "../Header";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import so1 from "../../Assets/Social/so1.png";
import so2 from "../../Assets/Social/so2.png";
import so3 from "../../Assets/Social/so3.png";
import so4 from "../../Assets/Social/so4.png";
import so5 from "../../Assets/Social/so5.png";
import so6 from "../../Assets/Social/so6.png";

const socialImages = [so1, so2, so3, so4, so5, so6];

const Journey = () => {
  return (
    <div className="w-full flex-col gap-8 px-4 py-24 flex justify-center items-center">
      <Header
        title="Follow Our Journey"
        desc="Be a part of our social media family for exciting updates and special offers!"
      />

      <div className="flex items-center flex-wrap justify-center gap-6">
        <Button
          title="FOLLOW ON INSTAGRAM"
          color="bg-white"
          outline={true}
          txtColor="text-secondary"
        />
        <Button
          title="FOLLOW ON FACEBOOK"
          color="bg-white"
          outline={true}
          txtColor="text-secondary"
        />
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full mt-28"
      >
        {socialImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Social ${idx}`}
              className="w-full h-72 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Journey;
