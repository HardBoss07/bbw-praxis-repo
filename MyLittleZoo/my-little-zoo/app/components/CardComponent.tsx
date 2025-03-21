interface CardComponentProps {
    title: string;
    text: string;
    image?: string;
}

export default function CardComponent({ title, text, image }: CardComponentProps) {
    return (
        <div
            className={`bg-white rounded-xl p-6 shadow-lg border-l-5 border-[#FFD166] 
            ${image ? 'flex flex-row items-start' : 'flex flex-col items-start'}`}
        >
            <div className={`flex flex-col ${image ? 'lg:w-2/3' : 'w-full'}`}>
                <h3 className="text-2xl font-semibold pb-1.5">{title}</h3>
                <p>{text}</p>
            </div>

            {image && (
                <div className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-6 flex-shrink-0">
                    <img
                        src={`/assets/${image}`}
                        alt={title}
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            )}
        </div>
    );
}
