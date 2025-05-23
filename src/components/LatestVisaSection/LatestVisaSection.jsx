import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VisaCard from '../VisaCard/VisaCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Slide } from 'react-awesome-reveal';

const LatestVisaSection = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/visas?limit=8`
        );
        const data = await response.json();
        setVisas(data);
      } catch (error) {
        console.error('Error fetching visa data:', error);
      }
    };

    fetchVisas();
  }, []);

  if (!visas || visas.length <= 0) return <LoadingSpinner />;

  return (
    <div className="py-10 px-6 rounded-lg mt-10 bg-gradient-to-r from-blue-50 to-indigo-100">
      <p className="text-4xl font-extrabold text-center text-indigo-800 mb-4">
        <Slide triggerOnce>Latest Visas</Slide>
      </p>

      <p className="max-w-3xl mx-auto text-center text-gray-700 text-base md:text-lg leading-relaxed mb-8">
        Discover the most recently added visa opportunities from around the
        world. Stay updated and take the next step in your travel or immigration
        journey with the latest listings on VisaLand.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.slice(0, 8).map(visa => (
          <VisaCard visa={visa} key={visa._id} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/all-visas"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisaSection;
