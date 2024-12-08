import React, { useState } from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { getNames } from 'country-list';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddVisa = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Fetch country names dynamically
  const countries = getNames().map(country => ({
    value: country,
    label: country,
  }));

  const handleAddVisa = e => {
    e.preventDefault();
    const form = e.target;

    const country_image = form.country_image.value;
    const visa_type = form.visa_type.value;
    const processing_time = form.processing_time.value;
    const required_documents = Array.from(form.required_documents)
      .filter(input => input.checked)
      .map(input => input.value);
    const description = form.description.value;
    const age_restriction = form.age_restriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const application_method = form.application_method.value;

    if (!selectedCountry) {
      Swal.fire({
        title: 'Error!',
        text: 'Please select a country.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    const newVisa = {
      country_name: selectedCountry.value,
      country_image,
      visa_type,
      processing_time,
      required_documents,
      description,
      age_restriction,
      fee,
      validity,
      application_method,
      host: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    fetch(`${import.meta.env.VITE_API_URL}/visas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVisa),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          navigate('/all-visas');
          Swal.fire({
            title: 'Success!',
            text: 'Visa has been added successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          form.reset();
          setSelectedCountry(null);
        }
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-white text-center mb-8">
        Add a New Visa
      </h2>
      <form
        onSubmit={handleAddVisa}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
      >
        {/* Country Name (Dropdown) */}
        <div className="mb-4">
          <label
            htmlFor="country_name"
            className="block text-lg font-medium text-gray-800"
          >
            Country Name
          </label>
          <Select
            options={countries}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="Select a country"
            className="w-full"
          />
        </div>

        {/* Country Image URL */}
        <div className="mb-4">
          <label
            htmlFor="country_image"
            className="block text-lg font-medium text-gray-800"
          >
            Country Image URL
          </label>
          <input
            type="url"
            name="country_image"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Visa Type */}
        <div className="mb-4">
          <label
            htmlFor="visa_type"
            className="block text-lg font-medium text-gray-800"
          >
            Visa Type
          </label>
          <select
            name="visa_type"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Official Visa">Official Visa</option>
            <option value="Residential Visa">Residential Visa</option>
            <option value="Work Visa">Work Visa</option>
          </select>
        </div>

        {/* Processing Time */}
        <div className="mb-4">
          <label
            htmlFor="processing_time"
            className="block text-lg font-medium text-gray-800"
          >
            Processing Time (in days)
          </label>
          <input
            type="number"
            name="processing_time"
            placeholder="Enter processing time"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Required Documents */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-800">
            Required Documents
          </label>
          <div className="space-y-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Valid passport"
                className="form-checkbox"
              />
              <span className="ml-2">Valid Passport</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Visa application form"
                className="form-checkbox"
              />
              <span className="ml-2">Visa Application Form</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="required_documents"
                value="Recent passport-sized photograph"
                className="form-checkbox"
              />
              <span className="ml-2">Recent Passport-sized Photograph</span>
            </label>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-800"
          >
            Description
          </label>
          <textarea
            name="description"
            placeholder="Enter visa description"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Age Restriction */}
        <div className="mb-4">
          <label
            htmlFor="age_restriction"
            className="block text-lg font-medium text-gray-800"
          >
            Age Restriction (Minimum Age - 18yr)
          </label>
          <input
            type="number"
            name="age_restriction"
            placeholder="Enter age restriction"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Fee */}
        <div className="mb-4">
          <label
            htmlFor="fee"
            className="block text-lg font-medium text-gray-800"
          >
            Visa Fee($)
          </label>
          <input
            type="number"
            name="fee"
            placeholder="Enter visa fee"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Validity */}
        <div className="mb-4">
          <label
            htmlFor="validity"
            className="block text-lg font-medium text-gray-800"
          >
            Validity (in months)
          </label>
          <input
            type="number"
            name="validity"
            placeholder="Enter validity period"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Application Method */}
        <div className="mb-4">
          <label
            htmlFor="application_method"
            className="block text-lg font-medium text-gray-800"
          >
            Application Method
          </label>
          <input
            type="text"
            name="application_method"
            placeholder="Enter application method"
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500"
        >
          Add Visa
        </button>
      </form>
    </div>
  );
};

export default AddVisa;
