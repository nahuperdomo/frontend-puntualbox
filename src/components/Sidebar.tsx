const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
            {/* Menu */}
            <nav className="flex-1 px-4 py-6">
                <ul className="space-y-4">
                    <li>
                        <a
                            href="/dashboard"
                            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            <span className="material-icons">dashboard</span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/users"
                            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            <span className="material-icons">people</span>
                            <span>Mis pedidos</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/reports"
                            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            <span className="material-icons">bar_chart</span>
                            <span>Reportes</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/dashboard/settings"
                            className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-700"
                        >
                            <span className="material-icons">settings</span>
                            <span>Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <div className="h-16 flex items-center justify-center bg-gray-900">
                <a
                    href="/logout"
                    className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-red-600"
                >
                    <span className="material-icons">logout</span>
                    <span>Cerrar Sesión</span>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
