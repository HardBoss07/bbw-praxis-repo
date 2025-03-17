import DailyHoursComponent from "@/app/components/DailyHoursComponent";

interface DailyHours {
    day: string;
    hours: string;
}

interface HoursComponentProps {
    dailyHours: DailyHours[];
    note?: string;
}

export default function HoursComponent({dailyHours, note}: HoursComponentProps) {
    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg grid gap-4">
            <h3 className="text-xl font-semibold">Opening Hours</h3>
            <article>
                <div className="grid gap-1 mb-2">
                    {dailyHours.map((entry) => (
                        <DailyHoursComponent key={entry.day} day={entry.day} hours={entry.hours}/>
                    ))}
                </div>
                {note && <p className="text-gray-700">{note}</p>}
            </article>
        </div>
    );
}