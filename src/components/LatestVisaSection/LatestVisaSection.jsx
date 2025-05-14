import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import VisaCard from '../VisaCard/VisaCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Slide } from 'react-awesome-reveal';

const LatestVisaSection = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/all-visas`
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
      <p className="text-4xl font-bold text-center text-indigo-800 mb-6">
        <Slide triggerOnce>Latest Visas</Slide>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {visas.map(visa => (
          <VisaCard visa={visa} key={visa._id} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/all-visas"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisaSection;
