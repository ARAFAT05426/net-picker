import banner_props from "../../../types/banner_props";

interface EditBannerFormProps {
    formData: Partial<banner_props>;
    previewImage: string | null;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    onCancel: () => void; // Cancel handler
}

const EditBannerForm: React.FC<EditBannerFormProps> = ({
    formData,
    previewImage,
    onInputChange,
    onFileChange,
    onSubmit,
    onCancel, // Cancel handler
}) => {
    return (
        <form onSubmit={onSubmit} className="space-y-2.5 p-5 border rounded">
            <div>
                {previewImage && <img src={previewImage} alt="Preview" className="mt-2 w-full max-h-80 object-cover" />}
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                    Image
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={onFileChange}
                    className="mt-1"
                />
            </div>
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title || ""}
                    onChange={onInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description || ""}
                    onChange={onInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>

            <div>
                <label htmlFor="button_text" className="block text-sm font-medium text-gray-700">
                    Button Text
                </label>
                <input
                    id="button_text"
                    name="button_text"
                    type="text"
                    value={formData.button_text || ""}
                    onChange={onInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>

            <div>
                <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                    Link
                </label>
                <input
                    id="link"
                    name="link"
                    type="url"
                    value={formData.link || ""}
                    onChange={onInputChange}
                    className="mt-1 p-2 w-full border rounded-md"
                />
            </div>

            <div className="flex items-center gap-x-3.5 mt-4">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-5 rounded"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={onCancel}
                    className="bg-gray-500 text-white py-2 px-5 rounded"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default EditBannerForm;
