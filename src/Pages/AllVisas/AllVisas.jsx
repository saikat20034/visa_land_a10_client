import React, { useEffect, useState } from 'react';
import VisaCard from '../../components/VisaCard/VisaCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedType, setSelectedType] = useState('');
 console.log(filteredVisas)
  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/visas`);
        const data = await response.json();
        setVisas(data);
        setFilteredVisas(data); // Initially, show all visas
      } catch (error) {
        console.error('Error fetching visa data:', error);
      }
    };

    fetchVisas();
  }, []);

  const handleFilterChange = e => {
    const type = e.target.value;
    setSelectedType(type);

    if (type === '') {
      // Show all visas if no type is selected
      setFilteredVisas(visas);
    } else {
      const filtered = visas.filter(visa => visa['visa_type'] === type); // Filter by 'Visa Type' field
      setFilteredVisas(filtered);
    }
  };

  if (!filteredVisas || filteredVisas.length <= 0) return <LoadingSpinner />;

  return (
    <div className="py-12 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100">
      <h3 className="text-3xl font-semibold text-center text-blue-900 mb-8">
        All Available Visas
      </h3>

      {/* Dropdown for filtering by Visa Type */}
      <div className="mb-8 text-center">
        <select
          value={selectedType}
          onChange={handleFilterChange}
          className="p-2 border border-blue-500 rounded"
        >
          <option value="">Select Visa Type</option>
          <option value="Student Visa">Student visa</option>
          <option value="Work Visa">Work visa</option>
          <option value="Residential Visa">Residential visa</option>
          <option value="Tourist Visa">Tourist visa</option>
         
        </select>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredVisas.map(visa => (
          <VisaCard key={visa._id} visa={visa} />
        ))}
      </div>
    </div>
  );
};

export default AllVisas;
