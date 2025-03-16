import NavBarComponment from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";
import ContactFormComponent from "@/app/components/ContactFormComponent";

export default function Home() {
    return (
        <>
            <header>
                <NavBarComponment currentPage={2}/>
            </header>
            <main>
                <ContactFormComponent />
            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
}