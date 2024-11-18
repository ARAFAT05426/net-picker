interface PaginationButtonProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string; // Optional className for styling
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((page) => (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`px-3.5 py-1 rounded-sm mx-1 ${
          page === currentPage
            ? "bg-primary text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
      >
        {page}
      </button>
    ));
  };

  return (
    <div className={`flex items-center justify-center space-x-2.5 text-sm ${className}`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3.5 py-1 rounded-sm bg-gray-200 text-gray-800 tracking-widest hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>

      {renderPageNumbers()}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-sm bg-gray-200 text-gray-800 tracking-widest hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
