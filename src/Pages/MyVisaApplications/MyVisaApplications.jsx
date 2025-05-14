import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegClock, FaRegMoneyBillAlt, FaRegUserCircle } from 'react-icons/fa';

const MyVisaApplications = () => {
  const [visaApplications, setVisaApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApplications, setFilteredApplications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 800 });

    const fetchVisaApplications = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/applied-visa/${user?.email}`
      );
      const data = await response.json();
      setVisaApplications(data);
      setFilteredApplications(data);
    };

    fetchVisaApplications();
  }, [user?.email]);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredApplications(visaApplications);
    } else {
      const filtered = visaApplications.filter(visa =>
        visa.country_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  }, [searchTerm, visaApplications]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };


  const handleCancelApplication = async id => {
    const confirmCancel = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, cancel it!',
    });

    if (!confirmCancel.isConfirmed) return;

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/visa-cancel/${id}`,
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();

    if (result.deletedCount > 0) {
      Swal.fire(
        'Cancelled!',
        'Your application has been cancelled.',
        'success'
      );
    } else {
      Swal.fire('Error!', 'Failed to cancel the application.', 'error');
    }
  };

  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sf6nKww2/3d-travel-icon-with-airplane-1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-6 max-w-6xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6 text-center animate__animated animate__fadeIn">
          My Visa Applications
        </h2>

        {/* Search Input */}
        <div className="mb-4 text-center">
          <input
            type="text"
            placeholder="Search by country name"
            className="p-3 border border-gray-300 rounded-lg w-full md:w-1/2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Visa Applications List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApplications?.map(visa => (
            <div
              key={visa._id}
              className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
            >
              <div className="relative mb-4">
                <img
                  src={visa.country_image}
                  alt={visa.country_name}
                  className="w-full h-40 object-cover rounded-2xl"
                />
                <div className="absolute top-2 right-2 p-2 bg-blue-600 text-white text-xs rounded-full">
                  {visa.visa_type}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {visa.country_name}
              </h3>
              <div className="mt-2">
                <div className="flex items-center text-sm text-gray-600">

                  <FaRegClock className="mr-2" />
                  <span>{visa.processing_time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <FaRegMoneyBillAlt className="mr-2" />
                  <span>{visa.fee}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <FaRegUserCircle className="mr-2" />
                  <span>{visa.host.name}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all"
                  onClick={() => handleCancelApplication(visa._id)}
                >
                  Cancel
                </button>
                <p className="text-xs pl-2 text-gray-500">{visa.applied_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyVisaApplications;
