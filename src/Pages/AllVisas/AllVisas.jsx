import React, { useEffect, useState } from 'react';
import VisaCard from '../../components/VisaCard/VisaCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AllVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/visas`);
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
    <div className="py-12 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100">
      <h3 className="text-3xl font-semibold text-center text-blue-900 mb-8">
        All Available Visas
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {visas.map(visa => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
