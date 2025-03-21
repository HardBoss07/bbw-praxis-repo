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
                    <h2 className="text-3xl font-bold mb-1.5">Welcome to BBW Reptile House</h2>
                    <p>Welcome to the Reptile House – a vibrant world of scales, slithers, and surprises! Step inside and discover an incredible variety of reptiles from around the globe, from majestic snakes and ancient tortoises to colorful lizards and elusive crocodilians. Whether you're a curious explorer or a lifelong reptile fan, our exhibits offer an up-close look at these fascinating creatures in habitats designed to mimic their natural environments. Come face to face with nature’s most unique survivors!</p>
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
