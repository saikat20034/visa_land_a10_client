import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SecurePayment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-20 px-4 md:px-12">
      {/* Page Header */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-3">
          Secure Payments
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At Visa Land, your financial safety is our priority. We use the latest
          encryption and fraud prevention technologies to ensure your payments
          are secure and seamless.
        </p>
      </section>

      {/* Security Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/484/484167.png"
            alt="SSL Encryption"
            className="w-16 h-16 mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold text-center text-blue-700">
            256-bit SSL Encryption
          </h3>
          <p className="text-center text-gray-600 mt-2">
            All data is transmitted securely using modern HTTPS protocols and
            strong encryption.
          </p>
        </div>
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png"
            alt="PCI Compliant"
            className="w-16 h-16 mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold text-center text-blue-700">
            PCI-DSS Compliant
          </h3>
          <p className="text-center text-gray-600 mt-2">
            We follow global standards to ensure your cardholder information is
            processed safely.
          </p>
        </div>
        <div
          className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Fraud Protection"
            className="w-16 h-16 mb-4 mx-auto"
          />
          <h3 className="text-xl font-semibold text-center text-blue-700">
            Fraud Detection
          </h3>
          <p className="text-center text-gray-600 mt-2">
            Advanced fraud monitoring systems automatically detect suspicious
            transactions.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          We Accept
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
            alt="Visa"
            className="w-16 h-16"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
            alt="MasterCard"
            className="w-16 h-16"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/888/888870.png"
            alt="PayPal"
            className="w-16 h-16"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
            alt="AMEX"
            className="w-16 h-16"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/825/825454.png"
            alt="Stripe"
            className="w-16 h-16"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center" data-aos="zoom-in">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Ready to apply for your visa?
        </h3>
        <p className="text-gray-600 mb-6">
          Make secure payments and track your application with ease.
        </p>
        <Link
          to="/add-visa"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
};

export default SecurePayment;
