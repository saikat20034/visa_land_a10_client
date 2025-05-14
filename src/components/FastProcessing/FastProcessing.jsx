import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FastProcessing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen px-6 py-12">
      {/* Hero */}
      <section
        className="max-w-7xl mx-auto text-center mb-12"
        data-aos="fade-up"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Fast Visa Processing
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Visa Land ensures your application is processed quickly, securely, and
          efficiently. Whether it's student, work, or medical visas — we
          expedite your journey.
        </p>
      </section>

      {/* Info Grid */}
      <section
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16"
        data-aos="fade-up"
      >
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3159/3159606.png"
            alt="Digital Submission"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-center text-blue-800 mb-2">
            Digital Submission
          </h3>
          <p className="text-center text-gray-600">
            Apply for your visa through our streamlined online platform—no need
            for paper forms or queues.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2910/2910791.png"
            alt="Real-Time Tracking"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-center text-blue-800 mb-2">
            Real-Time Tracking
          </h3>
          <p className="text-center text-gray-600">
            Stay updated with every step. Track your visa processing status in
            real time with email and SMS updates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216895.png"
            alt="Priority Processing"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold text-center text-blue-800 mb-2">
            Priority Services
          </h3>
          <p className="text-center text-gray-600">
            Need your visa urgently? Our premium Fast Track options ensure
            faster turnaround times.
          </p>
        </div>
      </section>

      {/* Step-by-step timeline */}
      <section className="max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">
          How It Works
        </h2>
        <ol className="relative border-l border-blue-300">
          {[
            {
              title: 'Create Your Account',
              desc: 'Sign up with your email and complete your profile.',
            },
            {
              title: 'Fill Out Visa Application',
              desc: 'Provide your personal, travel, and document details.',
            },
            {
              title: 'Upload Required Documents',
              desc: 'Upload a passport copy, photo, and supporting documents securely.',
            },
            {
              title: 'Select Fast Track Option',
              desc: 'Choose express processing for faster approval.',
            },
            {
              title: 'Make Secure Payment',
              desc: 'Pay via our secure and encrypted payment gateway.',
            },
            {
              title: 'Track Your Visa',
              desc: 'Receive real-time updates and get notified upon approval.',
            },
          ].map((step, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 ring-4 ring-white text-white font-bold">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-blue-800">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section
        className="bg-white py-10 rounded-xl shadow-md max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6 px-4">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">
              "I got my student visa processed in just 3 days with Visa Land.
              The platform is smooth and super intuitive!"
            </p>
            <p className="mt-4 font-bold text-blue-800">
              — Farzana Rahman, Dhaka
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">
              "Their real-time tracking kept me updated throughout. Totally
              stress-free experience!"
            </p>
            <p className="mt-4 font-bold text-blue-800">
              — Rayhan Ahmed, Chittagong
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastProcessing;
