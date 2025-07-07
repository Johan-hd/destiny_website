// Declara que es un "Componente de Cliente", necesario para usar hooks y librerías interactivas como Framer Motion.
'use client';

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

// Definición del componente 'Home', que es la página de inicio de la web.
export default function Home() {
  // Constante que almacena el enlace de invitación de Discord para fácil acceso y modificación.
  const discordInviteLink = 'https://discord.com/invite/SXaRtj8dXS';

  // El JSX que se renderizará para la página.
  return (
    // Usamos un fragmento <> para agrupar los elementos sin añadir un div extra al DOM.
    <>
      {/* PRIMERA SECCIÓN: HERO A PANTALLA COMPLETA */}
      {/* Este contenedor es la clave para el efecto de la portada. */}
      {/* 'relative' para que los componentes hijos con 'absolute' se posicionen con respecto a él. */}
      {/* 'h-screen' le da la altura completa de la ventana del navegador. */}
      <div className="relative h-screen w-full">
        {/* Renderiza la Navbar. Como está dentro de este contenedor, no afectará al resto de la página. */}
        <Navbar />
        {/* Renderiza el Hero, que se posicionará como un fondo absoluto dentro de este contenedor. */}
        <Hero />

        {/* Contenido que se superpone al Hero (eslóganes, botones, etc.). */}
        {/* 'z-10' lo pone en una capa por encima del Hero (-z-10). */}
        {/* 'flex h-full items-center justify-center' centra su contenido vertical y horizontalmente. */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            {/* Título principal con sombra para mejorar la legibilidad sobre las imágenes. */}
            <h1 className="text-6xl font-bold drop-shadow-lg">DRIVE YOUR DESTINY</h1>
            {/* Subtítulo o eslogan. */}
            <p className="mt-4 text-xl drop-shadow-md">Join the best Virtual Trucking Company.</p>

            {/* Contenedor animado para el botón de llamada a la acción. */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }} // Agranda el botón al pasar el cursor.
              whileTap={{ scale: 0.95 }}   // Encoge el botón al hacer clic.
            >
              {/* El botón en sí, que es un enlace. */}
              <a
                href={discordInviteLink} // El enlace al que redirige.
                target="_blank"          // Abre el enlace en una nueva pestaña.
                rel="noopener noreferrer" // Buena práctica de seguridad para enlaces externos.
                // Clases de Tailwind para dar estilo, incluyendo el degradado.
                className="
                  inline-block rounded-lg px-8 py-4
                  text-lg font-semibold text-white
                  shadow-lg transition-all duration-300
                  bg-gradient-to-r from-[#369876] to-[#16E884]
                  hover:shadow-2xl hover:brightness-110
                "
              >
                Driver Application
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* SEGUNDA SECCIÓN: RESTO DE LA PÁGINA */}
      {/* Este contenedor tendrá un fondo sólido para que, al hacer scroll, cubra el Hero. */}
      <div className="relative bg-[var(--background-main)]">
        {/* Ejemplo de una sección de contenido futuro. */}
        <section className="container mx-auto py-20">
          <h2 className="text-4xl text-center font-bold">What We Offer</h2>
        </section>
      </div>
    </>
  );
}