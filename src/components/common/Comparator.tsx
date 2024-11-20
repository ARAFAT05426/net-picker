import { IoIosClose } from "react-icons/io";
import { useProvider } from "../../contexts/ContextProvider";

const Comparator: React.FC = () => {
    const { compareList, removeFromCompare, isCompareModalOpen, closeCompareModal } = useProvider();

    const handleRemove = (item: any) => {
        removeFromCompare(item);
    };

    // Render the modal only if the modal is open
    if (!isCompareModalOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300">
            <div className="relative bg-white rounded w-11/12 sm:w-4/5 lg:w-3/5 p-5 overflow-auto max-h-[75vh]">
                <button
                    onClick={closeCompareModal}
                    className="absolute top-2.5 right-2.5 text-secondary/50 hover:text-secondary transition duration-300"
                >
                    <IoIosClose size={27.5} />
                </button>

                {compareList.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No products to compare.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse tracking-widest border border-gray-300">
                            <thead>
                                <tr className="bg-gray-100">
                                    <td className="border border-gray-300 p-4 font-medium">Images</td>
                                    {compareList.map((item) => (
                                        <td key={item.id} className="border border-gray-300 p-4">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={item.image_url}
                                                    alt={item.name}
                                                    className="w-16 h-16 object-cover rounded-md mb-2 sm:w-20 sm:h-20"
                                                />
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 p-4 font-medium">Price</td>
                                    {compareList.map((item) => (
                                        <td
                                            key={item.id}
                                            className="border border-gray-300 p-4 text-center text-green-600 font-semibold"
                                        >
                                            ${item.price}
                                        </td>
                                    ))}
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 p-4 font-medium">Rating</td>
                                    {compareList.map((item) => (
                                        <td key={item.id} className="border border-gray-300 p-4 text-center">
                                            {item.rating} ⭐
                                        </td>
                                    ))}
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-300 p-4 font-medium">Actions</td>
                                    {compareList.map((item) => (
                                        <td key={item.id} className="border border-gray-300 p-4 text-center">
                                            <button
                                                onClick={() => handleRemove(item)}
                                                className="bg-red-500 text-white tracking-widest py-1 px-3 rounded-sm hover:bg-red-600 transition duration-300"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Comparator;
