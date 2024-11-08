import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';

interface ActionBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

const ActionBtn: FC<ActionBtnProps> = ({ type = "button", onClick, children, className, ...rest }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded text-white bg-secondary hover:bg-secondary-dark transition ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ActionBtn;
