'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from '@/components/swiper/Slide';

export default function DescriptionSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="w-full">
      <SwiperSlide>
        <Slide imgSrc="/images/description/description1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSrc="/images/description/description2.png" />
      </SwiperSlide>{' '}
      <SwiperSlide>
        <Slide imgSrc="/images/description/description3.png" end={true} />
      </SwiperSlide>
    </Swiper>
  );
}
