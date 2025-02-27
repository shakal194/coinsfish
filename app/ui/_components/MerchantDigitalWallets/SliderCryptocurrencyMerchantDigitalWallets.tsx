'use client';

import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  title: string;
  description: string;
}

interface SliderProps {
  data: Slide[];
}

const SliderCryptocurrency: React.FC<SliderProps> = ({ data }) => {
  return (
    <div className="mt-[134px] w-full rounded-3xl">
      <Swiper
        pagination={{
          type: 'bullets',
          clickable: true,
          renderBullet: function (index, className) {
            return '<p class="' + className + '">' + (index + 1) + '</p>';
          },
          dynamicBullets: true,
          el: '.custom-pagination-hero',
        }}
        autoplay={true}
        loop={true}
        breakpoints={{
          '@0.25': {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          '@0.50': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.0': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="custom-slider-hero !py-4"
      >
        {data.map(({ id, title, description }) => (
          <SwiperSlide key={id}>
            <div
              key={id}
              className="block_hero_slider_item mx-4 h-[170px] rounded bg-white p-4 shadow-md dark:border dark:bg-inherit"
            >
              <h4 className="text-[16px] font-semibold md:text-[20px] lg:text-xl">
                {title}
              </h4>
              <p className="mt-2 text-[12px] md:text-[14px]">{description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-hero relative mt-5 flex h-[20px] w-[20px] justify-center"></div>
    </div>
  );
};

export default SliderCryptocurrency;
