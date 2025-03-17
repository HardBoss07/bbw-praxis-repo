interface DailyHoursProps {
    day: string;
    hours: string;
}

export default function DailyHoursComponent({day, hours}: DailyHoursProps) {
    return (
        <div className="flex justify-between text-gray-700">
            <span className="font-medium">{day}:</span>
            <span>{hours}</span>
        </div>
    );
}