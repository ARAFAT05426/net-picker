import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ActionBtn from '../../btns/ActionBtn';
import TextEditor from '../../fields/TextEditor';
import CustomDropdown from '../../fields/CustomDropdown';
import axios_common from '../../../utils/axios_common';
import { toast } from 'sonner';

const UpdateBlogEditor = () => {
    const { id } = useParams<{ id: string }>();
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
        category: null as string | null,
    });
    const [newImage, setNewImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const fetchBlogById = async (blogId: string) => {
        const response = await axios_common.get(`/blogs/${blogId}`);
        return response.data;
    };

    const { data: blog, isLoading, error } = useQuery({
        queryKey: ['update-blog', id],
        queryFn: () => fetchBlogById(id as string),
        enabled: !!id,
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (key: string, value: any) =>
        setFormData((prev) => ({ ...prev, [key]: value }));

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setNewImage(file);

            // Generate image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateBlog = async () => {
        const { title, content, category } = formData;

        if (!title || !content || !category) {
            toast.error('Please fill out all fields.');
            return;
        }

        try {
            let imagePath = formData.image;

            // Upload new image if selected
            if (newImage) {
                const imageFormData = new FormData();
                imageFormData.append('image', newImage);

                const imageResponse = await axios_common.post('/upload-image', imageFormData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                imagePath = imageResponse.data.path; // Backend responds with the image path
            }

            // Update blog data
            const payload = {
                title,
                content,
                category,
                image_path: imagePath,
            };

            await axios_common.put(`/blogs/${id}`, payload);

            toast.success('Blog updated successfully!');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error('Error updating blog:', err.response?.data || err.message);
            toast.error('Failed to update the blog. Please try again.');
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading blog: {error.message}</div>;

    return (
        <div className="p-5 space-y-5">
            {formData.image && !previewImage && (
                <img
                    src={`${import.meta.env.VITE_API}${formData.image}`}
                    alt="Current Blog"
                    className="w-full max-h-96 object-cover rounded"
                />
            )}

            {previewImage && (
                <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full max-h-96 object-cover rounded"
                />
            )}

            <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="w-full py-2"
            />

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
