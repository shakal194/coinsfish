'use client'; // <===== REQUIRED

import React from 'react';

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface Slide {
  id: number;
  title: string;
  image: string;
  background: string;
}

interface SliderProps {
  data: Slide[];
}

const CoinSlider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section>
      <div className="w-full">
        <ul>
          <Swiper
            autoplay={{ delay: 1300 }}
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 2,
              },
              '@0.50': {
                slidesPerView: 3,
              },
              '@0.75': {
                slidesPerView: 5,
              },
              '@1.25': {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
          >
            {data.map(({ id, background, image, title }) => (
              <SwiperSlide key={id}>
                <div
                  className="mr-6 flex h-24 w-24 items-center justify-center rounded-3xl"
                  style={{
                    backgroundColor: background,
                  }}
                >
                  <Image src={image} alt={title} width="44" height="44" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default CoinSlider;
