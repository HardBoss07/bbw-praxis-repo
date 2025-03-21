import NavBarComponment from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";
import CardComponent from "@/app/components/CardComponent";

export default function Home() {
    return (
        <>
            <header>
                <NavBarComponment currentPage={1}/>
            </header>
            <main>
                <CardComponent title="Test animal" text="test animal description" image="img.png" />
            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
}