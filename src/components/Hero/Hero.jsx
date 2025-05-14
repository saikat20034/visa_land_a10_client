import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Welcome', 'Welcome to', 'Welcome to VisaLand!'],
    loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="rounded-lg">
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
            className="h-[250px] rounded-lg sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover object-top"
            src="https://sunrise-bd.net/upload/service/1800363223397013.jpg"
            alt="VisaLand Slide 1"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-opacity-75 bg-white rounded-lg shadow-lg w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Simplifying your journey with seamless visa solutions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[250px] rounded-lg sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover object-top"
            src="https://media.licdn.com/dms/image/v2/D5612AQHczm0rxEGc8g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693215051019?e=2147483647&v=beta&t=KilHuGPIAaWaYnVC_8wz9D56AGdib9q5LDBCoytOeeo"
            alt="VisaLand Slide 2"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-opacity-75 bg-white rounded-lg shadow-lg w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Your trusted partner for hassle-free visa applications.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            className="h-[250px] rounded-lg sm:h-[350px] md:h-[400px] lg:h-[500px] w-full object-cover object-top"
            src="https://i.postimg.cc/mDH15JNw/3d-travel-icon-with-airplane.jpg"
            alt="VisaLand Slide 3"
          />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-opacity-75 bg-white rounded-lg shadow-lg w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </div>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Your trusted partner for hassle-free visa applications.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
