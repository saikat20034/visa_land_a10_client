import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CanadaVisa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center mb-12" data-aos="fade-down">
        <img
          src="https://cdn.vectorstock.com/i/500p/57/98/flag-canada-vector-33145798.jpg"
          alt="Canada Flag"
          className="mx-auto w-32 h-20 mb-4"
        />
        <h1 className="text-4xl font-bold text-red-700">
          Canada Visa Information
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Discover everything you need to know about visiting, studying, or
          working in Canada.
        </p>
      </section>

      {/* Visa Categories */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            Visitor Visa
          </h2>
          <p className="text-gray-600">
            For tourism, family visits, or short business trips. Key
            requirements include:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Valid passport and return ticket</li>
            <li>Proof of funds and ties to home country</li>
            <li>No criminal record</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            Study Permit
          </h2>
          <p className="text-gray-600">
            For international students accepted by a Canadian institution.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Letter of Acceptance</li>
            <li>Proof of funds and tuition payment</li>
            <li>Medical and police certificates</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            Work Permit
          </h2>
          <p className="text-gray-600">
            Work temporarily in Canada with an employer-specific or open permit.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Job offer or LMIA (if required)</li>
            <li>Proof of qualifications</li>
            <li>Health and background checks</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-red-700 mb-2">
            Permanent Residency
          </h2>
          <p className="text-gray-600">
            Pathways to live in Canada permanently through Express Entry, family
            sponsorship, and more.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Express Entry: Skilled Worker Program</li>
            <li>Provincial Nominee Program (PNP)</li>
            <li>Spousal or family sponsorship</li>
          </ul>
        </div>
      </section>

      {/* Application Tips */}
      <section className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Application Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Double-check document checklists on the official IRCC website.
          </li>
        
          <li>Provide detailed and honest answers in forms.</li>
          <li>Apply well in advance of your planned travel date.</li>
        </ul>
      </section>
    </div>
  );
};

export default CanadaVisa;
