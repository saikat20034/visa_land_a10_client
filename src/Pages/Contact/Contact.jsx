import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen mt-10 rounded-lg bg-gradient-to-br from-indigo-100 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Contact Information Panel */}
        <div data-aos="fade-right">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Have any questions? We’d love to hear from you. Send us a message
            and we’ll respond as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-2xl text-indigo-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">+1 123 456 7890</p>
                <p className="text-gray-600">+1 987 654 3210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-2xl text-purple-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@example.com</p>
                <p className="text-gray-600">support@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkedAlt className="text-2xl text-pink-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">123 Business Ave</p>
                <p className="text-gray-600">Cityville, ST 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
            Send a Message
          </h3>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your email"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Subject of your message"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
