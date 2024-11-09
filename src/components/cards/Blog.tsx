import type { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';

interface BlogProps {
    date: string;
    thumbnail: string;
    title: string;
    description: string;
}
interface Props {
    blog_card: BlogProps;
}

const Blog: FC<Props> = ({ blog_card }) => {
    return (
        <div className="group rounded-sm overflow-hidden bg-white transition-shadow duration-300">
            <div className="relative">
                {/* Thumbnail */}
                <img
                    src={blog_card.thumbnail}
                    alt={blog_card.title}
                    className="w-full h-48 object-cover transition-transform duration-300"
                />

                {/* Date Overlay */}
                <div className="absolute top-2.5 left-2.5 bg-white text-primary text-xs tracking-wider font-semibold px-5 py-2 rounded-sm">
                    {blog_card.date}
                </div>
            </div>

            <div className="py-2.5">
                {/* Title */}
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {blog_card.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {blog_card.description}
                </p>
            </div>

            {/* Read More Button */}
            <div className="">
                <button className="flex items-center gap-x-1.5 text-primary text-sm font-semibold hover:underline">
                    Read More <GoArrowUpRight />
                </button>
            </div>
        </div>
    );
};

export default Blog;
