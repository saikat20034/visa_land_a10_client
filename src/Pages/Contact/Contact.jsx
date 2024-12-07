import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Hero Section */}
      <section className="text-center py-16 px-4" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          We're here to help! Reach out to us with your questions, feedback, or
          concerns.
        </p>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 py-12 max-w-6xl mx-auto">
        <div
          className="bg-white text-black rounded-lg p-8 shadow-lg flex flex-col items-center"
          data-aos="fade-right"
        >
          <FaPhoneAlt className="text-4xl text-indigo-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p>+1 123 456 7890</p>
          <p>+1 987 654 3210</p>
        </div>
        <div
          className="bg-white text-black rounded-lg p-8 shadow-lg flex flex-col items-center"
          data-aos="fade-up"
        >
          <FaEnvelope className="text-4xl text-purple-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p>contact@example.com</p>
          <p>support@example.com</p>
        </div>
        <div
          className="bg-white text-black rounded-lg p-8 shadow-lg flex flex-col items-center"
          data-aos="fade-left"
        >
          <FaMapMarkerAlt className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Address</h3>
          <p>123 Business Ave</p>
          <p>Cityville, ST, 12345</p>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="bg-white text-black rounded-lg shadow-lg max-w-4xl mx-auto p-8 md:p-12"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-indigo-700">
          Drop Us a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:ring focus:ring-purple-500 focus:border-purple-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter the subject"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-purple-500 focus:border-purple-500"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-200"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
