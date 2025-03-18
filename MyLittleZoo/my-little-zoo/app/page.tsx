import NavBarComponment from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";
import CardComponent from "@/app/components/CardComponent";
import ZooHighlightsCardComponent from "@/app/components/ZooHighlightsCardComponent";

export default function Home() {
    return (
        <>
            <header>
                <NavBarComponment currentPage={0}/>
            </header>
            <main>
                <section className="mb-5">
                    <h2 className="text-3xl font-bold mb-1.5">Welcome to MyLittleZoo</h2>
                    <p>Step into a world where magic and nature come together. MyLittleZoo is home to a unique collection of mythical creatures and rare animals, all living in carefully designed habitats. Whether you're here to learn, explore, or simply enjoy the wonder, we promise an unforgettable experience.</p>
                </section>
                <section className="mb-5">
                    <h2 className="text-3xl font-bold mb-2">What makes us special</h2>
                    <ZooHighlightsCardComponent />
                </section>
            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
}
