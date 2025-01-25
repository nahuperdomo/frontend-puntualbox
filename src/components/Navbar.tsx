import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-8">
            <div className="flex items-center justify-between space-x-2">
                <h1 className="text-3xl font-bold mb-6 leading-tight text-yellow-300"><a href="/">ExactDrop</a></h1>
                <ul className="flex justify-center space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-yellow-300 hover:underline">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-white hover:text-yellow-300 hover:underline">
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-white hover:text-yellow-300 hover:underline">
                            Contacto
                        </Link>
                    </li>
                </ul>
                <div className="flex space-x-4">
                    <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded hover:bg-gray-200">
                        <Link href="/register">
                            Registrarse
                        </Link>
                    </button>
                    <button className="bg-yellow-300 text-blue-500 px-8 py-3 font-bold rounded-md hover:bg-yellow-400">
                        <Link href="/login">
                            LoginPuto
                        </Link>
                    </button>   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
