import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';

const Profile = () => {
  const { user } = useAuth();
  const [visas, setVisas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const visasPerPage = 5;

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/visa/${user.email}`)
        .then(res => res.json())
        .then(data => setVisas(data))
        .catch(err => console.error('Error fetching visas:', err));
    }
  }, [user?.email]);

  const indexOfLastVisa = currentPage * visasPerPage;
  const indexOfFirstVisa = indexOfLastVisa - visasPerPage;
  const currentVisas = visas.slice(indexOfFirstVisa, indexOfLastVisa);
  const totalPages = Math.ceil(visas.length / visasPerPage);

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
        setVisas(prev => prev.filter(v => v._id !== id));
      }
    } catch (error) {
      console.error('Error deleting visa:', error);
    }
  };

  const handleUpdate = visa => {
    setSelectedVisa(visa);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedVisa(null);
    setIsModalOpen(false);
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
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/visa-update/${selectedVisa._id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedVisa),
        }
      );

      const data = await res.json();
      if (data.modifiedCount > 0) {
        Swal.fire('Updated!', 'Visa updated successfully.', 'success');
        setVisas(prev =>
          prev.map(v =>
            v._id === selectedVisa._id ? { ...v, ...updatedVisa } : v
          )
        );
        handleCloseModal();
      }
    } catch (err) {
      console.error('Error updating visa:', err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-br from-indigo-100 via-blue-50 to-white min-h-screen">
      {/* Profile Header */}
      <motion.div
        className="mb-10 flex items-center gap-6 flex-wrap justify-between"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4">
          <img
            src={user?.photoURL || '/default-user.png'}
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-indigo-500 shadow-md object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-indigo-700">
              {user?.displayName || 'User'}
            </h1>
            <p className="text-gray-600">{user?.email}</p>
            <p className="text-sm text-indigo-500 mt-1">
              Account since: {user?.metadata?.creationTime?.split(',')[0]}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Visas Section */}
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">
        My Added Visas
      </h2>

      {visas.length === 0 ? (
        <p className="text-gray-600">You haven't added any visas yet.</p>
      ) : (
        <>
          <motion.div
            className="overflow-x-auto rounded-lg shadow-lg border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <table className="min-w-full hidden md:table text-sm text-center">
              <thead className="text-black bg-indigo-100">
                <tr>
                  {[
                    'Country',
                    'Visa Type',
                    'Processing',
                    'Fee',
                    'Validity',
                    'Method',
                    'Actions',
                  ].map((t, i) => (
                    <th key={i} className="p-3 border font-semibold">
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentVisas.map(visa => (
                  <tr key={visa._id} className="border-b hover:bg-indigo-50">
                    <td className="p-2 border">{visa.country_name}</td>
                    <td className="p-2 border">{visa.visa_type}</td>
                    <td className="p-2 border">{visa.processing_time} days</td>
                    <td className="p-2 border">${visa.fee}</td>
                    <td className="p-2 border">{visa.validity} days</td>
                    <td className="p-2 border">{visa.application_method}</td>
                    <td className="p-2 border space-x-2">
                      <button
                        onClick={() => handleUpdate(visa)}
                        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(visa._id)}
                        className="px-3 py-1 rounded bg-red-600 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {currentVisas.map(visa => (
                <div
                  key={visa._id}
                  className="bg-white p-4 rounded-lg shadow border space-y-1"
                >
                  <h3 className="text-lg font-semibold text-indigo-700">
                    {visa.country_name}
                  </h3>
                  <p>Type: {visa.visa_type}</p>
                  <p>Processing: {visa.processing_time} days</p>
                  <p>Fee: ${visa.fee}</p>
                  <p>Validity: {visa.validity} days</p>
                  <p>Method: {visa.application_method}</p>
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      onClick={() => handleUpdate(visa)}
                      className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(visa._id)}
                      className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-indigo-100 rounded hover:bg-indigo-200 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-indigo-600 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-indigo-100 rounded hover:bg-indigo-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {isModalOpen && selectedVisa && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Update Visa
              </h3>
              <form onSubmit={handleFormSubmit}>
                {/* Form inputs... (unchanged) */}
                {/* Reuse your existing form inputs here */}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
