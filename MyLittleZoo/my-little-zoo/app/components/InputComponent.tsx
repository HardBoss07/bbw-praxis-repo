import React from "react";

interface InputComponentProps {
    type: "text" | "email" | "textarea";
    placeholder: string;
    required: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputComponent({type, placeholder, required, value, onChange}: InputComponentProps) {
    const baseStyle = "p-3 border-2 border-gray-300 rounded-md text-lg transition focus:border-blue-500 focus:ring-4 focus:ring-blue-300";

    if (type === "textarea") {
        return (
            <textarea
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                className={baseStyle}
            />
        );
    }
    return (
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={baseStyle}
      />
    );
}