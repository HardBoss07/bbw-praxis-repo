interface NavBarProps {
    currentPage: number;
}

export default function NavBar({ currentPage }: NavBarProps) {
    const navItems = ["Home", "Animals", "Contact", "About"];

    return (
        <nav>
            <ul className="list-none p-0 my-4 flex gap-6">
                {navItems.map((item, index) => (
                    <li key={index}>
                        <a
                            href={`${index === 0 ? "../" : item.toLowerCase()}`}
                            className={`text-lg font-bold no-underline transition-colors duration-300 ease-in-out ${
                                currentPage === index ? "text-[#FFD166]" : "text-white hover:text-[#FFD166]"
                            }`}
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
