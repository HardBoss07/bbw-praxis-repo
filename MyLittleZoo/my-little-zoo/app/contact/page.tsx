import NavBarComponment from "@/app/components/NavBarComponent";
import FooterComponent from "@/app/components/FooterComponent";
import ContactFormComponent from "@/app/components/ContactFormComponent";
import VisitUsComponent from "@/app/components/VisitUsComponent";
import HoursComponent from "@/app/components/HoursComponent";

export default function Home() {
    const hoursData = [
        { day: "Monday", hours: "8AM - 8PM" },
        { day: "Tuesday", hours: "9AM - 9PM" },
        { day: "Wednesday", hours: "10AM - 6PM" },
        { day: "Thursday", hours: "8AM - 8PM" },
        { day: "Friday", hours: "9AM - 9PM" },
        { day: "Saturday", hours: "10AM - 10PM" },
        { day: "Sunday", hours: "Closed" },
    ];

    return (
        <>
            <header>
                <NavBarComponment currentPage={2}/>
            </header>
            <main>
                <VisitUsComponent />
                <HoursComponent dailyHours={hoursData} note="Extended Hours during full moons" />
                <ContactFormComponent />
            </main>
            <footer>
                <FooterComponent/>
            </footer>
        </>
    );
}