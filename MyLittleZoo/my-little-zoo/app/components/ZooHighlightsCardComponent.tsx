import CardComponent from "@/app/components/CardComponent";

interface CardComponentProps {
    title: string;
    text: string;
}

export default function ZooHighlightsCardComponent() {
    const highlightData = [
        {title: "Mythical Creatures", text: "From majestic unicorns to fiery dragons, our mythical creatures will transport you to a world of fantasy."},
        {title: "Rare Animals", text: "Discover rare and endangered species, each with a unique story and a dedicated conservation program."},
        {title: "Interactive Exhibits", text: "Engage with our animals through interactive exhibits and educational programs designed for all ages."}
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 pt-5">
            {highlightData.map((entry) => (
                <CardComponent key={entry.title} title={entry.title} text={entry.text} />
            ))}
        </div>
    )
}