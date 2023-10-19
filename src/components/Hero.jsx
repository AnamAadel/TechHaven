import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Link } from 'react-scroll';
import 'swiper/css';
import 'swiper/css/autoplay';

// import required modules



function Hero() {
  const [heroProduct, setHeroProduct] = useState();
  const [imgIndex, setImgIndex] = useState(0);
  const bannerImg = useRef(null);

  const handleHeroImage = (swiper) => {
    console.log()
    setImgIndex(swiper.activeIndex)
    bannerImg.current.classList.add("fadeOut")
    setTimeout(()=>{bannerImg.current.classList.remove("fadeOut")} ,1100)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/new_product/all");
        const data = await res.json();
        console.log(data)
        setHeroProduct(data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="min-h-[70vh] relative ">
      <div className="flex justify-center gap-4">
        <div className="w-full md:w-1/2 p-8 space-y-4 bg-primary">
          <h1 className="text-5xl font-bold text-color">{heroProduct?.length > 0 && heroProduct[imgIndex].name}</h1>
          <p className="font-medium">{heroProduct?.length > 0 && heroProduct[imgIndex].short_description}</p>
          <p className="font-medium text-2xl"><b>Price: </b>{heroProduct?.length > 0 && heroProduct[imgIndex].price}</p>
          <Link className='btn btn-success-content'>Buy now</Link>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          freeMode={true}
          centeredSlides={true}
          autoplay={{ disableOnInteraction: false }}
          modules={[FreeMode, Autoplay, Navigation]}
          onSlideChange={(swiper) => handleHeroImage(swiper)}
          className="banner cursor-grab ml-6 mr-6 shadow-xl bg-[#abc0ce6b] "
        >
          {heroProduct?.length > 0 && heroProduct.map((item, ind) => (
            <SwiperSlide key={item.id}><img src={item.image_url} alt="" className={imgIndex === ind ? `opacity-100` : `opacity-20`} /></SwiperSlide>

          ))}
        </Swiper>

        <div className="card bg-base-100 w-1/2 rounded-none">
          <figure><img src={heroProduct?.length > 0 && heroProduct[imgIndex].image_url} alt="Shoes" className='h-[70vh] object-cover' ref={bannerImg} /></figure>
        </div>
      </div>
    </div>
  )
}

export default Hero