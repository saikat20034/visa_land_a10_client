import { Link } from 'react-router-dom';

const TopCountries = () => {
  return (
    <div className="py-10 px-6 bg-gray-100">
      <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Top Countries for Visas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Country 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
            alt="United States"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">
              United States
            </h4>
            <p className="text-sm text-gray-600">
              <strong>Visa Type:</strong> Tourist Visa
            </p>
            <Link
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              to="/country-details/united-states"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Country 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg"
            alt="United Kingdom"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">
              United Kingdom
            </h4>
            <p className="text-sm text-gray-600">
              <strong>Visa Type:</strong> Student Visa
            </p>
            <Link
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              to="/country-details/united-kingdom"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Country 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia.svg"
            alt="Australia"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">Australia</h4>
            <p className="text-sm text-gray-600">
              <strong>Visa Type:</strong> Work Visa
            </p>
            <Link
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              to="/country-details/australia"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Country 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://cdn.vectorstock.com/i/500p/57/98/flag-canada-vector-33145798.jpg"
            alt="Canada"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h4 className="text-lg font-semibold text-gray-800">Canada</h4>
            <p className="text-sm text-gray-600">
              <strong>Visa Type:</strong> Resident Visa
            </p>
            <Link
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              to="/country-details/canada"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCountries;
