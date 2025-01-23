"use client"
import { useState } from "react";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault;
        console.log("Email", email);
        console.log("Password", password);

    }
    return (
        <div className="bg-white shadow-md rounded-md p-6 max-w-sm mx-auto">
            <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                    Iniciar Sesión
                </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
                ¿No tenés cuenta?{" "}
                <a href="/register" className="text-blue-500 hover:underline">
                    Registrate aquí
                </a>
            </p>
        </div>
    );
}

export default Login