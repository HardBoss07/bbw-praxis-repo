interface PlayerInterface {
    Vorname: string;
    Nachname: string;
    Position: string;
}

export default function Introduction() {
    const players: PlayerInterface[] = [
        { Vorname: "Matteo", Nachname: "Bosshard", Position: "Torwart" },
        { Vorname: "Louis", Nachname: "Müller", Position: "Rechter Flügel" },
        { Vorname: "Marco", Nachname: "Keller", Position: "Linker Flügel" },
        { Vorname: "Jannis", Nachname: "Schmid", Position: "Mitte" },
    ];

    return (
        <div className="p-6 flex justify-center">
            <div className="overflow-x-auto w-full max-w-xl">
                <p className="text-xl font-bold mb-4 text-center">Wir stellen uns vor:</p>
                <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-200 text-left">
                    <tr>
                        <th className="py-2 px-4 border-b">Vorname</th>
                        <th className="py-2 px-4 border-b">Nachname</th>
                        <th className="py-2 px-4 border-b">Position</th>
                    </tr>
                    </thead>
                    <tbody>
                    {players.map((player, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition duration-200">
                            <td className="py-2 px-4 border-b">{player.Vorname}</td>
                            <td className="py-2 px-4 border-b">{player.Nachname}</td>
                            <td className="py-2 px-4 border-b">{player.Position}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}