import React from 'react';
import "./Button.css";

interface ButtonProps {
    onClick?: () => void; // Method which you want to execute on click.
    disabled?: boolean; // Ability to enable and disable the button
    children: React.ReactNode; // HTML elements in button (text, icons...)
    type?: "button" | "submit" | "reset"; // Additional functionality useful for form buttons.
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children, type = "button" }) => { // Default type to "button"
    return (
        <button onClick={onClick} disabled={disabled} type={type}>
            {children}
        </button>
    );
};

export default Button;
