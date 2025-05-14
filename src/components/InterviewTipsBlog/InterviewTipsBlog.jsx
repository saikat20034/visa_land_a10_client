import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const InterviewTipsBlog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const tips = [
    '📌 Be punctual – arrive at least 15 minutes early.',
    '📌 Dress professionally – first impressions matter.',
    '📌 Bring all necessary documents in a neat file.',
    '📌 Practice commonly asked questions ahead of time.',
    '📌 Answer honestly – be truthful and consistent.',
    '📌 Show confidence but remain respectful.',
    '📌 Know your purpose of visit clearly.',
    '📌 Maintain good posture and eye contact.',
    '📌 Avoid unnecessary information – be concise.',
    '📌 Smile and thank the officer after the interview.',
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-10 lg:px-32">
      <div data-aos="fade-down" className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Top 10 Tips for Your Visa Interview
        </h1>
        <p className="text-gray-600 text-sm">Published on November 28, 2024</p>
      </div>

      <div
        className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-6"
        data-aos="fade-up"
      >
        <img
          src="https://themigrationbureau.com/wp-content/uploads/2024/03/TMB-Blog-Minimum-salary-3-1110x630.png"
          alt="Visa Interview Tips"
          className="rounded-lg w-full object-cover mb-4"
        />

        <p className="text-gray-700 leading-relaxed">
          Visa interviews are often the final step before approval. Proper
          preparation can significantly increase your chances of success. Here
          are the top 10 tips to help you nail your visa interview with
          confidence and clarity:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-800 font-medium">
          {tips.map((tip, idx) => (
            <li key={idx} data-aos="fade-right" data-aos-delay={idx * 100}>
              {tip}
            </li>
          ))}
        </ul>

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

export default InterviewTipsBlog;
