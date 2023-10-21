import React from 'react';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const BrandHero = ({banners}) => {

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      navigation
      loop
      pagination={{clickable: true}}
      className='bg-slate-200'
    >
      {banners.map((link, ind) => (
        <SwiperSlide key={ind}>
          <img src={link} alt="" className="w-full h-[70vh] object-contain" />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default BrandHero;
