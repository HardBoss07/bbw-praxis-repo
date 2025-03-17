export default function VisitUsComponent() {
    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg grid gap-4">
            <h2 className="text-2xl font-bold text-center">Visit Us</h2>
            <article>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <address className="not-italic text-gray-700 leading-relaxed">
                    123 Magic Lane<br />
                    Fantasyland, FL 12345<br />
                    Coordinates: 43.2345° N, 12.3456° W
                </address>
            </article>
        </div>
    );
}