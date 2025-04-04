import Image from "next/image";
import HeaderComponent from "@/app/components/HeaderComponent";
import FooterComponent from "@/app/components/FooterComponent";

export default function Home() {
    return (
        <div>
            <HeaderComponent currentPage={0} />
            <main>
                <h2 className="text-center mb-4">Über mich:</h2>
                <p className="text-block font-medium text-[#333]">
                    Ich besuche die Informatikmittelschule seit August 2024. Ich nutze diese Webseite um meine Fähigkeiten als Applikationsentwickler zu demonstrieren. Hier findet man eine Reihe an Projekte, an denen ich in meiner Freizeit und im Praxis-Unterricht arbeite.
                </p>
            </main>
            <FooterComponent />
        </div>
    );
}
