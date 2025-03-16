interface InputComponentProps {
    type: "text" | "email" | "textarea";
    placeholder: string;
    required: boolean;
}

export default function InputComponent({type, placeholder, required}: InputComponentProps) {
    if (type === "textarea") {
        return (
            <textarea
                placeholder={placeholder}
                required={required}
                className="p-3 border-2 border-gray-300 rounded-md text-lg transition focus:border-blue-500 focus:ring-4 focus:ring-blue-300"
            />
        );
    }
    return (
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="p-3 border-2 border-gray-300 rounded-md text-lg transition focus:border-blue-500 focus:ring-4 focus:ring-blue-300"
      />
    );
}