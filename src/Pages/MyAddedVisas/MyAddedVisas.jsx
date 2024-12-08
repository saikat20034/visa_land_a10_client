import { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const MyAddedVisas = () => {
  const [visas, setVisas] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const { user } = useAuth();

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

    myAddedVisa();
  }, [user?.email]);

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
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedVisa),
        }
      );
      const data = await response.json();

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Visa updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Update the state without reloading the page
        setVisas(prevVisas =>
          prevVisas.map(visa =>
            visa._id === selectedVisa._id ? { ...visa, ...updatedVisa } : visa
          )
        );

        handleCloseModal();
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to update visa. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
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

        // Remove the deleted visa from the state
        setVisas(prevVisas => prevVisas.filter(visa => visa._id !== id));
      } else {
        Swal.fire('Error!', 'Failed to delete the visa.', 'error');
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
  } else if (visas.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Please add some data</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl my-10 rounded-lg mx-auto bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          My Added Visas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visas.map(visa => (
            <div
              key={visa._id}
              className="p-4 border rounded-lg shadow-xl transition-transform duration-500 transform hover:scale-105 bg-white"
              data-aos="fade-up"
            >
              <img
                src={visa.country_image}
                alt={visa.country_name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {visa.country_name}
              </h3>
              <p className="text-gray-600">Visa Type: {visa.visa_type}</p>
              <p className="text-gray-600">
                Processing Time: {visa.processing_time} days
              </p>
              <p className="text-gray-600">Fee: ${visa.fee}</p>
              <p className="text-gray-600">Validity: {visa.validity} months</p>
              <p className="text-gray-600">
                Application Method: {visa.application_method}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={() => handleUpdate(visa)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  onClick={() => handleDelete(visa._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedVisa && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-96">
              <h3 className="text-2xl font-bold mb-6">Update Visa</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-2">
                  <label className="block text-sm font-medium">
                    Country Name
                  </label>
                  <input
                    type="text"
                    name="country_name"
                    defaultValue={selectedVisa.country_name}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">
                    Country Image
                  </label>
                  <input
                    type="text"
                    name="country_image"
                    defaultValue={selectedVisa.country_image}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">Visa Type</label>
                  <select
                    name="visa_type"
                    defaultValue={selectedVisa.visa_type}
                    className="w-full border p-2 rounded"
                  >
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Official Visa">Official Visa</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">
                    Processing Time
                  </label>
                  <input
                    type="text"
                    name="processing_time"
                    defaultValue={selectedVisa.processing_time}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">Fee</label>
                  <input
                    type="text"
                    name="fee"
                    defaultValue={selectedVisa.fee}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">Validity</label>
                  <input
                    type="text"
                    name="validity"
                    defaultValue={selectedVisa.validity}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-medium">
                    Application Method
                  </label>
                  <input
                    type="text"
                    name="application_method"
                    defaultValue={selectedVisa.application_method}
                    className="w-full border p-2 rounded"
                  />
                </div>
                <div className="flex justify-end space-x-2 mt-4">
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
    </div>
  );
};

export default MyAddedVisas;
