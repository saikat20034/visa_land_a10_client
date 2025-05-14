import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from '@material-tailwind/react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Swal from 'sweetalert2';

const VisaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visa, setVisa] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchVisaDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/visa-details/${id}`
        );
        const data = await response.json();
        setVisa(data);
      } catch (error) {
        console.error('Error fetching visa details:', error);
      }
    };

    fetchVisaDetails();
  }, [id]);

  const handleApplyVisa = async id => {
    const confirmApply = await Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to apply for the ${visa?.visa_type} to ${visa?.country_name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, apply now!',
    });

    if (!confirmApply.isConfirmed) return;

    const requestData = {
      country_name: visa?.country_name,
      country_image: visa?.country_image,
      visa_type: visa?.visa_type,
      processing_time: visa?.processing_time,
      fee: visa?.fee,
      validity: visa?.validity,
      application_method: visa?.application_method,
      applied_date: new Date().toISOString(),
      host: {
        name: user?.displayName,
        email: user?.email,
      },
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/apply-visa`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const data = await response.json();

    if (data.insertedId) {
      navigate('/my-visa-applications');
      Swal.fire(
        'Success!',
        'Your visa application has been submitted.',
        'success'
      );
    } else {
      Swal.fire(
        'Error!',
        'Failed to apply for the visa. Please try again.',
        'error'
      );
    }
  };

  if (!visa || visa.length <= 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="py-12 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-100">
      <h3 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Visa Details
      </h3>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-lg overflow-hidden md:grid md:grid-cols-2 md:gap-8">
        <img
          src={visa.country_image}
          alt={visa.country_name}
          className="w-full h-64 md:h-auto object-cover md:rounded-l-lg"
        />
        <div className="p-6">
          <h2 className="text-4xl font-extrabold text-gray-800">
            {visa.country_name}
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            <strong className="text-blue-900">Visa Type:</strong>{' '}
            {visa.visa_type}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Processing Time:</strong>{' '}
            {visa.processing_time}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Fee:</strong> {visa.fee}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Validity:</strong> {visa.validity}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Application Method:</strong>{' '}
            {visa.application_method}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Age Restriction:</strong>{' '}
            {visa.age_restriction}
          </p>
          <p className="text-lg text-gray-600 mt-2">
            <strong className="text-blue-900">Description:</strong>{' '}
            {visa.description}
          </p>
          <h4 className="text-2xl font-semibold text-gray-800 mt-6">
            Required Documents:
          </h4>
          <ul className="list-disc list-inside mt-2">
            {visa.required_documents.map((doc, index) => (
              <li key={index} className="text-gray-600">
                {doc}
              </li>
            ))}
          </ul>
          {user && (
            <Button
              variant="filled"
              color="blue"
              className="mt-6 w-full md:w-auto"
              onClick={() => handleApplyVisa(visa._id)}
            >
              Apply for the Visa
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
