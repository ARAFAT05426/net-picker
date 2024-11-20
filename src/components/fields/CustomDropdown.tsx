import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

interface CustomDropdownProps {
  options: string[];
  onSelect: (selectedOption: string | null) => void;
  placeholder?: string;
  className?: string;
  selected?: string | null; // Allow null explicitly
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  onSelect,
  className = "",
  placeholder = "Select an option",
  selected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    selected || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const firstOptionRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setSelectedOption(selected || null);
  }, [selected]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && firstOptionRef.current) {
      firstOptionRef.current.focus();
    }
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleRemoveSelection = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSelectedOption(null);
    onSelect(null);
  };

  return (
    <div className={`${className} relative w-full`} ref={dropdownRef}>
      <button
        className="w-full px-3 py-2 border rounded-sm tracking-wider text-left flex justify-between items-center sm:px-3.5 sm:py-2.5"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="text-xs sm:text-sm tracking-widest text-nowrap flex-1">{selectedOption || placeholder}</span>
        {selectedOption ? (
          <FaTimes
            onClick={handleRemoveSelection}
            className="ml-2 cursor-pointer text-gray-600"
            aria-label="Deselect option"
          />
        ) : (
          <IoIosArrowDown className="ml-2 text-gray-600" />
        )}
      </button>

      {isOpen && (
        <ul
          className="absolute w-full mt-1 bg-white border rounded-sm max-h-48 overflow-y-auto z-20 shadow-lg text-sm sm:text-xs"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={index}
              ref={index === 0 ? firstOptionRef : null}
              data-option={option}
              onClick={() => handleOptionSelect(option)}
              className="px-4 py-2 tracking-wider cursor-pointer hover:bg-gray-200 sm:px-3 sm:py-2"
              tabIndex={0}
              role="option"
              aria-selected={selectedOption === option ? "true" : "false"}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
