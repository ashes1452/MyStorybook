import React, { useState } from 'react'
import './Alert.scss'

export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
    type: AlertType
    message: string
    description?: string
    closable?: boolean
    onClose?: () => void
}

const Alert: React.FC<AlertProps> = ({
    type,
    message,
    description,
    closable = false,
    onClose,
}) => {
    const [visible, setVisible] = useState(true)

    const handleClose = () => {
        setVisible(false)
        onClose?.()
    }

    if (!visible) return null

    return (
        <div className={`my-alert my-alert-${type}`}>
            <div className="my-alert-content">
                <div className="my-alert-message">{message}</div>
                {description && (
                    <div className="my-alert-description">{description}</div>
                )}
            </div>

            {closable && (
                <button className="my-alert-close" onClick={handleClose}>
                    ×
                </button>
            )}
        </div>
    )
}

export default Alert