import NavBarComponment from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";

export default function Home() {
    return (
        <>
            <header>
                <NavBarComponment currentPage={3}/>
            </header>
            <main>

            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
}