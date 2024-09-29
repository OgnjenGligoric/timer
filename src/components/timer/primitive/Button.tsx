import React from 'react';
import "./Button.css";

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, type = "button" }) => { // Default type to "button"
    return (
        <button onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

export default Button;
