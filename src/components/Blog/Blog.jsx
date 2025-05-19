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
        'https://i.postimg.cc/mk7hKvbf/visa-mobility-your-ally-in-simplifying-visa-processes-globally-02.jpg',
      date: 'December 7, 2024',
      path: '/simplify',
    },
    {
      id: 2,
      title: 'Top 10 Tips for Your Visa Interview',
      description:
        'Get prepared for your next visa interview with these essential tips.',
      image:
        'https://i.postimg.cc/1t9WgQjM/TMB-Blog-Minimum-salary-3-1110x630.png',
      date: 'November 28, 2024',
      path: '/interview-tips',
    },
    {
      id: 3,
      title: 'Understanding Visa Categories',
      description:
        'An in-depth look at different visa types and their requirements.',
      image:
        'https://i.postimg.cc/y63fkvfM/jpeg-optimizer-DALL-E-2024-01-25-15-23-59-An-educational-poster-titled-Understanding-Visa-Types-with.png',
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
    <div className="py-10 px-6 rounded-lg mt-10 bg-gradient-to-r from-blue-50 to-indigo-100">
      <h3 className="text-4xl font-extrabold text-center text-indigo-800 mb-4">
        VisaLand Blog
      </h3>

      <p
        className="max-w-2xl mx-auto text-center text-gray-700 text-base md:text-lg leading-relaxed mb-10"
        data-aos="fade-up"
      >
        Stay informed and prepared with the latest visa tips, expert advice, and
        step-by-step guides. Explore our blog to make your visa journey
        smoother.
      </p>

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
