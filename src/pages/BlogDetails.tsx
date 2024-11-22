import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useQuery } from "@tanstack/react-query";
import axios_common from "../utils/axios_common";
import { FaFacebookF } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import 'react-quill/dist/quill.snow.css';

// Fetch blog details from API
const fetchBlogDetails = async (id: string) => {
    const response = await axios_common.get(`/blogs/${id}`);
    return response.data;
};

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();

    const { data, error, isLoading } = useQuery({
            queryKey: ['blog-details', id],
            queryFn: () => fetchBlogDetails(id!),
            enabled: Boolean(id), // Only fetch if id is available
        });

    if (isLoading) {
        return <div className="text-center text-xl font-semibold">Loading...</div>;
    }

    if (error instanceof Error) {
        return <div className="text-center text-xl font-semibold text-red-500">Error: {error.message}</div>;
    }

    if (!data) {
        return <div className="text-center text-xl font-semibold text-gray-500">No blog found</div>;
    }

    // Format the created date manually (e.g., 'November 18, 2024')
    const createdDate = new Date(data.created_at);
    const formattedDate = `${createdDate.toLocaleString('default', { month: 'long' })} ${createdDate.getDate()}, ${createdDate.getFullYear()}`;

    // Share options
    const shareUrl = window.location.href;
    const shareText = `${data.title} - ${data.category}`;

    return (
        <>
            <Helmet>
                <title>{data.title}</title>
                {/* Open Graph / Facebook */}
                <meta property="og:title" content={data.title} />
                <meta property="og:description" content={data.category} />
                <meta property="og:image" content={`${import.meta.env.VITE_API}${data.image_url}`} />
                <meta property="og:url" content={shareUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="Your Site Name" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={data.title} />
                <meta name="twitter:description" content={data.category} />
                <meta name="twitter:image" content={`${import.meta.env.VITE_API}${data.image_url}`} />
                <meta name="twitter:url" content={shareUrl} />
                <meta name="twitter:site" content="@your_twitter_handle" />
            </Helmet>

            <div className="container mx-auto py-8 px-4 space-y-3.5">

                <h1 className="text-center text-4xl tracking-wider font-semibold">{data?.title}</h1>
                <div className="text-center text-sm tracking-wider text-secondary/75 uppercase">{data.category} - {formattedDate}</div>
                <img
                    className="w-full max-h-[75vh] object-contain"
                    src={import.meta.env.VITE_API + data.image_url}
                    alt={data.title}
                />
                <div className="ql-editor mt-5" dangerouslySetInnerHTML={{ __html: data.content }} />
                <hr />
                <div className="flex items-center justify-between">
                    <span className="flex items-center gap-x-1.5 text-sm">
                        <MdOutlineAdminPanelSettings className="text-primary" size={25} />
                        <p className="text-xs tracking-widest font-medium">
                            by Admin
                        </p>
                    </span>

                    {/* Share Options */}
                    <div className="flex gap-x-4">
                        <FacebookShareButton url={shareUrl} quote={shareText}>
                            <FaFacebookF className="" size={20} />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} title={shareText}>
                            <FaTwitter className="" size={20} />
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} title={data.title}>
                            <FaLinkedin className="" size={20} />
                        </LinkedinShareButton>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;
