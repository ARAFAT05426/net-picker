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
            className={`w-full px-6 py-2.5 rounded-sm text-white tracking-widest uppercase bg-secondary transition-all ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};

export default ActionBtn;
