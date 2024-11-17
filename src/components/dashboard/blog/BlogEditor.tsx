import CustomDropdown from "../../fields/CustomDropdown";
import axios_common from '../../../utils/axios_common';
import ActionBtn from '../../btns/ActionBtn';
import { useState } from "react";
import ImageUploader from "../../fields/ImageUploader";
import TextEditor from "../../fields/TextEditor";

const BlogEditor = () => {
    const [value, setValue] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const [category, setCategory] = useState<string | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleImageSelect = (file: File | null) => {
        setImage(file);
    };

    const handleImageDeselect = () => {
        setImage(null);
    };

    const handleBlogUpload = async () => {
        const titleInput = document.getElementById("blog-title") as HTMLInputElement;
        const blogTitle = titleInput?.value.trim();

        if (!blogTitle || !value || !image || !category) {
            alert("Please fill out all fields, including an image and category.");
            return;
        }

        const formData = new FormData();
        formData.append("category", category);
        formData.append("title", blogTitle);
        formData.append("content", value);
        formData.append("image", image);

        try {
            const response = await axios_common.post("/blogs", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Blog added successfully!");
            titleInput.value = "";
            setValue("");
            setImage(null);
            setCategory(null);
        } catch (error) {
            console.error("Error uploading blog:", error);
            alert("Failed to upload the blog. Please try again.");
        }
    };

    return (
        <div className="p-5">
            <div className="relative space-y-5">
                {/* Image Upload */}
                <ImageUploader
                    onImageSelect={handleImageSelect}
                    onImageDeselect={handleImageDeselect}
                    image={image}
                />

                {/* Blog Title */}
                <input
                    id="blog-title"
                    className="w-full tracking-widest outline-none py-1.5 pl-3.5 rounded-sm border transition"
                    placeholder="Title"
                    type="text"
                />

                {/* Category Selector */}
                <CustomDropdown
                    options={["Technology", "Lifestyle", "Business", "Health", "Travel"]}
                    onSelect={setCategory}
                    placeholder="Select Blog Category"
                    className=""
                />
                {/* Text Editor */}
                <TextEditor value={value} onChange={handleChange} />

                {/* Upload Blog Button */}
                <ActionBtn onClick={handleBlogUpload}>Add Blog</ActionBtn>
            </div>
        </div>
    );
};

export default BlogEditor;
