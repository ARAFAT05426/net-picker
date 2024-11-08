import type { FC } from 'react';

interface ToggleBtnProps {
    isActive: boolean;
    toggleActive: () => void;
    classname?: string;
}

const ToggleBtn: FC<ToggleBtnProps> = ({ isActive, toggleActive, classname }: ToggleBtnProps) => {
    return (<button
        onClick={() => toggleActive()}
        className={`${classname} relative flex md:hidden flex-col items-center justify-between h-5 w-7 group focus:outline-none overflow-hidden`}
        aria-label="Toggle navigation menu"
        role="button"
    >
        {/* Top line */}
        <span
            className={`h-0.5 w-full rounded-2xl bg-primary transition-all duration-500 ease-in-out transform origin-bottom-right 
                ${isActive ? 'rotate-[-43.5deg]' : ''}`}
        />
        {/* Middle line (fades out when toggled) */}
        <span
            className={`h-0.5 w-full rounded-2xl bg-primary transition-opacity duration-300 ease-in-out 
                ${isActive ? 'opacity-0' : 'opacity-100 '}`}
        />
        {/* Bottom line */}
        <span
            className={`h-0.5 w-full rounded-2xl bg-primary transition-all duration-500 ease-in-out transform origin-top-right 
                ${isActive ? 'rotate-[43.5deg]' : ''}`}
        />
    </button>);
}
export default ToggleBtn;