interface NavBarProps {
    currentPage: number;
}

export default function NavBarComponment({ currentPage }: NavBarProps) {
    const navItems = ["Home", "Animals", "Contact", "About"];

    return (
        <div className="bg-[#FF6B6B] p-7 pb-1.5 shadow-md">
            <h1 className="text-4xl font-bold text-white">MyLittleZoo</h1>
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
        </div>
    );
}
