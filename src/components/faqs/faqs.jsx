import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const faqs = [
  {
    question: 'How do I apply for a visa through VisaLand?',
    answer:
      'You can apply by selecting your desired visa from the "All Visas" page and filling out the online application form. Our team will assist you throughout the process.',
  },
  {
    question: 'Can I track my visa application?',
    answer:
      'Yes, you can track your application from your dashboard using the tracking ID provided after submission.',
  },
  {
    question: 'What documents are required for a student visa?',
    answer:
      'Generally, you’ll need an acceptance letter, proof of funds, passport, academic records, and English proficiency scores. Requirements may vary by country.',
  },
  {
    question: 'Is VisaLand a government-affiliated service?',
    answer:
      'No, VisaLand is an independent platform that facilitates visa guidance and processing support in collaboration with certified agents.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-10 px-6 rounded-lg mt-10 bg-gradient-to-r from-blue-50 to-indigo-100"
      id="faq"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-4xl font-extrabold text-indigo-800 mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Find answers to common questions about visa applications and our
          services.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <span className="text-gray-800 font-medium text-base sm:text-lg">
                {faq.question}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-5 pb-5 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
