import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const TopCountries = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const countries = [
    {
      name: 'United States',
      visaType: 'Tourist Visa',
      img: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
      description:
        'Explore vibrant cities, scenic landscapes, and rich culture.',
      route: '/usa',
    },
    {
      name: 'United Kingdom',
      visaType: 'Student Visa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg',
      description: 'Study in one of the world’s leading educational hubs.',
      route: '/uk',
    },
    {
      name: 'Australia',
      visaType: 'Work Visa',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/800px-Flag_of_Australia_%28converted%29.svg.png',
      description:
        'Opportunities for skilled professionals in a thriving economy.',
      route: '/australia',
    },
    {
      name: 'Canada',
      visaType: 'Resident Visa',
      img: 'https://cdn.vectorstock.com/i/500p/57/98/flag-canada-vector-33145798.jpg',
      description:
        'Experience a welcoming culture and outstanding quality of life.',
      route: '/canada',
    },
  ];

  const handleNavigate = path => {
    navigate(path);
  };

  return (
    <div className="py-16 px-6 rounded-lg my-10 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h3
        className="text-4xl font-bold text-center text-indigo-800 mb-10"
        data-aos="fade-down"
      >
        Top Countries for Visas
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={country.img}
              alt={country.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800">
                {country.name}
              </h4>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Visa Type:</strong> {country.visaType}
              </p>
              <p className="text-sm text-gray-500 mt-4">
                {country.description}
              </p>
              <button
                className="block mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
                onClick={() => handleNavigate(country.route)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCountries;
