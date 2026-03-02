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

          <a href="#inicio">
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

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
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

          <h3 className="text-3xl font-bold text-center mb-16">
            Nuestros Servicios
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                icon: <Wifi className="w-10 h-10 mb-4" />,
                title: "Servicio de Internet",
                desc: "Internet personal de alta estabilidad en Exaltación de la Cruz y zonas cercanas."
              },
              {
                icon: <Shield className="w-10 h-10 mb-4" />,
                title: "Internet con Starlink",
                desc: "Instalación y soporte profesional de Starlink."
              },
              {
                icon: <Camera className="w-10 h-10 mb-4" />,
                title: "Cámaras de Seguridad",
                desc: "Venta, instalación y configuración de sistemas de videovigilancia."
              },
              {
                icon: <Network className="w-10 h-10 mb-4" />,
                title: "Redes Empresariales",
                desc: "Diseño e implementación de redes seguras y estables."
              }
            ].map((service,index)=>(
              
              <div key={index} className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition">

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
<div className="max-w-4xl mx-auto mt-20 text-gray-700 text-center leading-relaxed">
<p className="mb-4">
En <strong>IDT Conexiones</strong> trabajamos con equipos de conectividad y seguridad que utilizamos diariamente en nuestras instalaciones reales.
Seleccionamos cámaras de seguridad, sistemas Starlink y equipos Mikrotik que ofrecen estabilidad, calidad de imagen y confiabilidad para hogares, empresas y zonas rurales.
</p>

<p className="mb-4">
Todos los productos recomendados fueron previamente probados por nuestro equipo técnico en redes inalámbricas, enlaces de larga distancia, sistemas de videovigilancia y soluciones de internet rural.
</p>

<p>
Si necesitás asesoramiento para elegir el equipo adecuado o ayuda para la instalación y configuración, podés contactarnos directamente y te ayudaremos a encontrar la mejor solución para tu caso.
</p>
</div>
<section id="nosotros" className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto text-center">

<h3 className="text-3xl font-bold mb-10">
Sobre IDT Conexiones
</h3>

<p className="text-gray-600 leading-relaxed mb-6">
IDT Conexiones es un emprendimiento técnico especializado en soluciones de conectividad,
internet rural, instalación de cámaras de seguridad y redes inalámbricas profesionales.
</p>

<p className="text-gray-600 leading-relaxed mb-6">
Trabajamos principalmente en Capilla del Señor, Exaltación de la Cruz y zonas cercanas,
brindando instalación, soporte técnico y asesoramiento para hogares, empresas y
establecimientos rurales que necesitan conectividad estable y sistemas de seguridad confiables.
</p>

<p className="text-gray-600 leading-relaxed">
Nuestro objetivo es ofrecer soluciones reales utilizando equipos probados en campo como
Mikrotik, Starlink y sistemas de videovigilancia modernos, garantizando estabilidad,
rendimiento y soporte técnico directo.
</p>

</div>
</section>
      {/* Equipos */}
      <section id="equipos" className="py-24 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <h3 className="text-3xl font-bold text-center mb-6">
            Equipos Recomendados
          </h3>

          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Equipos seleccionados y probados en instalaciones reales realizadas por IDT Conexiones.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {img:"bullet4MP.jpg",title:"IMOU Bullet 4MP",link:"https://meli.la/2Mf4wWP"},
              {img:"bullet4MP.jpg",title:"IMOU Bullet 5MP",link:"https://meli.la/2Mf4wWP"},
              {img:"domo4y5mp.jpg",title:"IMOU Cruiser",link:"https://meli.la/1xWysps"},
              {img:"domodual.webp",title:"IMOU Cruiser Dual",link:"https://meli.la/2bNuHuU"},
              {img:"ranger4mp.webp",title:"IMOU Ranger 4MP",link:"https://meli.la/2vz4KWN"},
              {img:"cell3i.webp",title:"IMOU Cell Solar",link:"https://meli.la/1xdFTvF"},
              {img:"imouaov5mp4G.webp",title:"IMOU AOV Solar 4G",link:"https://meli.la/1xPC4qJ"},
              {img:"lhgxl27dbi.png",title:"Mikrotik LHG XL",link:"https://articulo.mercadolibre.com.ar/MLA-2898557742"},
              {img:"disc.jpg",title:"Mikrotik Disc Lite5",link:"https://articulo.mercadolibre.com.ar/MLA-2898557742"},
              {img:"minix.jpg",title:"Starlink Mini",link:"https://meli.la/1oZkyud"},
              {img:"standardv4.jpg",title:"Starlink Standard V4",link:"https://meli.la/1ysCKtL"}
            ].map((item,index)=>(
              
              <div key={index} className="bg-gray-50 shadow-lg rounded-2xl p-6">

                <img
                  src={`/${item.img}`}
                  className="rounded-xl mb-4 w-full h-48 object-contain"
                  alt={item.title}
                />

                <h4 className="text-xl font-semibold mb-2">
                  {item.title}
                </h4>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-4 py-2 rounded-xl inline-block"
                >
                  Ver producto
                </a>

              </div>

            ))}

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

    </div>

  );
}