import Blog from "../cards/Blog";

const ExploreBlogs = () => {
  const blogData = [
    {
      date: 'October 10, 2024',
      thumbnail: 'https://via.placeholder.com/400x200',
      title: 'Understanding React State Management',
      description: 'This article dives deep into React state management, covering the basics and advanced techniques for handling state in large applications.',
    },
    {
      date: 'November 2, 2024',
      thumbnail: 'https://via.placeholder.com/400x200',
      title: 'Styling in React: CSS, CSS-in-JS, and More',
      description: 'A comprehensive guide to different styling methods in React, including CSS modules, styled-components, and Tailwind CSS.',
    },
    {
      date: 'December 5, 2024',
      thumbnail: 'https://via.placeholder.com/400x200',
      title: 'Building Reusable Components with TypeScript',
      description: 'Learn how to create reusable and type-safe components in React using TypeScript for more robust and maintainable code.',
    },
  ];

  return (
    <section className="container grid gap-3.5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
      {blogData.map((blog, index) => (
        <Blog key={index} blog_card={blog} />
      ))}
    </section>
  );
};

export default ExploreBlogs;
