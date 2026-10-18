import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { games } from "@/js/values";

import { Search } from "lucide-react";

export const SwiperProduct = () => {
  return (
    <div className="container-md p-6">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {games.map((game) => (
          <SwiperSlide key={game.id}>
          <img src={game.coverImage} className="w-full h-auto object-cover mr-4" alt="" />
          </SwiperSlide>
        ))} 
      </Swiper>
    </div>
  );
};
