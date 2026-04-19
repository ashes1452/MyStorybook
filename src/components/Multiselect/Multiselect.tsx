import React, { useState } from "react"
import "./Multiselect.scss"
import { background } from "storybook/theming"

export type Option = {
    label: string
    value: string
    disabled?: boolean

}

export interface MultiselectProps {
    options: Option[]
    defaultValue?: string[]
    bordercolor?: string
    backgroundColor?: string
    onChange?: (values: string[]) => void
}

const Multiselect: React.FC<MultiselectProps> = ({
    options,
    defaultValue = [],
    bordercolor = "#85cff9",
    backgroundColor = "#b9d9f5",
    onChange,
}) => {
    const [selected, setSelected] = useState<string[]>(defaultValue)

    const toggle = (value: string, disabled?: boolean) => {
        if (disabled) return

        const next = selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value]

        setSelected(next)
        onChange?.(next)
    }

    return (
        <div className="my-multiselect" style={{ borderColor: bordercolor, backgroundColor: backgroundColor }}>
            {options.map((opt) => (
                <label key={opt.value} className="my-multi-item">
                    <input
                        type="checkbox"
                        className="my-multi-checkbox"
                        checked={selected.includes(opt.value)}
                        disabled={opt.disabled}
                        onChange={() => toggle(opt.value, opt.disabled)}
                    />
                    <span className="my-multi-label">{opt.label}</span>
                </label>
            ))}
        </div>
    )
}

export default Multiselect