import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExpertSupport = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-20 px-4 md:px-12">
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-3">
          Expert Visa Support
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Visa Land provides personalized guidance through every step of your
          visa journey. Our dedicated experts are always ready to assist you
          with documentation, requirements, and queries.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
            alt="1-on-1 Guidance"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center text-indigo-700">
            1-on-1 Visa Guidance
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Get matched with a visa expert who understands your specific visa
            needs and guides you from start to finish.
          </p>
        </div>
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png"
            alt="24/7 Chat"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center text-indigo-700">
            24/7 Live Chat & Email
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Have questions? Our support agents are online 24/7 via live chat and
            email to resolve all your concerns.
          </p>
        </div>
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
            alt="Multilingual"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-center text-indigo-700">
            Multilingual Assistance
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Our team speaks multiple languages to ensure you feel supported in
            your native language.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section
        className="bg-indigo-100 rounded-xl p-6 mb-14"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">
          Reach Our Support Team
        </h2>
        <ul className="text-gray-700 text-lg space-y-3">
          <li>
            <strong>Email:</strong> support@visaland.com
          </li>
          <li>
            <strong>Phone:</strong> +1 (800) 123-4567
          </li>
          <li>
            <strong>Live Chat:</strong> Available 24/7 at the bottom right
            corner
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center" data-aos="zoom-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Need Help with Your Application?
        </h3>
        <p className="text-gray-600 mb-6">
          Let our experts guide you through every detail.
        </p>
        <Link
          to="/add-visa"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg transition"
        >
          Get Support & Apply
        </Link>
      </section>
    </div>
  );
};

export default ExpertSupport;
