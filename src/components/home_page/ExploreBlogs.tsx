import { useQuery } from "@tanstack/react-query";
import Blog from "../cards/BlogCard";
import axios_common from "../../utils/axios_common";
import blog_props from "../../types/blog_props";
import BarLoader from "../common/BarLoader";

const ExploreBlogs = () => {
  // Fetch blogs
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-blogs"],
    queryFn: async () => {
      const response = await axios_common.get('/blogs?limit=3');
      console.log(response.data)
      return response.data.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-80 flex items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center py-10">
        <p>Error fetching blogs. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="container grid gap-3.5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
      {data?.length ? (
        data.map((blog: blog_props) => (
          <Blog key={blog.id} blog={blog} />
        ))
      ) : (
        <p className="text-center col-span-full">
          No blogs available at the moment.
        </p>
      )}
    </section>
  );
};

export default ExploreBlogs;
