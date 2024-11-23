import BlogSideBar from "../components/blog_page/BlogSideBar";
import PageTitle from "../components/common/PageTitle";
import { useQuery } from "@tanstack/react-query";
import axios_common from "../utils/axios_common";
import BlogCard from "../components/cards/BlogCard";
import { useState } from "react";
import BarLoader from "../components/common/BarLoader";
import PaginationButton from "../components/btns/PaginationButton";
import blog_props from "../types/blog_props";

const Blogs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Define the number of items per page

    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ['blogs', currentPage],
        queryFn: async () => {
            const response = await axios_common.get(`/blogs?page=${currentPage}&limit=${itemsPerPage}`);
            return response.data;
        },
    });

    const handlePageChange = (page: number) => setCurrentPage(page);

    return (
        <>
            <PageTitle title="Blog" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 py-3.5">
                {/* Blog Sidebar */}
                <aside className="md:col-span-1">
                    <BlogSideBar />
                </aside>

                {/* Blog List */}
                <main className="md:col-span-2">
                    {isLoading && (
                        <div className="col-span-2 min-h-80 flex items-center justify-center">
                            <BarLoader className="mx-auto" />
                        </div>
                    )}
                    {error && <p className="col-span-2 text-red-500">Failed to load blogs: {error.message}</p>}
                    {blogs?.data && blogs.data.length > 0 ? (
                        <div className="grid grid-cols-2 gap-3.5">
                            {blogs.data.map((blog: blog_props) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    ) : (
                        !isLoading && <p className="col-span-2 text-center">No blogs found.</p>
                    )}

                    {/* Pagination */}
                    <div className="mt-4 flex justify-center">
                        {blogs?.meta && (
                            <PaginationButton
                                currentPage={currentPage}
                                totalPages={blogs.meta.totalPages}
                                onPageChange={handlePageChange}
                            />
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Blogs;
