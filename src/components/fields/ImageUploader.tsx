import { RiDeleteBinLine } from 'react-icons/ri';

interface ImageUploaderProps {
  image: File | string | null;
  onImageSelect: (file: File | null) => void;
  onImageDeselect: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ image, onImageSelect, onImageDeselect }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onImageSelect(file);
  };

  const getImagePreview = () => {
    if (!image) return undefined; // Return undefined if no image is selected
    if (image instanceof File) {
      return URL.createObjectURL(image); // For File objects
    }
    return image; // For string URLs
  };

  return (
    <div className="relative">
      {image ? (
        <div className="relative">
          <img
            src={getImagePreview()}
            alt="Preview"
            className="w-full max-h-[50vh] object-cover rounded-sm"
          />
          <button
            onClick={onImageDeselect}
            className="absolute inset-x-1/2 bottom-1.5 transform -translate-x-1/2"
          >
            <RiDeleteBinLine className='bg-primary text-red-500 rounded-full p-1.5' size={35} />
          </button>
        </div>
      ) : (
        <div
          className="relative border-2 border-dashed border-gray-300 p-4 rounded-md hover:border-primary transition cursor-pointer"
          onClick={() => document.getElementById('blog-image')?.click()}
        >
          <input
            id="blog-image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-center tracking-widest text-gray-500">Click to select an image</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
