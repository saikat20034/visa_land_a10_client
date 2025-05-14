import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const UnitedStatesVisa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-10 lg:px-32">
      <div className="mb-10 text-center" data-aos="fade-down">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          United States Visa Guide
        </h1>
        <p className="text-gray-600 text-sm">Published on May 14, 2025</p>
      </div>

      <div
        className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-6"
        data-aos="fade-up"
      >
        <img
          src="https://www.uscis.gov/sites/default/files/document/news-graphics/visa_banner.jpg"
          alt="US Visa"
          className="rounded-lg w-full object-cover mb-4"
        />

        <p className="text-gray-700 leading-relaxed text-lg">
          The United States offers a variety of visa categories for travelers,
          students, workers, and immigrants. Whether you're visiting for tourism
          or planning to study or work, understanding the right visa type is
          critical.
        </p>

        <h2
          className="text-2xl font-bold text-blue-700 mt-6"
          data-aos="fade-right"
        >
          🇺🇸 Common US Visa Types
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>
            <strong>B1/B2 Visitor Visa:</strong> For tourism, medical treatment,
            or business visits.
          </li>
          <li>
            <strong>F1 Student Visa:</strong> For full-time academic studies.
          </li>
          <li>
            <strong>H1-B Work Visa:</strong> For skilled professionals with a
            US-based employer.
          </li>
          <li>
            <strong>K1 Fiancé Visa:</strong> For individuals engaged to a U.S.
            citizen.
          </li>
          <li>
            <strong>Green Card (Immigrant Visa):</strong> For permanent
            residency.
          </li>
        </ul>

        <h2
          className="text-2xl font-bold text-blue-700 mt-6"
          data-aos="fade-right"
        >
          📋 Application Process
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          <li>Determine the appropriate visa type.</li>
          <li>Complete the DS-160 online application form.</li>
          <li>Pay the visa application fee.</li>
          <li>
            Schedule a visa interview at the nearest U.S. Embassy or Consulate.
          </li>
          <li>Attend the interview with required documents.</li>
          <li>Wait for visa processing and approval.</li>
        </ol>

        <h2
          className="text-2xl font-bold text-blue-700 mt-6"
          data-aos="fade-right"
        >
          🗂️ Required Documents
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Valid Passport</li>
          <li>DS-160 Confirmation Page</li>
          <li>Visa Appointment Letter</li>
          <li>Visa Fee Payment Receipt</li>
          <li>Photographs (as per US visa photo requirements)</li>
          <li>Additional documents (varies by visa type)</li>
        </ul>

        <h2
          className="text-2xl font-bold text-blue-700 mt-6"
          data-aos="fade-right"
        >
          💡 Tips for Approval
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Be honest and confident during your visa interview.</li>
          <li>
            Prepare clear documentation proving your purpose and intent to
            return.
          </li>
          <li>Ensure all forms are filled accurately.</li>
        </ul>

        <div className="mt-8 text-right">
          <Link
            to="/all-visas"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ← Back to All Visas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitedStatesVisa;
