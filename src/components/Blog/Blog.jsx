import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogPage = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      title: 'Simplifying Visa Applications',
      description:
        'Learn how VisaLand makes the visa process hassle-free and efficient.',
      image:
        'https://a.storyblok.com/f/199708/1600x770/e9bb3eeec4/visa_-_mobility_your_ally_in_simplifying_visa_processes_globally_02.jpg',
      date: 'December 7, 2024',
      path: '/simplify',
    },
    {
      id: 2,
      title: 'Top 10 Tips for Your Visa Interview',
      description:
        'Get prepared for your next visa interview with these essential tips.',
      image:
        'https://themigrationbureau.com/wp-content/uploads/2024/03/TMB-Blog-Minimum-salary-3-1110x630.png',
      date: 'November 28, 2024',
      path: '/interview-tips',
    },
    {
      id: 3,
      title: 'Understanding Visa Categories',
      description:
        'An in-depth look at different visa types and their requirements.',
      image:
        'https://visaprocedures.com/wp-content/uploads/2024/01/jpeg-optimizer_DALL%C2%B7E-2024-01-25-15.23.59-An-educational-poster-titled-Understanding-Visa-Types-with-various-colorful-icons-representing-different-types-of-visas-like-tourist-student-work.png',
      date: 'November 15, 2024',
      path: '/visa-categories',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const handleReadMore = path => {
    navigate(path);
  };

  return (
    <div className="py-12 px-6 bg-gradient-to-r from-gray-100 to-blue-100 min-h-screen rounded-lg my-10">
      <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        VisaLand Blog
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:shadow-2xl hover:ring-4 hover:ring-blue-200"
            data-aos="fade-up"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">
              {blog.title}
            </h4>
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <button
              onClick={() => handleReadMore(blog.path)}
              className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
