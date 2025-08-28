import React from "react";
import { products } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import newImage from "../../Assets/Ins/newImage.jpg";
import Button from "../Button";

const NewArrivals = () => {
  const newArrivals = products.filter((p) => p.newArrival);

  return (
    <section className="w-full h-auto py-44 flex justify-center items-center">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000, // slow transition (4s each slide)
          disableOnInteraction: true,
        }}
        speed={2000} // smooth transition speed
        navigation
        className="w-full lg:h-[700px] h-[1000px] "
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="grid grid-col-1 lg:grid-cols-3 h-full">
              <div className="relative lg:h-full h-auto overflow-hidden">
                <img
                  src={newImage}
                  alt="new Arrivals"
                  className="w-full h-full object-cover"
                />
                <h1 className="absolute inset-0 flex justify-center items-center text-white text-center font-italian font-normal lg:text-7xl md:text-5xl text-4xl">
                  New Arrivals
                </h1>
              </div>

              <div className=" bg-[#F0516D] lg:col-span-2 relative flex flex-col justify-start items-center">
                <div className="flex flex-col items-center z-10 absolute lg:right-6 top-1/2 lg:w-2/3 w-full px-3 -translate-y-1/2 gap-6 lg:px-20 px-4">
                  <h1 className="text-center text-white font-italian font-normal text-4xl">
                    {product.name}
                  </h1>
                  <p className="text-center text-white font-mont font-normal text-base">
                    {product.description}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <Button
                      title="View More"
                      color="bg-white"
                      outline={true}
                      txtColor="text-primary"
                    />
                  </Link>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute bottom-0 left-0 lg:w-1/2 w-2/3 object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;
