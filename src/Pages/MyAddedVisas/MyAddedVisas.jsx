import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyAddedVisas = () => {
  const [visas, setVisas] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const visasPerPage = 8;
  const { user } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const myAddedVisa = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/visa/${user?.email}`
        );
        const data = await response.json();
        setVisas(data);
      } catch (error) {
        console.error('Error fetching visa details:', error);
      }
    };

    if (user?.email) {
      myAddedVisa();
    }
  }, [user?.email]);

  const indexOfLastVisa = currentPage * visasPerPage;
  const indexOfFirstVisa = indexOfLastVisa - visasPerPage;
  const currentVisas = visas?.slice(indexOfFirstVisa, indexOfLastVisa);
  const totalPages = visas ? Math.ceil(visas.length / visasPerPage) : 0;

  const handleUpdate = visa => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVisa(null);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const updatedVisa = {
      country_name: form.country_name.value,
      country_image: form.country_image.value,
      visa_type: form.visa_type.value,
      processing_time: form.processing_time.value,
      fee: form.fee.value,
      validity: form.validity.value,
      application_method: form.application_method.value,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/visa-update/${selectedVisa._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedVisa),
        }
      );
      const data = await response.json();

      if (data.modifiedCount > 0) {
        Swal.fire('Success!', 'Visa updated successfully.', 'success');

        setVisas(prevVisas =>
          prevVisas.map(visa =>
            visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
          )
        );

        handleCloseModal();
      } else {
        Swal.fire('Error!', 'Failed to update visa.', 'error');
      }
    } catch (error) {
      console.error('Error updating visa:', error);
    }
  };

  const handleDelete = async id => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/visa/${id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await response.json();

      if (data.deletedCount > 0) {
        Swal.fire('Deleted!', 'Visa has been deleted.', 'success');
        setVisas(prevVisas => prevVisas.filter(visa => visa._id !== id));
      } else {
        Swal.fire('Error!', 'Failed to delete visa.', 'error');
      }
    } catch (error) {
      console.error('Error deleting visa:', error);
    }
  };

  if (!visas) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (visas.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Please add some data</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl bg-gradient-to-r from-blue-50 to-indigo-100 my-10 rounded-lg mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold lg:font-extrabold text-indigo-800 text-center mb-8">
        My Added Visas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentVisas.map(visa => (
          <div
            key={visa._id}
            className="p-4 border rounded-lg shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 bg-white"
            data-aos="zoom-in-up"
          >
            <img
              src={visa.country_image}
              alt={visa.country_name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{visa.country_name}</h3>
            <p className="text-gray-700">Visa Type: {visa.visa_type}</p>
            <p className="text-gray-700">
              Processing Time: {visa.processing_time} days
            </p>
            <p className="text-gray-700">Fee: ${visa.fee}</p>
            <p className="text-gray-700">Validity: {visa.validity} months</p>
            <p className="text-gray-700">
              Application: {visa.application_method}
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => handleUpdate(visa)}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(visa._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="font-semibold text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && selectedVisa && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h3 className="text-2xl font-bold mb-6">Update Visa</h3>
            <form onSubmit={handleFormSubmit}>
              {[
                ['Country Name', 'country_name'],
                ['Country Image', 'country_image'],
                ['Processing Time', 'processing_time'],
                ['Fee', 'fee'],
                ['Validity', 'validity'],
                ['Application Method', 'application_method'],
              ].map(([label, name]) => (
                <div key={name} className="mb-2">
                  <label className="block text-sm font-medium">{label}</label>
                  <input
                    type="text"
                    name={name}
                    defaultValue={selectedVisa[name]}
                    className="w-full border p-2 rounded"
                  />
                </div>
              ))}
              <div className="mb-2">
                <label className="block text-sm font-medium">Visa Type</label>
                <select
                  name="visa_type"
                  defaultValue={selectedVisa.visa_type}
                  className="w-full border p-2 rounded"
                >
                  <option value="Student Visa">Student Visa</option>
                  <option value="Work Visa">Work Visa</option>
                  <option value="Residential Visa">Residential Visa</option>
                  <option value="Medical Visa">Medical Visa</option>
                  <option value="Startup Visa">Startup Visa</option>
                  <option value="Forest Research Visa">
                    Forest Research Visa
                  </option>
                  <option value="Nomadic Culture Visa">
                    Nomadic Culture Visa
                  </option>
                  <option value="Eco-Tourism Visa">Eco-Tourism Visa</option>
                  <option value="Cultural Exchange Visa">
                    Cultural Exchange Visa
                  </option>
                  <option value="Research Visa">Research Visa</option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Schengen Visa">Schengen Visa</option>
                  <option value="Work Holiday Visa">Work Holiday Visa</option>
                  <option value="Short-Term Business Visa">
                    Short-Term Business Visa
                  </option>
                  <option value="Tourist Visa">Tourist Visa</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
