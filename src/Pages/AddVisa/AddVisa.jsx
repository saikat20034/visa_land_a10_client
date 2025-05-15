import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import { getNames } from 'country-list';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AddVisa = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
    const fee = parseFloat(form.fee.value);
    const validity = parseInt(form.validity.value);
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

    if (validity > 180) {
      Swal.fire({
        title: 'Error!',
        text: 'Validity cannot exceed 180 days.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return;
    }

    if (fee > 1000) {
      Swal.fire({
        title: 'Error!',
        text: 'Visa fee cannot exceed $1000.',
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
      headers: { 'Content-Type': 'application/json' },
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
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/QxRwLT3J/20852675-6345959.jpg')",
      }}
    >
      <div
        className="bg-white bg-opacity-95 rounded-lg shadow-2xl w-full max-w-3xl p-8 md:p-10"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">
          Add a New Visa
        </h2>
        <form onSubmit={handleAddVisa} className="space-y-5">
          {/* Country Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Country Name
            </label>
            <Select
              options={countries}
              value={selectedCountry}
              onChange={setSelectedCountry}
              placeholder="Select a country"
              className="text-sm"
            />
          </div>

          {/* Country Image URL */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Country Image URL
            </label>
            <input
              type="url"
              name="country_image"
              placeholder="Enter image URL"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Visa Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Visa Type
            </label>
            <select
              name="visa_type"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            >
              <option value="">Select Visa Type</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Work Visa">Work Visa</option>
              <option value="Residential Visa">Residential Visa</option>
              <option value="Medical Visa">Medical Visa</option>
              <option value="Startup Visa">Startup Visa</option>
              <option value="Forest Research Visa">Forest Research Visa</option>
              <option value="Nomadic Culture Visa">Nomadic Culture Visa</option>
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

          {/* Processing Time */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Processing Time (in days)
            </label>
            <input
              type="number"
              name="processing_time"
              placeholder="e.g., 15"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Required Documents */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Required Documents
            </label>
            <div className="flex flex-col gap-2">
              {[
                'Valid passport',
                'Visa application form',
                'Recent passport-sized photograph',
              ].map((doc, i) => (
                <label key={i} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="required_documents"
                    value={doc}
                    className="form-checkbox text-indigo-600"
                  />
                  <span className="ml-2 text-sm">{doc}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter visa description"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Age Restriction */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Age Restriction (Minimum Age - 18yr)
            </label>
            <input
              type="number"
              name="age_restriction"
              placeholder="e.g., 18"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Fee */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Visa Fee ($)
            </label>
            <input
              type="number"
              name="fee"
              placeholder="e.g., 50"
              max="1000"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Validity */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Validity (in days)
            </label>
            <input
              type="number"
              name="validity"
              placeholder="e.g., 180"
              max="180"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Application Method */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Application Method
            </label>
            <input
              type="text"
              name="application_method"
              placeholder="e.g., Online or Embassy"
              className="w-full px-4 py-2 border rounded-md text-sm focus:ring-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
