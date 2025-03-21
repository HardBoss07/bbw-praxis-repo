import CardComponent from "@/app/components/CardComponent";

interface CardComponentProps {
    title: string;
    text: string;
}

export default function ZooHighlightsCardComponent() {
    const highlightData = [
        {title: "Diverse Reptile Collection", text: "Explore an incredible range of reptiles, from vibrant chameleons to powerful boas, all under one roof."},
        {title: "Naturalistic Habitats", text: "Our carefully designed enclosures replicate natural environments, ensuring our reptiles thrive and guests get an authentic experience."},
        {title: "Family-Friendly Fun", text: "With interactive displays, educational info, and close-up encounters, there’s something to spark curiosity in every age group."}
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-8 pt-5">
            {highlightData.map((entry) => (
                <CardComponent key={entry.title} title={entry.title} text={entry.text} />
            ))}
        </div>
    )
}