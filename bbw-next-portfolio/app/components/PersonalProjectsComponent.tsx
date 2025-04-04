interface ProjectCardComponentProps {
    title: string;
    image: string;
    link: string;
}

export default function PersonalProjects() {
    const projectsData: ProjectCardComponentProps[] = [
        { title: "Project 1", image: "project1.jpg", link: "https://project1.com" },
        { title: "Project 2", image: "project2.jpg", link: "https://project2.com" },
        { title: "Project 3", image: "project3.jpg", link: "https://project3.com" }
    ];

    return (
        <main>
            <h3>My Personal Projects</h3>
            <div>
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h4>{project.title}</h4>
                        <img src={project.image} alt={project.title}/>
                        <a href={project.link}>
                            More Details
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}