import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Simplifying Visa Applications',
      description:
        'Learn how VisaLand makes the visa process hassle-free and efficient.',
      image:
        'https://a.storyblok.com/f/199708/1600x770/e9bb3eeec4/visa_-_mobility_your_ally_in_simplifying_visa_processes_globally_02.jpg',
      date: 'December 7, 2024',
    },
    {
      id: 2,
      title: 'Top 10 Tips for Your Visa Interview',
      description:
        'Get prepared for your next visa interview with these essential tips.',
      image:
        'https://themigrationbureau.com/wp-content/uploads/2024/03/TMB-Blog-Minimum-salary-3-1110x630.png',
      date: 'November 28, 2024',
    },
    {
      id: 3,
      title: 'Understanding Visa Categories',
      description:
        'An in-depth look at different visa types and their requirements.',
      image:
        'https://visaprocedures.com/wp-content/uploads/2024/01/jpeg-optimizer_DALL%C2%B7E-2024-01-25-15.23.59-An-educational-poster-titled-Understanding-Visa-Types-with-various-colorful-icons-representing-different-types-of-visas-like-tourist-student-work.png',
      date: 'November 15, 2024',
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 3000, // Increased duration for slower animation (1.5 seconds)
      easing: 'ease-in-out', // Easing function
      once: true, // Animation happens once per element
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8 sm:px-8 lg:px-16">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">VisaLand Blog</h1>
        <p className="text-gray-600 mt-2">
          Stay updated with the latest tips and news!
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map(blog => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-left" // Add AOS fade-left animation here
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{blog.date}</p>
              <p className="text-gray-700 mt-2">{blog.description}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
