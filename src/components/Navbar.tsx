import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link href="/" className="text-white hover:underline">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="#about" className="text-white hover:underline">
                        Sobre Nosotros
                    </Link>
                </li>
                <li>
                    <Link href="#contact" className="text-white hover:underline">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
