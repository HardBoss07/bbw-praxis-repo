import NavBar from "@/app/components/NavBarComponent";
import Footer from "@/app/components/FooterComponent";

export default function Home() {
    return (
        <>
            <header>
                <NavBar currentPage={1}/>
            </header>
            <main>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}