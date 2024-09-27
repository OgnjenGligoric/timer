import React from 'react';
import "./Button.css"
interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
