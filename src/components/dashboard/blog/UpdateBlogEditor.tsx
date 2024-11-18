import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ActionBtn from '../../btns/ActionBtn';
import TextEditor from '../../fields/TextEditor';
import CustomDropdown from '../../fields/CustomDropdown';
import axios_common from '../../../utils/axios_common';

const UpdateBlogEditor = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        category: null as string | null,
    });

    const fetchBlogById = async (blogId: string) => {
        const response = await axios_common.get(`/blogs/${blogId}`);
        return response.data;
    };

    const { data: blog, isLoading, error } = useQuery({
        queryKey: ['update-blog', id],
        queryFn: () => fetchBlogById(id as string),
        enabled: !!id
    });

    useEffect(() => {
        if (blog) {
            setFormData({
                title: blog.title,
                content: blog.content,
                image: blog.image_url,
                category: blog.category,
            });
        }
    }, [blog]);

    const handleChange = (key: string, value: any) => setFormData((prev) => ({ ...prev, [key]: value }));

    const handleUpdateBlog = async () => {
        const { title, content, category } = formData;

        if (!title || !content || !category) {
            alert('Please fill out all fields.');
            return;
        }

        // // Create a payload for the request
        // const payload = new FormData();
        // payload.append('title', title);
        // payload.append('content', content);
        // payload.append('category', category);

        const payload = {
            'title': title,
            'content': content,
            'category': category
        }

        try {
            const response = await axios_common.put(`/blogs/${id}`, payload);
            alert('Blog updated successfully!');
            console.log(response);
        } catch (err: any) {
            console.error('Error updating blog:', err.response?.data || err.message);
            alert('Failed to update the blog. Please try again.');
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blog: {error.message}</div>;

    return (
        <div className="p-5 space-y-5">
            <img src={import.meta.env.VITE_API+formData.image} alt="" />
            <input
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full tracking-widest outline-none py-1.5 pl-3.5 rounded-sm border transition"
                placeholder="Title"
                type="text"
            />

            <CustomDropdown
                options={['Technology', 'Lifestyle', 'Business', 'Health', 'Travel']}
                onSelect={(value) => handleChange('category', value)}
                placeholder="Select Blog Category"
                selected={formData.category}
            />

            <TextEditor
                value={formData.content}
                onChange={(value) => handleChange('content', value)}
            />

            <ActionBtn onClick={handleUpdateBlog}>Update Blog</ActionBtn>
        </div>
    );
};

export default UpdateBlogEditor;
