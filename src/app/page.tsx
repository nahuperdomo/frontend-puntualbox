export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero bg-blue-500 text-white text-center py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Texto principal */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Bienvenido a <span className="text-yellow-300">ExactDrop</span>
            </h1>
            <p className="text-lg mb-6">
              Descubrí la revolución en entregas: precisión, puntualidad y control total.
              Programá tus pedidos para recibirlos exactamente cuando y donde los necesitás.
              ¡La comodidad nunca fue tan simple!
            </p>
            <button className="bg-yellow-300 text-blue-500 px-8 py-3 font-bold rounded-md hover:bg-yellow-400">
              <a href="/login">Empezar ahora</a>
            </button>
          </div>
          {/* Imágenes laterales */}
          <div className="md:w-1/2 flex justify-center gap-6 mt-6 md:mt-0">
            <img
              src="/man_working.png"
              alt="Persona trabajando"
              className="w-1/3"
            />
            <img
              src="/man_lift.png"
              alt="Persona levantando paquete"
              className="w-1/3"
            />
          </div>
        </div>
      </div>

      {/* Sobre Nosotros */}
      <div id="about" className="about py-16 px-6 bg-yellow-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-500 mb-6">Sobre Nosotros</h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-blue-900">
            En ExactDrop, estamos redefiniendo la experiencia de recibir tus compras online.
            Combinamos tecnología avanzada con lockers inteligentes y un sistema de entregas programadas para que tengas el control total sobre cuándo y dónde recibir tus pedidos.
            <br />
            Nuestro objetivo es ofrecerte comodidad, flexibilidad y la tranquilidad de saber que tus compras están seguras en todo momento.
            Olvidate de horarios inciertos y complicaciones: con ExactDrop, recibir tus productos es tan fácil como elegir el momento perfecto.
          </p>
        </div>
      </div>

      {/* Contacto */}
      <div id="contact" className="contact bg-contact-bg bg-cover bg-fixed py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-500 mb-6 text-center">Contacto</h2>
          <p className="text-lg mb-8 text-blue-900 text-center">
            ¿Tenés preguntas o querés trabajar con nosotros? ¡Escribinos!
          </p>
          <form className="max-w-xl mx-auto bg-gray-50 p-8 rounded-md shadow-md text-blue-900">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="name"
                placeholder="Tu nombre"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="message"
                placeholder="Tu mensaje"
                rows={4}
                style={{ resize: 'none' }}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
