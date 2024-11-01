import React from 'react';

interface ActionBtnProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string; 
}

const ActionBtn: React.FC<ActionBtnProps> = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`relative inline-block px-8 py-3 font-semibold group ${className}`} // Allow additional classes
        >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-0 translate-y-0 bg-black group-hover:translate-x-1 group-hover:translate-y-1"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black"></span>
            <span className="relative text-black text-lg">{children}</span>
        </button>
    );
};

export default ActionBtn;
