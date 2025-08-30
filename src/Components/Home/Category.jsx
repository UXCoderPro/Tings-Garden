import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "../Container";
import "./Category.css";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState("Flowers");

  // ✅ Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  // ✅ Filter products by category
  const filterProduct = products.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full h-screen bg-yellow-gradient flex flex-col  justify-center items-center ">
      <div className="flex flex-col gap-10 items-center">
        <h1 className="text-text font-italian text-center font-semibold lg:text-5xl md:text-3xl text-2xl">
          Shop by Category
        </h1>

        <div className="flex justify-center items-center gap-10">
          {categories.map((items) => (
            <button
              key={items}
              onClick={() => setActiveCategory(items)}
              className={`transition-all px-4 py-2 font-mont lg:text-base text-sm ${
                activeCategory === items
                  ? "text-primary border-b-2 border-primary font-semibold"
                  : "text-text font-medium hover:text-primary"
              }`}
            >
              {items}
            </button>
          ))}
        </div>

        <div className="lg:max-w-7xl md:max-w-3xl max-w-lg   px-10 h-auto  mt-8">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={0}
            slidesPerView={4} // base
            breakpoints={{
              420: { slidesPerView: 1, spaceBetween: 6 },
              640: { slidesPerView: 2, spaceBetween: 4 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full"
          >
            {filterProduct.map((product) => (
              <SwiperSlide
                className="!w-[80%] sm:!w-[45%] lg:!w-[22%]  py-5"
                key={product.id}
              >
                <Link to={`/product/${product.id}`}>
                  <Container
                    image={product.image}
                    alt={product.name}
                    name={product.name}
                    type={product.type}
                    price={`$${product.size.small.price} - $${product.size.large.price}`}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;
