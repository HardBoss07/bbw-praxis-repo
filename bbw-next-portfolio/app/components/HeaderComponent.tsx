interface HeaderProps {
    currentPage: number;
}

export default function HeaderComponent({ currentPage }: HeaderProps) {
    const navItems = ["Home", "Projects"];

    return (
        <header className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-6 text-center shadow-md">
            <h1>BBW Next Portfolio</h1>
            <nav>
                <ul className="flex justify-center gap-6 text-white">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a
                                href={`${index === 0 ? "../" : item.toLowerCase()}`}
                                className={`text-lg font-medium transition-colors duration-300 ${
                                    currentPage === index
                                        ? "text-yellow-400"
                                        : "text-white hover:text-yellow-400 hover:no-underline"
                                }`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}