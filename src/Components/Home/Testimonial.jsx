import React from "react";
import Header from "../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonial } from "../../Data/index";
import "./Category.css";

const Testimonial = () => {
  return (
    <div className="max-w-7xl flex justify-center items-center flex-col gap-32 py-24 w-full">
      <Header
        title="Our Happy Customer"
        desc="Read the Woderfull Reviews from our Valued Clients and their journey with us"
      />

      <div className="w-full mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonial.map((items) => (
            <SwiperSlide key={items.id}>
              <div className="lg:w-80 md:w-80 w-full h-auto py-4 px-4 bg-bg border-border border border-solid rounded-xl flex flex-col gap-3">
                <div className="w-full flex justify-start items-center gap-4">
                  <img
                    src={items.image}
                    alt={items.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />

                  <h1 className="font-italian font-semibold text-base text-secondary">
                    {items.name}
                  </h1>
                </div>
                <p className="w-full font-mont text-sm text-text font-medium">
                  {items.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
