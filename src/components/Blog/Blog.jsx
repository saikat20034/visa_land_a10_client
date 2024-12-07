import React from 'react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Simplifying Visa Applications',
      description:
        'Learn how VisaLand makes the visa process hassle-free and efficient.',
      image: 'https://via.placeholder.com/400x200',
      date: 'December 7, 2024',
    },
    {
      id: 2,
      title: 'Top 10 Tips for Your Visa Interview',
      description:
        'Get prepared for your next visa interview with these essential tips.',
      image: 'https://via.placeholder.com/400x200',
      date: 'November 28, 2024',
    },
    {
      id: 3,
      title: 'Understanding Visa Categories',
      description:
        'An in-depth look at different visa types and their requirements.',
      image: 'https://via.placeholder.com/400x200',
      date: 'November 15, 2024',
    },
  ];

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
