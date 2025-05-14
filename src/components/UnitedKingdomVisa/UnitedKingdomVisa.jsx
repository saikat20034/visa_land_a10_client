import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UnitedKingdomVisa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <section className="text-center mb-12" data-aos="fade-down">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
          alt="UK Flag"
          className="mx-auto w-32 h-20 mb-4"
        />
        <h1 className="text-4xl font-bold text-indigo-800">
          United Kingdom Visa Information
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Navigate your UK visa process with ease. Explore visa types,
          requirements, and expert tips for success.
        </p>
      </section>

      {/* Visa Categories */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Student Visa
          </h2>
          <p className="text-gray-600">
            Apply to study at recognized UK institutions. Requirements include:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Confirmation of Acceptance for Studies (CAS)</li>
            <li>English proficiency proof (IELTS/TOEFL)</li>
            <li>Proof of financial support</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Tourist Visa
          </h2>
          <p className="text-gray-600">
            Visit the UK for tourism, family visits, or short business
            activities.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Valid passport and travel history</li>
            <li>Itinerary and accommodation details</li>
            <li>Proof of return or onward travel</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Work Visa
          </h2>
          <p className="text-gray-600">
            Skilled professionals can apply for a UK work visa if sponsored by a
            licensed employer.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Job offer from UK employer</li>
            <li>Certificate of Sponsorship</li>
            <li>Meet salary and skill requirements</li>
          </ul>
        </div>

        <div
          className="bg-white p-6 rounded-lg shadow-md"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Dependent & Family Visa
          </h2>
          <p className="text-gray-600">
            Bring your dependents or join family members living in the UK.
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Proof of relationship</li>
            <li>Financial support documents</li>
            <li>Valid visa status of the main applicant</li>
          </ul>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">
          Application Tips
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Always apply early to avoid delays.</li>
          <li>Double-check documents before submitting.</li>
          <li>Be honest during the interview process.</li>
          <li>Use certified translations for non-English documents.</li>
        </ul>
      </section>
    </div>
  );
};

export default UnitedKingdomVisa;
