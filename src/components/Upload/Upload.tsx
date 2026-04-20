import React, { useRef } from "react";
import "./Upload.scss";

export interface UploadProps {
    accept?: string;
    multiple?: boolean;
    text?: string;
    onChange?: (files: FileList | null) => void;
}

const Upload: React.FC<UploadProps> = ({
    accept = "*",
    multiple = false,
    text = "点击上传文件",
    onChange,
}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.files);
    };

    return (
        <div
            className={`my-upload`}
            onClick={handleClick}
        >
            <input
                ref={inputRef}
                type="file"
                className="my-upload-input"
                accept={accept}
                multiple={multiple}
                onChange={handleChange}
            />
            {text}
        </div>
    );
};

export default Upload;