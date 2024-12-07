import { useParams } from 'react-router-dom';

const countryData = {
  'united-states': {
    name: 'United States',
    description:
      'The United States of America (USA) is known for its diversity and global influence.',
    visaTypes: [
      { type: 'Tourist Visa', fee: '$160', processingTime: '2-4 weeks' },
      { type: 'Student Visa', fee: '$350', processingTime: '4-6 weeks' },
    ],
    flag: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
  },
  'united-kingdom': {
    name: 'United Kingdom',
    description:
      'The United Kingdom is a leading destination for higher education and tourism.',
    visaTypes: [
      { type: 'Student Visa', fee: '$400', processingTime: '4-6 weeks' },
    ],
    flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg',
  },
  australia: {
    name: 'Australia',
    description:
      'Australia offers a vibrant culture, unique wildlife, and work opportunities.',
    visaTypes: [
      { type: 'Work Visa', fee: '$300', processingTime: '6-8 weeks' },
    ],
    flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia.svg',
  },
  canada: {
    name: 'Canada',
    description:
      'Canada is known for its natural beauty and high standard of living.',
    visaTypes: [
      { type: 'Resident Visa', fee: '$500', processingTime: '3-6 months' },
    ],
    flag: 'https://cdn.vectorstock.com/i/500p/57/98/flag-canada-vector-33145798.jpg',
  },
};

const CountryDetails = () => {
  const { countryId } = useParams();
  const country = countryData[countryId];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative w-full h-64">
          <img
            src={country.flag}
            alt={`${country.name} Flag`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-700">{country.name}</h1>
          <p className="mt-4 text-gray-700">{country.description}</p>
          <h2 className="text-2xl font-semibold text-blue-700 mt-6">
            Visa Types
          </h2>
          <ul className="mt-4 space-y-4">
            {country.visaTypes.map((visa, index) => (
              <li
                key={index}
                className="p-4 bg-blue-50 rounded-lg shadow-md flex justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">
                    {visa.type}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fee: <span className="font-medium">{visa.fee}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Processing Time:{' '}
                    <span className="font-medium">{visa.processingTime}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
