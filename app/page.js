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

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

          <a href="#inicio" className="flex items-center">
            <img
              src="/logo-idt.webp"
              alt="IDT Conexiones Logo"
              className="h-20 object-contain"
            />
          </a>

          <nav className="space-x-8 hidden md:block font-medium text-gray-700">
            <a href="#servicios" className="hover:text-black transition">Servicios</a>
            <a href="#equipos" className="hover:text-black transition">Equipos</a>
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
{/* Equipos */}
<section id="equipos" className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">

<h3 className="text-3xl font-bold text-center mb-6">
Cámaras, Starlink y Equipos de Internet Recomendados
</h3>

<p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
Equipos seleccionados y probados en instalaciones reales realizadas por IDT Conexiones.
Las compras se realizan a través de Mercado Libre para garantizar seguridad en el pago y envío.
</p>

<div className="grid md:grid-cols-3 gap-8">

{/* Bullet 4MP */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/bullet4MP.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Bullet 4MP"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Bullet 4MP
</h4>

<a
href="https://meli.la/2Mf4wWP"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Bullet 5MP */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/Bullet5MP.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Bullet 5MP"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Bullet 5MP
</h4>

<a
href="https://meli.la/2Mf4wWP"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Cruiser */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/domo4y5mp.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Cruiser"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Cruiser
</h4>

<a
href="https://meli.la/1xWysps"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Cruiser Dual */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/domodual.webp"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Cruiser Dual"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Cruiser Dual
</h4>

<a
href="https://meli.la/2bNuHuU"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Ranger */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/ranger4mp.webp"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Ranger"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Ranger 4MP
</h4>

<a
href="https://meli.la/2vz4KWN"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Cell Solar */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/cell3i.webp"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou Cell Solar"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU Cell Solar
</h4>

<a
href="https://meli.la/1xdFTvF"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* AOV Solar */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/imouaov5mp4G.webp"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Camara Imou AOV Solar"
/>

<h4 className="text-xl font-semibold mb-2">
IMOU AOV Solar 4G
</h4>

<a
href="https://meli.la/1xPC4qJ"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Mikrotik LHG */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/lhgxl27dbi.png"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Mikrotik LHG XL"
/>

<h4 className="text-xl font-semibold mb-2">
Mikrotik LHG XL
</h4>

<a
href="https://articulo.mercadolibre.com.ar/MLA-2898557742"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Mikrotik Disc */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/disc.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Mikrotik Disc Lite5"
/>

<h4 className="text-xl font-semibold mb-2">
Mikrotik Disc Lite5
</h4>

<a
href="https://articulo.mercadolibre.com.ar/MLA-2898557742"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Starlink Mini */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/minix.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Starlink Mini"
/>

<h4 className="text-xl font-semibold mb-2">
Starlink Mini
</h4>

<a
href="https://meli.la/1oZkyud"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

{/* Starlink Standard */}
<div className="bg-gray-50 shadow-lg rounded-2xl p-6">
<img
src="/equipos/standardv4.jpg"
className="rounded-xl mb-4 w-full h-48 object-contain"
alt="Starlink Standard V4"
/>

<h4 className="text-xl font-semibold mb-2">
Starlink Standard V4
</h4>

<a
href="https://meli.la/1ysCKtL"
target="_blank"
rel="noopener noreferrer"
className="bg-black text-white px-4 py-2 rounded-xl inline-block"
>
Ver producto
</a>
</div>

</div>

{/* Asistencia remota */}
<div className="text-center mt-16">
<p className="mb-6 text-lg">
¿Compraste un equipo y necesitás ayuda para configurarlo?
</p>

<a
href={`https://wa.me/${phoneNumber}?text=Hola,%20necesito%20ayuda%20para%20configurar%20un%20equipo`}
target="_blank"
rel="noopener noreferrer"
className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
>
Configurar mi equipo
</a>
</div>

</div>
</section>