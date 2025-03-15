interface ButtonComponentProps {
    type: "button" | "submit" | "reset";
    label: string;
    onClick: () => void;
}

export default function ButtonComponent({type, label, onClick}: ButtonComponentProps) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white text-lg rounded-md transition duration-300 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
          {label}
      </button>
    );
}