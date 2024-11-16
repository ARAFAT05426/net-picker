import 'react-quill/dist/quill.bubble.css';  // Import Bubble theme CSS
import ReactQuill from "react-quill";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ActionBtn from '../../btns/ActionBtn';
import axios_common from '../../../utils/axios_common';

const BlogEditor = () => {
    const [value, setValue] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setImage(file);
    };

    const handleDeselectImage = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering the parent click event
        setImage(null);
        const fileInput = document.getElementById("blog-image") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link'],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }]
        ]
    };

    const formats = [
        'header', 'font', 'bold', 'italic', 'underline', 'list', 'ordered', 'bullet',
        'link', 'align', 'color', 'background'
    ];

    const handleBlogUpload = async () => {
        const titleInput = document.getElementById("blog-title") as HTMLInputElement;
        const blogTitle = titleInput?.value.trim();

        if (!blogTitle || !value || !image) {
            alert("Please fill out all fields, including an image.");
            return;
        }

        const formData = new FormData();
        formData.append("title", blogTitle);
        formData.append("content", value);
        formData.append("image", image);

        console.log("Form Data:", {
            title: blogTitle,
            content: value,
            image: image?.name,
        });

        try {
            const response = await axios_common.post("/blogs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Blog uploaded successfully:", response.data);
            alert("Blog added successfully!");
            titleInput.value = "";
            setValue("");
            setImage(null);
        } catch (error) {
            console.error("Error uploading blog:", error);
            alert("Failed to upload the blog. Please try again.");
        }
    };

    return (
        <div className="p-3.5">
            {/* Blog Title, Image Upload, and Editor */}
            <div className="h-full space-y-4">
                {/* Image Upload */}
                {
                    image ?
                        <>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                className="w-full max-h-[50vh] object-cover rounded"
                            />
                            <button
                                onClick={handleDeselectImage}
                                className="ml-2 text-red-500"
                            >
                                <FaTimes />
                            </button>
                        </>
                        : <div
                            className="relative border-2 border-dashed border-gray-300 p-3.5 rounded hover:border-primary transition cursor-pointer"
                            onClick={() => document.getElementById("blog-image")?.click()}
                        >
                            <input
                                id="blog-image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                            <p className="text-sm text-center tracking-widest">
                                {image ? (
                                    <div className="flex flex-col items-center space-y-2">

                                    </div>
                                ) : (
                                    "Click to select an image to upload"
                                )}
                            </p>
                        </div>
                }


                {/* Blog Title */}
                <input
                    id="blog-title"
                    className="w-full italic text-3xl tracking-widest font-medium outline-none transition"
                    placeholder="Set a blog title"
                    type="text"
                />

                {/* React Quill Editor */}
                <ReactQuill
                    onChange={handleChange}
                    className="-ml-3.5 h-full text-sm rounded-sm"
                    style={{
                        height: '75vh',
                    }}
                    modules={modules}
                    formats={formats}
                    value={value}
                    theme="bubble"
                    placeholder="Write your blog content here..."  // Placeholder for ReactQuill
                />

                {/* Upload Blog Button */}
                <ActionBtn onClick={handleBlogUpload}>
                    Add Blog
                </ActionBtn>
            </div>
        </div>
    );
};

export default BlogEditor;
