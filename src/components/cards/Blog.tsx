import type { FC } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import blog_props from '../../types/blog_props';
import * as React from 'react';

interface Props {
    blog: blog_props;
    children?: React.ReactNode;
    className?: string;
}

const Blog: FC<Props> = ({ blog, children, className }) => {
    const formatDate = (date: Date = new Date()) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    return (
        <div className={`${className} group rounded-sm overflow-hidden bg-white transition-shadow duration-300`}>
            <div className="relative">
                {/* Thumbnail */}
                <img
                    src={import.meta.env.VITE_API + blog.image_url}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Date Overlay */}
                <div className="absolute top-2.5 left-2.5 bg-white uppercase text-primary text-sm tracking-[0.15em] font-semibold px-5 py-2 rounded-sm">
                    {formatDate(blog.created_at)}
                </div>
            </div>

            <div className="py-3 px-1.5">
                {/* Title */}
                <h2 className="text-xl tracking-widest font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {blog.title}
                </h2>

                {/* Description */}
                <div className='tracking-wider text-sm' dangerouslySetInnerHTML={{ __html: blog.content.slice(0, 500) }} />
            </div>
            {
                children ? children : <div className="px-1.5 pb-3">
                    <button
                        className="flex items-center gap-x-1.5 text-primary text-sm font-semibold hover:underline"
                        onClick={() => {
                            // Replace with navigation logic to blog details
                            window.location.href = `/blogs/${blog.id}`;
                        }}
                    >
                        Read More <GoArrowUpRight />
                    </button>
                </div>
            }
        </div>
    );
};

export default Blog;
