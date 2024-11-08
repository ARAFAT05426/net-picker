import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkBtnProps {
    to: string;
    children: ReactNode;
    className?: string;
}

const LinkBtn: FC<LinkBtnProps> = ({ to, children, className }) => {
    return (
        <Link
            to={to}
            className={`px-5 py-1.5 md:px-8 md:py-2.5 rounded-sm text-white tracking-wider font-semibold bg-primary hover:bg-primary-dark transition ${className}`}
        >
            {children}
        </Link>
    );
};

export default LinkBtn;
