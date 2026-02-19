import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Nanum_Pen_Script, Rampart_One } from "next/font/google";

export default function IDTConexiones() {
  const phoneNumber = "541163091866";

  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Botón flotante WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-xl z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/logo-idt.png" /* Reemplazar con tu archivo real */
              alt="IDT Conexiones Logo"
              className="h-12 object-contain"
            />
          </div>
          <nav className="space-x-6 hidden md:block font-medium">
            <a href="#servicios" className="hover:text-gray-600">Servicios</a>
            <a href="#nosotros" className="hover:text-gray-600">Nosotros</a>
            <a href="#contacto" className="hover:text-gray-600">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-wide"
          >
            CONECTIVIDAD PROFESIONAL
          </motion.h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            Internet propio • Starlink • Cámaras • Redes Empresariales • Soporte Técnico
          </p>
          <a href="#contacto">
            <Button className="rounded-2xl px-10 py-6 text-lg bg-black text-white hover:bg-gray-800">
              Solicitar Presupuesto
            </Button>
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16 tracking-wide">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Servicio de Internet",
                desc: "Internet personal de alta estabilidad en Exaltación de la Cruz y zonas cercanas."
              },
              {
                title: "Internet con Starlink",
                desc: "Instalación y soporte de Starlink como respaldo o solución alternativa."
              },
              {
                title: "Cámaras de Seguridad",
                desc: "Venta, instalación y reparación de sistemas de videovigilancia."
              },
              {
                title: "Redes Empresariales",
                desc: "Diseño e implementación de redes corporativas seguras y eficientes."
              },
              {
                title: "Soporte Técnico Especializado",
                desc: "Asistencia técnica profesional para infraestructura tecnológica."
              }
            ].map((service, index) => (
              <Card key={index} className="rounded-2xl shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
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
            Exaltación de la Cruz y alrededores.
          </p>
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

            <Button type="submit" className="w-full rounded-2xl py-6 text-lg bg-black text-white hover:bg-gray-800">
              Enviar Mensaje
            </Button>
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




