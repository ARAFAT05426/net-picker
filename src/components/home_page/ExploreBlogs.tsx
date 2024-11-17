import { useQuery } from "@tanstack/react-query";
import Blog from "../cards/Blog";
import axios_common from "../../utils/axios_common";
import blog_props from "../../types/blog_props";

const ExploreBlogs = () => {
  // Fetch blogs
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular-blogs"],
    queryFn: () => axios_common.get("/blogs").then((res) => res.data),
  });

  if (isLoading) {
    return <p>Loading blogs...</p>;
  }

  if (isError) {
    return <p>Error fetching blogs. Please try again later.</p>;
  }

  return (
    <section className="container grid gap-3.5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
      {data?.length ? (
        data.map((blog: blog_props) => (
          <Blog key={blog.id} blog={blog} />
        ))
      ) : (
        <p>No blogs available at the moment.</p>
      )}
    </section>
  );
};

export default ExploreBlogs;
