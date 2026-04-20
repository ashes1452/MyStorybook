import React, { useState, useEffect } from "react";
import "./Select.scss";

export type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};

export interface SelectProps {
    options: Option[];
    value?: string[];
    placeholder?: string;
    disabled?: boolean;
    onChange?: (value: string[]) => void;
    mode?: "multiple" | "single";
}

const Select: React.FC<SelectProps> = ({
    options,
    value = [],
    placeholder = "请选择",
    disabled = false,
    onChange,
    mode = "single",
}) => {
    const [selectedValues, setSelectedValues] = useState<string[]>(value);
    const [open, setOpen] = useState(false);

    // 同步外部 value（表单传入）
    useEffect(() => {
        setSelectedValues(value);
    }, [value]);

    const handleSelect = (val: string, dis?: boolean) => {
        if (dis) return;

        let newValues: string[];
        if (mode === "multiple") {
            newValues = selectedValues.includes(val)
                ? selectedValues.filter((v) => v !== val)
                : [...selectedValues, val];
        } else {
            newValues = [val];
            setOpen(false);
        }

        setSelectedValues(newValues);
        onChange?.(newValues);
    };

    const selectedLabels = options
        .filter((opt) => selectedValues.includes(opt.value))
        .map((opt) => opt.label);

    return (
        <div className="my-select-wrap">
            <div
                className={`my-select ${disabled ? "my-select-disabled" : ""}`}
                onClick={() => !disabled && setOpen(!open)}
            >
                {selectedLabels.length > 0 ? (
                    <div className="my-select-tags">{selectedLabels.join("，")}</div>
                ) : (
                    placeholder
                )}
                <span className="my-select-arrow">▼</span>
            </div>

            {open && !disabled && (
                <div className="my-select-dropdown">
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            className={`my-select-option 
                ${opt.disabled ? "my-select-option-disabled" : ""}
                ${selectedValues.includes(opt.value) ? "my-select-option-selected" : ""}
              `}
                            onClick={() => handleSelect(opt.value, opt.disabled)}
                        >
                            {opt.label}
                            {mode === "multiple" && selectedValues.includes(opt.value) && (
                                <span className="my-select-check">√</span>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select;