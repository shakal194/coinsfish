'use client'; // <===== REQUIRED

import React from 'react';

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image_desctop: string;
  image_tablet: string;
  image_mobile: string;
}

interface SliderProps {
  data: Slide[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className="to-white-100 rounded-3xl bg-gradient-to-r from-gray-100">
        <ul className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            //autoplay={false}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {data.map(
              ({
                id,
                tagline,
                title,
                image_desctop,
                image_tablet,
                image_mobile,
              }) => (
                <SwiperSlide key={id}>
                  <div
                    className="mx-auto mt-4 grid h-[32rem] grid-cols-1 grid-cols-[1fr] grid-rows-[max-content_1fr] justify-center gap-x-16 gap-y-5 px-4
                py-7 md:grid-cols-[300px_minmax(285px,_1fr)] md:gap-y-5 md:pb-16 md:pl-20 md:pr-20 md:pt-11 lg:h-[34rem]
                "
                  >
                    <div>
                      <p className="mt-30 mb-3.5 text-center text-2xl font-semibold leading-10 text-black md:text-left md:text-5xl md:font-bold lg:mb-7 ">
                        {title}
                      </p>
                      {tagline && (
                        <p className="m-0 text-center text-base font-medium leading-8 text-zinc-900 md:text-left md:text-2xl">
                          {tagline}
                        </p>
                      )}
                    </div>
                    <div
                      style={{
                        backgroundImage: `url(${image_mobile})`,
                      }}
                      className="bg-contain bg-center bg-no-repeat md:hidden lg:hidden"
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url(${image_tablet})`,
                      }}
                      className="bg-contain bg-center bg-no-repeat sm:hidden md:block lg:hidden"
                    ></div>
                    <div
                      style={{
                        backgroundImage: `url(${image_desctop})`,
                      }}
                      className="bg-contain bg-right bg-no-repeat sm:hidden md:hidden lg:block"
                    ></div>
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default Slider;
