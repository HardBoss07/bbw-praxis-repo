import HeaderComponent from "@/app/components/HeaderComponent";
import FooterComponent from "@/app/components/FooterComponent";
import PersonalProjects from "@/app/components/PersonalProjectsComponent";
import BBWProjects from "@/app/components/BBWProjectsComponent";

export default function Projects() {
    return (
        <div>
            <HeaderComponent currentPage={1} />
            <PersonalProjects />
            <BBWProjects />
            <FooterComponent />
        </div>
    );
}