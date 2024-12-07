import { Link } from "react-router-dom";

const VisaCard = ({visa}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={visa.country_image}
        alt={visa.country_name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {visa.country_name}
        </h3>
        <p className="text-sm text-gray-600">
          <strong>Visa Type:</strong> {visa.visa_type}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Processing Time:</strong> {visa.processing_time}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Fee:</strong> {visa.fee}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Validity:</strong> {visa.validity}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Application Method:</strong> {visa.application_method}
        </p>
        <div className="flex justify-center items-center text-center">
          <Link
            to={`/visa-details/${visa._id}`}
            className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;