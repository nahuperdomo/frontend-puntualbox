const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; 2025 <span className="font-bold">ExactDrop</span>. Todos los derechos reservados.
                </p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:underline">
                        Términos y Condiciones
                    </a>
                    <a href="#" className="hover:underline">
                        Política de Privacidad
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
