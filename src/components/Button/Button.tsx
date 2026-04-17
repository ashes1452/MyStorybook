import React from 'react'
import './Button.scss'

export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
    type?: ButtonType
    size?: ButtonSize
    message: string
    disabled?: boolean
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
    type,
    size,
    message,
    disabled = false,
    onClick,
}) => {
    return (
        <button className={`my-button my-button-${type} my-button-${size} ${disabled ? 'my-button-disabled' : ''
            }`} onClick={onClick} disabled={disabled}>
            {message}
        </button>
    )
}

export default Button
