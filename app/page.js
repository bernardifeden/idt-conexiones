// deploy fix
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Wifi,
  Shield,
  Camera,
  Network
} from "lucide-react";
export default function IDTConexiones() {
  const phoneNumber = "541163091866";

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Botón flotante WhatsApp */}
      <a
  href={`https://wa.me/${phoneNumber}?text=Hola,%20quiero%20consultar%20por%20sus%20servicios`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 animate-bounce"
>
  <MessageCircle className="w-7 h-7" />
</a>

     <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
  <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

    {/* Logo */}
    <a href="#inicio" className="flex items-center">
      <img
        src="/logo-idt.webp"
        alt="IDT Conexiones Logo"
        className="h-20 object-contain"
      />
    </a>

    {/* Navegación */}
    <nav className="space-x-8 hidden md:block font-medium text-gray-700">
      <a href="#servicios" className="hover:text-black transition">Servicios</a>
      <a href="#nosotros" className="hover:text-black transition">Nosotros</a>
      <a href="#contacto" className="hover:text-black transition">Contacto</a>
    </nav>

  </div>
</header>
{/* Hero */}
<section className="relative bg-black text-white py-32 px-6 overflow-hidden">
  <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>

  <div className="relative max-w-5xl mx-auto text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
      Soluciones Profesionales en Seguridad y Conectividad
    </h1>

    <p className="text-lg md:text-xl mb-10 text-gray-300">
      Internet propio • Starlink • Cámaras • Redes Empresariales • Soporte Técnico
    </p>

    <div className="flex justify-center gap-6 flex-wrap">
      <a
        href={`https://wa.me/${phoneNumber}?text=Hola,%20quiero%20consultar%20por%20sus%20servicios`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Solicitar Presupuesto
        </button>
      </a>
      <a href="#servicios">
        <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition">
          Ver Servicios
        </button>
      </a>
    </div>
  </div>
</section>
{/* Servicios */}
<section id="servicios" className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-16 tracking-wide">
      Nuestros Servicios
    </h3>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: <Wifi className="w-10 h-10 mb-4 text-black" />,
          title: "Servicio de Internet",
          desc: "Internet personal de alta estabilidad en Exaltación de la Cruz y zonas cercanas."
        },
        {
          icon: <Shield className="w-10 h-10 mb-4 text-black" />,
          title: "Internet con Starlink",
          desc: "Instalación y soporte de Starlink como respaldo o solución alternativa."
        },
        {
          icon: <Camera className="w-10 h-10 mb-4 text-black" />,
          title: "Cámaras de Seguridad",
          desc: "Venta, instalación y reparación de sistemas de videovigilancia."
        },
        {
          icon: <Network className="w-10 h-10 mb-4 text-black" />,
          title: "Redes Empresariales",
          desc: "Diseño e implementación de redes corporativas seguras y eficientes."
        }
      ].map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >
          {service.icon}
          <h4 className="text-xl font-semibold mb-4">
            {service.title}
          </h4>
          <p className="text-gray-600">
            {service.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* Nosotros */}
      <section id="nosotros" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 tracking-wide">Sobre IDT CONEXIONES</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Brindamos soluciones profesionales en conectividad, videovigilancia y redes empresariales.
            Trabajamos con compromiso, tecnología de vanguardia y atención personalizada en
            Exaltación de la Cruz y alrededores, más de diez años de experiencia avalan el trabajo realizado en varias localidades de argentina 
            y muchismos clientes nos recomiendan dia a dia,
            no te quedes esperando soluciones magicas ni servicios tecnicos que demoran meses en visitar tu domicilio contactanos hoy y te responderemos a la brevedad.
          </p>
        </div>
      </section>
{/* Galería */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-3xl font-bold text-center mb-16">
      Trabajos Realizados
    </h3>

    <div className="grid md:grid-cols-3 gap-6">
      {["/trabajo1.jpg", "/trabajo2.jpg", "/trabajo3.jpg"].map(
        (img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={img}
              alt="Trabajo realizado"
              className="w-full h-64 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        )
      )}
    </div>
  </div>
</section>
      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 tracking-wide">Contacto</h3>

          <form
            action="https://formsubmit.co/ildottorereparaciones@gmail.com"
            method="POST"
            className="bg-white shadow-xl rounded-2xl p-10 space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div>
              <label className="block mb-2 font-medium">Nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Mensaje</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <button
  type="submit"
  className="w-full rounded-2xl py-6 text-lg bg-black text-white hover:bg-gray-800"
>
  Enviar Mensaje
</button>

          </form>

          <div className="grid md:grid-cols-3 gap-8 text-center mt-16">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8" />
              <p>+54 11 6309-1866</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-8 h-8" />
              <p>ildottorereparaciones@gmail.com</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-8 h-8" />
              <p>Exaltación de la Cruz, Buenos Aires</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>© {new Date().getFullYear()} IDT CONEXIONES. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
  }




