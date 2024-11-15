import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

interface CustomDropdownProps {
    options: string[];
    onSelect: (selectedOption: string | null) => void; // Allow null selection for deselect
    placeholder?: string;
    className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
    options,
    onSelect,
    className = "",
    placeholder = "Select an option"
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const firstOptionRef = useRef<HTMLLIElement>(null);

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
            firstOptionRef.current.focus(); // Focus the first option when the dropdown opens
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option); // Notify parent about selection
        setIsOpen(false);
    };

    const handleRemoveSelection = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent closing dropdown when deselecting
        setSelectedOption(null);
        onSelect(null); // Notify parent about deselection
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" && isOpen) {
            event.preventDefault();
            const focusedOption = document.activeElement as HTMLElement;
            if (focusedOption && focusedOption.dataset.option) {
                handleOptionSelect(focusedOption.dataset.option);
            }
        }
        if (event.key === "Escape") setIsOpen(false);
        if (event.key === "ArrowDown" && isOpen) {
            const nextOption = (document.activeElement?.nextElementSibling as HTMLElement) ?? dropdownRef.current?.firstElementChild;
            nextOption?.focus();
        }
        if (event.key === "ArrowUp" && isOpen) {
            const prevOption = (document.activeElement?.previousElementSibling as HTMLElement) ?? dropdownRef.current?.lastElementChild;
            prevOption?.focus();
        }
    };

    return (
        <div className={`${className} relative w-full`} ref={dropdownRef}>
            <button
                ref={buttonRef}
                className="w-full px-3.5 py-2 border rounded-sm tracking-wider text-nowrap text-left flex justify-between items-center"
                onClick={toggleDropdown}
                onKeyDown={handleKeyDown}
                aria-haspopup="listbox"
                aria-expanded={isOpen ? "true" : "false"}
            >
                <span className="text-sm md:text-base flex-1">{selectedOption || placeholder}</span>
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
                    className="absolute w-full mt-1 bg-white border rounded-sm max-h-60 overflow-y-auto z-10"
                    role="listbox"
                    aria-activedescendant={selectedOption ?? undefined}
                >
                    {options.map((option, index) => (
                        <li
                            key={index}
                            ref={index === 0 ? firstOptionRef : null}
                            data-option={option}
                            onClick={() => handleOptionSelect(option)}
                            className="text-xs md:text-sm tracking-widest px-3 py-2 cursor-pointer hover:bg-gray-200 focus:bg-gray-300"
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
