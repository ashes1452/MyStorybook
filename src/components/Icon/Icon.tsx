import React from "react";
import "./Icon.scss";

export type IconType =
    | "home"
    | "user"
    | "setting"
    | "search"
    | "check"
    | "close"
    | "down"
    | "up";

export interface IconProps {
    type: IconType;
    size?: number;
    color?: string;
    disabled?: boolean;
    className?: string;
}

const Icon: React.FC<IconProps> = ({
    type,
    size = 16,
    color = "#333",
    disabled = false,
    className = "",
}) => {
    return (
        <span
            className={`my-icon ${disabled ? "my-icon-disabled" : ""} ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                color: color,
            }}
        >
            {renderIcon(type)}
        </span>
    );
};

// 简单图标用文字/符号代替，也可以换成 SVG
function renderIcon(type: IconType) {
    switch (type) {
        case "home":
            return <>⌂</>;
        case "user":
            return <>👤</>;
        case "setting":
            return <>⚙</>;
        case "search":
            return <>🔍</>;
        case "check":
            return <>✓</>;
        case "close":
            return <>✕</>;
        case "down":
            return <>▼</>;
        case "up":
            return <>▲</>;
        default:
            return null;
    }
}

export default Icon;