import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SimplifyingVisaApplications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-14" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4">
          Simplifying Visa Applications
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          At Visa Land, we streamline the complex visa process with
          user-friendly tools, expert help, and secure systems—making your
          international journey smoother than ever.
        </p>
      </div>

      {/* Step-by-step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920253.png"
            alt="Fill Application"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            1. Fill Your Application
          </h3>
          <p className="text-gray-600">
            Complete a simple and smart form. No confusion, just straightforward
            questions.
          </p>
        </div>

        {/* Step 2 */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4089/4089791.png"
            alt="Upload Docs"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            2. Upload Documents
          </h3>
          <p className="text-gray-600">
            Upload only the necessary documents. We'll validate them instantly
            to save time.
          </p>
        </div>

        {/* Step 3 */}
        <div
          className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3602/3602123.png"
            alt="Get Visa"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-indigo-700 mb-2">
            3. Get Your Visa
          </h3>
          <p className="text-gray-600">
            Sit back and relax. Track your application and receive your visa
            digitally.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl px-8 py-10"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 text-center">
          Why Choose Visa Land?
        </h2>
        <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside">
          <li>✅ Intuitive, mobile-first visa application process</li>
          <li>✅ Real-time application tracking</li>
          <li>✅ Secure document uploads and payment</li>
          <li>✅ Human + AI support available 24/7</li>
          <li>✅ Trusted by thousands of travelers globally</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16" data-aos="fade-up">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Ready to Begin?
        </h3>
        <p className="text-gray-600 mb-6">
          Start your visa journey with confidence. We’re here to make it easy.
        </p>
        <Link
          to="/add-visa"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default SimplifyingVisaApplications;
