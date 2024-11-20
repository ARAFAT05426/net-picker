import PaginationButton from '../components/btns/PaginationButton';
import { useQuery, useMutation } from '@tanstack/react-query';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import axios_common from '../utils/axios_common';
import blog_props from '../types/blog_props';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BlogCard from '../components/cards/BlogCard';

// Modal component for confirming deletion
const ConfirmDeleteModal = ({
  onCancel,
  onConfirm,
  blogTitle,
}: {
  onCancel: () => void;
  onConfirm: () => void;
  blogTitle: string;
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      <div className="max-w-sm bg-white text-center p-5 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <h3 className="text-xl font-semibold text-gray-800">
          Are you sure you want to delete "{blogTitle}"?
        </h3>
        <div className="mt-4 flex items-center justify-center gap-x-4">
          <button
            onClick={onCancel}
            className="px-5 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const ManageBlogs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<blog_props | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blogs data based on the current page
  const { data: blogsData, isLoading, isError, refetch } = useQuery({
    queryKey: ['manage-blogs', currentPage],
    queryFn: () => axios_common.get(`/blogs?page=${currentPage}`).then((res) => res.data),
  });

  // Mutation for deleting a blog
  const { mutate: deleteBlog } = useMutation({
    mutationFn: (blogId: number) => axios_common.delete(`/blogs/${blogId}`),
    onSuccess: () => {
      refetch(); // Refresh the blog list after deletion
      setShowModal(false);
      setSelectedBlog(null);
    },
    onError: (error) => {
      console.error('Error deleting blog:', error);
    },
  });

  const handleDeleteClick = (blog: blog_props) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleDeleteConfirm = () => {
    // Ensure that selectedBlog and its id are defined
    if (selectedBlog?.id) {
      deleteBlog(selectedBlog.id);
    }
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="spinner-border animate-spin border-4 border-blue-500 rounded-full w-8 h-8"></div>
        <p className="ml-3">Loading...</p>
      </div>
    );

  if (isError)
    return (
      <div className="text-center text-red-500">
        <p>Error fetching blogs. Please try again later.</p>
      </div>
    );

  const { data, meta } = blogsData || {};
  const totalPages = meta?.totalPages || 1;

  return (
    <>
      <div className='min-h-[90vh]'>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Blogs</h2>
        {/* Card layout for displaying blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.length ? (
            data.map((blog: blog_props) => (
              <BlogCard key={blog?.id} blog={blog} className="border rounded-lg p-4">
                <div className="pl-1.5 flex items-center gap-x-4">
                  <Link
                    to={`/dashboard/update-blog/${blog?.id}`}
                    className="flex items-center gap-2 text-sm font-semibold tracking-widest px-4 py-2 bg-blue-100 text-blue-500 rounded transition hover:bg-blue-200"
                  >
                    <MdOutlineEditCalendar size={20} /> Edit
                  </Link>
                  <button
                    onClick={() => handleDeleteClick(blog)}
                    className="flex items-center gap-2 text-sm font-semibold tracking-widest px-4 py-2 bg-red-100 text-red-500 rounded transition hover:bg-red-200"
                  >
                    <RiDeleteBinLine size={20} /> Delete
                  </button>
                </div>
              </BlogCard>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>

      </div>
      {/* Pagination */}
      <PaginationButton
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {/* Confirmation Modal */}
      {showModal && selectedBlog?.title && (
        <ConfirmDeleteModal
          blogTitle={selectedBlog.title} // Ensure title is a string
          onCancel={handleDeleteCancel}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </>
  );
};

export default ManageBlogs;
