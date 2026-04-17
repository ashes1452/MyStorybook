import React, { useState } from "react"
import './Menu.scss'

export type MenuMode = 'horizontal' | 'vertical'

export type MenuItem = {
    label: string
    key: string
    disabled?: boolean
    children?: MenuItem[]
}

export interface MenuProps {
    mode?: MenuMode
    items: MenuItem[]
    onClick?: (key: string) => void
}

const Menu: React.FC<MenuProps> = ({
    mode = 'horizontal',
    items,
    onClick,
}) => {
    const [selectedKey, setSelectedKey] = useState<string>()
    const [openSubKey, setOpenSubKey] = useState<string | null>(null)


    const handleClick = (item: MenuItem, isSubItem: boolean = false) => {
        if (item.disabled) return

        if (isSubItem || !item.children) {
            setSelectedKey(item.key)
            onClick?.(item.key)
        }
    }

    return (
        <ul className={`my-menu my-menu-${mode}`}>
            {items.map((item) => (
                <li
                    key={item.key}
                    className={`
                        my-menu-item
                        ${item.disabled ? 'my-menu-item-disabled' : ''}
                        ${!item.children && selectedKey === item.key ? 'my-menu-item-selected' : ''}
                    `}
                    onClick={() => handleClick(item)}
                    onMouseEnter={() => item.children && setOpenSubKey(item.key)}
                    onMouseLeave={() => setOpenSubKey(null)}
                >
                    {item.label}

                    {item.children && openSubKey === item.key && (
                        <ul className="my-sub-menu">
                            {item.children.map((subItem) => (
                                <li
                                    key={subItem.key}
                                    className={`
                                        my-sub-item
                                        ${subItem.disabled ? 'my-sub-item-disabled' : ''}
                                        ${selectedKey === subItem.key ? 'my-menu-item-selected' : ''}
                                    `}
                                    onClick={() => handleClick(subItem, true)}
                                >
                                    {subItem.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default Menu