import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AustraliaVisa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center mb-12" data-aos="fade-down">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png"
          alt="Australia Flag"
          className="mx-auto w-32 h-20 mb-4"
        />
        <h1 className="text-4xl font-bold text-indigo-700">
          Australia Visa Information
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Discover everything you need to know about visiting, studying, or
          working in Australia.
        </p>
      </section>

      {/* Visa Categories */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Visitor Visa
          </h2>
          <p className="text-gray-600">
            For short tourism, family visits, or business trips.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Valid passport and travel history</li>
            <li>Proof of funds and accommodation</li>
            <li>No criminal convictions</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Student Visa (Subclass 500)
          </h2>
          <p className="text-gray-600">
            For students enrolling in Australian education institutions.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>CoE from a registered provider</li>
            <li>Financial capacity and health insurance</li>
            <li>Genuine Temporary Entrant (GTE) requirement</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Work Visa (Subclass 482, 186, etc.)
          </h2>
          <p className="text-gray-600">
            For skilled workers sponsored by Australian employers.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Skill assessment and job offer</li>
            <li>Work experience in nominated occupation</li>
            <li>English language proficiency</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
            Permanent Residency (PR)
          </h2>
          <p className="text-gray-600">
            Settle in Australia through skilled migration, employer nomination,
            or family sponsorship.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Points-tested system (Subclass 189, 190)</li>
            <li>Employer Nomination Scheme (ENS)</li>
            <li>Family or partner migration streams</li>
          </ul>
        </div>
      </section>

      {/* Application Tips */}
      <section className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Application Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Submit certified copies of all documents.</li>
          <li>
            Check the latest visa updates on{' '}
            <a
              href="https://immi.homeaffairs.gov.au"
              className="text-blue-600 underline"
              target="_blank"
              rel="noreferrer"
            >
              official website
            </a>
            .
          </li>
          <li>
            Be honest in your application—Australian immigration is strict on
            fraud.
          </li>
          <li>Apply early—some visas take months to process.</li>
        </ul>
      </section>
    </div>
  );
};

export default AustraliaVisa;
