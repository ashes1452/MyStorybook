import React, { useState } from "react"
import "./Tabs.scss"

export type TabItem = {
    label: string
    key: string
    disabled?: boolean
}

export interface TabsProps {
    items: TabItem[]
    defaultActiveKey?: string
    onChange?: (key: string) => void
}

const Tabs: React.FC<TabsProps> = ({
    items,
    defaultActiveKey,
    onChange,
}) => {
    const [activeKey, setActiveKey] = useState(
        defaultActiveKey || items[0]?.key
    )

    const handleClick = (key: string, disabled?: boolean) => {
        if (disabled) return
        setActiveKey(key)
        onChange?.(key)
    }

    return (
        <div className="my-tabs">
            {items.map((item) => (
                <div
                    key={item.key}
                    className={`my-tab
            ${activeKey === item.key ? "my-tab-active" : ""}
            ${item.disabled ? "my-tab-disabled" : ""}
          `}
                    onClick={() => handleClick(item.key, item.disabled)}
                >
                    {item.label}
                </div>
            ))}
        </div>
    )
}

export default Tabs