import { toast } from "sonner";
import axios_common from "../../../utils/axios_common";
import { useState } from "react";

interface AddBannerFormProps {
    onSuccess: () => void;
    onCancel: () => void; // Add cancel callback prop
  }
  
  const AddBannerForm = ({ onSuccess, onCancel }: AddBannerFormProps) => {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
      imagePath: "",
      button_text: "",
      link: "",
    });
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const previewURL = URL.createObjectURL(file);
        setSelectedImage(file);
        setPreviewImage(previewURL);
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
    
      try {
        if (selectedImage) {
          const imageFormData = new FormData();
          imageFormData.append("image", selectedImage);
          const imageResponse = await axios_common.post("/upload-image", imageFormData);
          const imageUrl = imageResponse.data.imageUrl;
    
          const formDataToSend = new FormData();
          formDataToSend.append("image", imageUrl);
          formDataToSend.append("title", formData.title);
          formDataToSend.append("description", formData.description);
          formDataToSend.append("button_text", formData.button_text);
          formDataToSend.append("link", formData.link);
    
          await axios_common.post("/banners", formDataToSend);
    
          toast.success("Banner added successfully!");
          onSuccess();
          setFormData({
            title: "",
            description: "",
            imagePath: "",
            button_text: "",
            link: "",
          });
          setPreviewImage(null);
          setSelectedImage(null);
        }
      } catch (error) {
        console.error("Error adding banner:", error);
        toast.error("Failed to add banner. Please try again.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-2.5 p-5 border rounded">
        <div>
          {previewImage && <img src={previewImage} alt="Preview" className="w-full max-h-80 object-cover mt-2" />}
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} className="mt-1" />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="button_text" className="block text-sm font-medium text-gray-700">Button Text</label>
          <input
            type="text"
            id="button_text"
            name="button_text"
            value={formData.button_text}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700">Link</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="flex space-x-2">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Add Banner</button>
          <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded-md">Cancel</button>
        </div>
      </form>
    );
  };
  
  export default AddBannerForm;
  