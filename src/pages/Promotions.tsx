import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axiosCommon from "../utils/axios_common";
import BarLoader from "../components/common/BarLoader";
import EditBannerForm from "../components/dashboard/promotions/EditBannerForm";
import AddBannerForm from "../components/dashboard/promotions/AddBannerForm";
import banner_props from "../types/banner_props";
import { toast } from "sonner";

// Fetch banners data
const fetchBanners = async () => {
  const { data } = await axiosCommon.get("/banners");
  return data;
};

// Update banner data
const updateBanner = async (banner: banner_props) => {
  const { data } = await axiosCommon.put(`/banners/${banner.id}`, banner);
  return data;
};

const Promotions = () => {
  const { data: banners = [], error, isLoading, isError, refetch } = useQuery<banner_props[]>({
    queryKey: ["banners"],
    queryFn: fetchBanners,
  });

  const { mutateAsync: updateBannerMutate } = useMutation({
    mutationFn: updateBanner,
    onSuccess: () => {
      refetch();
      toast.success("Banner updated successfully!");
    },
    onError: (error) => {
      toast.error("Failed to update banner.");
      console.error("Error updating banner:", error);
    },
  });

  const [editingBannerId, setEditingBannerId] = useState<number | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<Partial<banner_props & { image: string | File }>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleEditClick = (banner: banner_props) => {
    setEditingBannerId(banner.id ? Number(banner.id) : null);
    setFormData(banner);
    setPreviewImage(typeof banner.image === "string" ? banner.image : null);
  };

  const handleDeleteClick = async (bannerId: number) => {
    try {
      await axiosCommon.delete(`/banners/${bannerId}`);
      refetch();
      toast.success("Banner deleted successfully!");
    } catch (error) {
      setErrorMessage("Error deleting banner. Please try again.");
      toast.error("Failed to delete banner.");
      console.error("Error deleting banner:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingBannerId(null);
    setFormData({});
    setPreviewImage(null);
  };

  const handleCancelAddBanner = () => {
    setShowAddForm(false); // Close the add form
  };


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BarLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-2.5 text-red-500">
        <p>Error loading banners: {error instanceof Error ? error.message : "Unknown error"}</p>
      </div>
    );
  }

  return (
    <div>
      {errorMessage && (
        <div className="text-red-500 mb-4">
          <p>{errorMessage}</p>
        </div>
      )}

      {editingBannerId && (
        <EditBannerForm
          formData={formData}
          previewImage={previewImage}
          onInputChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
          onFileChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreviewImage(URL.createObjectURL(file));
              setFormData({ ...formData, image: file });
            }
          }}
          onSubmit={async (e) => {
            e.preventDefault();
            if (formData.title && formData.description && formData.link) {
              await updateBannerMutate(formData as banner_props);
              setEditingBannerId(null); // Close the form after update
            } else {
              setErrorMessage("Please fill in all fields.");
            }
          }}
          onCancel={handleCancelEdit} // Add cancel button functionality
        />
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Banner List</h2>
          <button
            onClick={() => setShowAddForm((prev) => !prev)}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            {showAddForm ? "Close Add Banner Form" : "Add Banner"}
          </button>
        </div>

        {showAddForm && (
          <AddBannerForm
            onSuccess={() => {
              refetch();
              setShowAddForm(false);
              toast.success("Banner added successfully!");
            }}
            onCancel={handleCancelAddBanner} // Pass the cancel function here
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div key={banner.id} className="p-5 border rounded">
              <img
                src={`${banner.image}`}
                alt={banner.title}
                className="w-full object-cover h-40 mb-4 rounded"
              />
              <h3 className="font-semibold">{banner.title}</h3>
              <p className="text-sm text-gray-500">{banner.description}</p>
              <div className="mt-4 flex space-x-2">
                <button
                  onClick={() => handleEditClick(banner)}
                  className="bg-yellow-500 text-white py-1.5 px-5 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(Number(banner.id))}
                  className="bg-red-500 text-white py-1.5 px-5 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
