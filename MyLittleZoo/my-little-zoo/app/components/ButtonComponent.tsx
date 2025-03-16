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
        className="bg-[#1E90FF] text-white py-4 px-8 rounded-md text-base font-bold cursor-pointer transition duration-300 ease-in-out hover:bg-[#1277DD] hover:scale-105"
      >
          {label}
      </button>
    );
}