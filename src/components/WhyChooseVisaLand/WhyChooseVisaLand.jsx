import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const WhyChooseVisaLand = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleCardClick = path => {
    navigate(path);
  };

  return (
    <div className="py-12 rounded-lg my-10 px-6 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h3 className="text-4xl font-extrabold text-center text-indigo-800 mb-8">
        Why Choose Visa Land?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Fast Processing */}
        <div
          onClick={() => handleCardClick('/fast-processing')}
          className="cursor-pointer flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-blue-300"
          data-aos="fade-up"
        >
          <img
            src="https://img.freepik.com/premium-vector/fast-processing-flat-vector-icon_9206-414.jpg"
            alt="Fast Processing"
            className="w-20 h-20 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-gray-800 text-lg font-medium">
            <strong className="text-indigo-600">Fast Processing:</strong> Get
            your visa application processed quickly and efficiently.
          </p>
        </div>

        {/* Secure Payment */}
        <div
          onClick={() => handleCardClick('/secure-payment')}
          className="cursor-pointer flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-purple-300"
          data-aos="fade-up"
        >
          <img
            src="https://www.keyivr.com/wp-content/uploads/2024/02/Payment-IVR-Pass-Off-Mobile-Step-5.png"
            alt="Secure Payment"
            className="w-20 h-20 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-gray-800 text-lg font-medium">
            <strong className="text-indigo-600">Secure Payment:</strong> Make
            payments with confidence through secure channels.
          </p>
        </div>

        {/* Expert Support */}
        <div
          onClick={() => handleCardClick('/expert-support')}
          className="cursor-pointer flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-pink-300"
          data-aos="fade-up"
        >
          <img
            src="https://fouladbast.com/wp-content/uploads/2023/11/diagram_customer_support.png"
            alt="Expert Support"
            className="w-20 h-20 mb-4 transform transition-transform duration-300 hover:scale-110"
          />
          <p className="text-gray-800 text-lg font-medium">
            <strong className="text-indigo-600">Expert Support:</strong> Our
            team of experts is here to guide you through the process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseVisaLand;
