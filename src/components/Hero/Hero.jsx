import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const Hero = () => {
  const [text] = useTypewriter({
    words: ['WelCome', 'WelCome to', 'WelCome to VisaLand!'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img
            className="h-[500px] w-full object-cover object-top"
            src="https://sunrise-bd.net/upload/service/1800363223397013.jpg"
            alt=""
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-6 bg-opacity-60 bg-white rounded-lg shadow-lg">
            {/* <h2 className="text-4xl font-bold text-blue-900">
              Welcome to Visa Land
            </h2> */}
            <div className="App text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-lg text-gray-700 mt-2">
              Simplifying your journey with seamless visa solutions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[500px] w-full object-cover object-top"
            src="https://media.licdn.com/dms/image/v2/D5612AQHczm0rxEGc8g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693215051019?e=2147483647&v=beta&t=KilHuGPIAaWaYnVC_8wz9D56AGdib9q5LDBCoytOeeo"
            alt=""
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-6 bg-opacity-60 bg-white rounded-lg shadow-lg">
            <div className="App text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-lg text-gray-700 mt-2">
              Your trusted partner for hassle-free visa applications.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[500px] w-full object-cover object-top"
            src="https://i0.wp.com/www.washingtonexpressvisas.com/wp-content/uploads/2022/08/get-visa-for-legal-migration.png?fit=3579%2C1747&ssl=1"
            alt=""
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-6 bg-opacity-60 bg-white rounded-lg shadow-lg">
            <div className="App text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-lg text-gray-700 mt-2">
              Your trusted partner for hassle-free visa applications.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
