export default function VisitUsComponent() {
    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg grid gap-4">
            <h2 className="text-2xl font-bold text-center">Visit Us</h2>
            <article>
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <address className="not-italic text-gray-700 leading-relaxed">
                    Pionierstrasse 28<br/>
                    Winterthur, 8400<br/>
                    Switzerland<br/>
                    Coordinates: 47°29'53.3"N, 8°43'11.1"E
                </address>
                <div className="mt-3 rounded-lg overflow-hidden border border-gray-300 shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d596.0196140692607!2d8.720266206436117!3d47.498037144163014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a997124b3a3c9%3A0x5987fd36c95768e7!2sBerufsbildungsschule%20Winterthur%3A%20Abteilung%20Informatik!5e0!3m2!1sde!2sch!4v1742544049226!5m2!1sde!2sch"
                        className="w-full h-64 md:h-80"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe>
                </div>
            </article>
        </div>
    );
}