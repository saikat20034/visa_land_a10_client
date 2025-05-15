import React, { useEffect, useState } from 'react';
import VisaCard from '../../components/VisaCard/VisaCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllVisas = () => {
  const [visas, setVisas] = useState([]);
  const [filteredVisas, setFilteredVisas] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [sortByValidity, setSortByValidity] = useState('');
  const [sortByFee, setSortByFee] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const visasPerPage = 8;

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const fetchVisas = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/visas`);
        const data = await response.json();
        setVisas(data);
        setFilteredVisas(data);
      } catch (error) {
        console.error('Error fetching visa data:', error);
      }
    };

    fetchVisas();
  }, []);

  const sortVisas = (visaArray, validitySort, feeSort) => {
    let sorted = [...visaArray];

    if (validitySort === 'asc') {
      sorted.sort((a, b) => Number(a.validity) - Number(b.validity));
    } else if (validitySort === 'desc') {
      sorted.sort((a, b) => Number(b.validity) - Number(a.validity));
    }

    if (feeSort === 'asc') {
      sorted.sort((a, b) => Number(a.fee || 0) - Number(b.fee || 0));
    } else if (feeSort === 'desc') {
      sorted.sort((a, b) => Number(b.fee || 0) - Number(a.fee || 0));
    }

    return sorted;
  };

  const handleFilterChange = e => {
    const type = e.target.value;
    setSelectedType(type);
    setCurrentPage(1);

    const updated =
      type === '' ? visas : visas.filter(visa => visa.visa_type === type);
    const sorted = sortVisas(updated, sortByValidity, sortByFee);
    setFilteredVisas(sorted);
  };

  const handleValiditySortChange = e => {
    const sortType = e.target.value;
    setSortByValidity(sortType);

    const updated =
      selectedType === ''
        ? visas
        : visas.filter(visa => visa.visa_type === selectedType);
    const sorted = sortVisas(updated, sortType, sortByFee);
    setFilteredVisas(sorted);
  };

  const handleFeeSortChange = e => {
    const sortType = e.target.value;
    setSortByFee(sortType);

    const updated =
      selectedType === ''
        ? visas
        : visas.filter(visa => visa.visa_type === selectedType);
    const sorted = sortVisas(updated, sortByValidity, sortType);
    setFilteredVisas(sorted);
  };

  // Reset all filters and sorting
  const handleReset = () => {
    setSelectedType('');
    setSortByValidity('');
    setSortByFee('');
    setFilteredVisas(visas);
    setCurrentPage(1);
  };

  const indexOfLastVisa = currentPage * visasPerPage;
  const indexOfFirstVisa = indexOfLastVisa - visasPerPage;
  const currentVisas = filteredVisas.slice(indexOfFirstVisa, indexOfLastVisa);
  const totalPages = Math.ceil(filteredVisas.length / visasPerPage);

  if (!filteredVisas || filteredVisas.length <= 0) return <LoadingSpinner />;

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h3 className="text-3xl font-semibold text-center text-blue-900 mb-10">
        All Available Visas
      </h3>

      {/* Filter & Sort */}
      <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
        <select
          value={selectedType}
          onChange={handleFilterChange}
          className="p-2 border border-blue-500 rounded focus:outline-none"
        >
          <option value="">Select Visa Type</option>
          {[
            'Student Visa',
            'Work Visa',
            'Residential Visa',
            'Medical Visa',
            'Startup Visa',
            'Forest Research Visa',
            'Nomadic Culture Visa',
            'Eco-Tourism Visa',
            'Cultural Exchange Visa',
            'Research Visa',
            'Business Visa',
            'Schengen Visa',
            'Work Holiday Visa',
            'Short-Term Business Visa',
            'Tourist Visa',
          ].map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={sortByValidity}
          onChange={handleValiditySortChange}
          className="p-2 border border-blue-500 rounded focus:outline-none"
        >
          <option value="">Sort by Validity</option>
          <option value="asc">Validity: Low to High</option>
          <option value="desc">Validity: High to Low</option>
        </select>

        <select
          value={sortByFee}
          onChange={handleFeeSortChange}
          className="p-2 border border-blue-500 rounded focus:outline-none"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset Filters
        </button>
      </div>

      {/* Visa Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVisas.map(visa => (
          <div key={visa._id} data-aos="fade-up">
            <VisaCard visa={visa} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-blue-800 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllVisas;
