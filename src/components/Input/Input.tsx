import React from "react";
import "./Input.scss";

export interface InputProps {
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({
    value,
    onChange,
    placeholder = "",
    disabled = false,
    className = "",
    type = "text",
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    return (
        <input
            type={type}
            className={`my-input ${className}`}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

export default Input;