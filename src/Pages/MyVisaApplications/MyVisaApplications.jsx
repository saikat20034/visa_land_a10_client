import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const MyVisaApplications = () => {
  const [visaApplications, setVisaApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input
  const [filteredApplications, setFilteredApplications] = useState([]); // State for filtered applications
  const { user } = useAuth();

  useEffect(() => {
    const fetchVisaApplications = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/applied-visa/${user?.email}`
      );
      const data = await response.json();
      setVisaApplications(data);
      setFilteredApplications(data); // Initially show all applications
    };

    fetchVisaApplications();
  }, [user?.email]);

  useEffect(() => {
    // Filter visa applications based on the search term
    if (searchTerm === '') {
      setFilteredApplications(visaApplications);
    } else {
      const filtered = visaApplications.filter(visa =>
        visa.country_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApplications(filtered);
    }
  }, [searchTerm, visaApplications]);

  const handleCancelApplication = async id => {
    console.log(id);
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
    setSearchTerm(e.target.value); // Update the search term when the user types
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My Visa Applications</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by country name"
          className="p-2 border rounded-lg w-full md:w-1/2"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Visa Applications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApplications?.map(visa => (
          <div key={visa._id} className="p-4 border rounded-lg shadow-md">
            <img
              src={visa.country_image}
              alt={visa.country_name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{visa.country_name}</h3>
            <p>Visa Type: {visa.visa_type}</p>
            <p>Processing Time: {visa.processing_time}</p>
            <p>Fee: {visa.fee}</p>
            <p>Validity: {visa.validity}</p>
            <p>Application Method: {visa.application_method}</p>
            <p>Applied Date: {visa.applied_date}</p>
            <p>Applicant: {visa.host.name}</p>
            <p>Email: {visa.host.email}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleCancelApplication(visa._id)}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplications;
