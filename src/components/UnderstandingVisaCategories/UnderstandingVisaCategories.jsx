import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const visaCategories = [
  {
    title: '🧳 Tourist Visa',
    description:
      'Issued for leisure travel. Valid for short stays, sightseeing, or visiting family/friends.',
    color: 'bg-blue-100',
  },
  {
    title: '🎓 Student Visa',
    description:
      'For individuals pursuing academic studies or training in a foreign country.',
    color: 'bg-green-100',
  },
  {
    title: '💼 Work Visa',
    description:
      'Granted to individuals taking up employment abroad under a specific employer.',
    color: 'bg-yellow-100',
  },
  {
    title: '👨‍👩‍👧 Family/Dependent Visa',
    description:
      'Allows dependents (spouse, children) of primary visa holders to accompany them.',
    color: 'bg-purple-100',
  },
  {
    title: '🩺 Medical Visa',
    description:
      'Permits foreign nationals to travel for medical treatment purposes.',
    color: 'bg-red-100',
  },
  {
    title: '🏛️ Business Visa',
    description:
      'Issued for professional purposes like attending meetings, conferences, or trade events.',
    color: 'bg-indigo-100',
  },
];

const UnderstandingVisaCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-10 lg:px-32">
      <div className="mb-10 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Understanding Visa Categories
        </h1>
        <p className="text-gray-600 text-sm">Published on November 15, 2024</p>
      </div>

      <div
        className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-6"
        data-aos="fade-up"
      >
        <img
          src="https://visaprocedures.com/wp-content/uploads/2024/01/jpeg-optimizer_DALL%C2%B7E-2024-01-25-15.23.59-An-educational-poster-titled-Understanding-Visa-Types-with-various-colorful-icons-representing-different-types-of-visas-like-tourist-student-work.png"
          alt="Visa Categories"
          className="rounded-lg w-full object-cover mb-4"
        />

        <p className="text-gray-700 leading-relaxed">
          There are many types of visas available depending on your purpose of
          travel. Understanding the differences helps ensure you're applying for
          the correct category. Here's a breakdown of the most common visa
          types:
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {visaCategories.map((visa, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`rounded-lg p-6 shadow-md border ${visa.color}`}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {visa.title}
              </h3>
              <p className="text-gray-700 text-sm">{visa.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingVisaCategories;
