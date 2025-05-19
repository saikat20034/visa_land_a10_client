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
    <div className="w-full">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-top"
            src="https://i.postimg.cc/KcQY3DR5/1800363223397013.jpg"
            alt="VisaLand Slide 1"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-white bg-opacity-80 rounded-lg shadow-md w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Simplifying your journey with seamless visa solutions.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-top"
            src="https://i.postimg.cc/rspMN7KN/image.png"
            alt="VisaLand Slide 2"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-white bg-opacity-80 rounded-lg shadow-md w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Your trusted partner for hassle-free visa applications.
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover object-top"
            src="https://i.postimg.cc/mDH15JNw/3d-travel-icon-with-airplane.jpg"
            alt="VisaLand Slide 3"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center p-4 sm:p-6 bg-white bg-opacity-80 rounded-lg shadow-md w-[90%] sm:w-[75%] md:w-[60%] lg:w-[50%]">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <span>{text}</span>
              <Cursor cursorColor="red" />
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2">
              Unlock Your Global Adventures.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
