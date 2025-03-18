interface CardComponentProps {
    title: string;
    text: string;
}

export default function CardComponent({title, text}: CardComponentProps) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-lg border-l-5 border-[#FFD166]">
            <h3 className="text-2xl font-semibold pb-1.5">{title}</h3>
            <p>{text}</p>
        </div>
    );
}