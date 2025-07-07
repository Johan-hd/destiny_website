'use client';

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  // Reemplaza esto con el enlace de invitación a tu Discord
  const discordInviteLink = 'https://discord.com/invite/SXaRtj8dXS';

  return (
    <>
      {/* Contenedor principal de la sección Hero */}
      <div className="relative h-screen w-full">
        <Navbar />
        <Hero />

        {/* Contenido sobre el Hero */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold drop-shadow-lg">DRIVE YOUR DESTINY</h1>
            <p className="mt-4 text-xl drop-shadow-md">Join the best Virtual Trucking Company.</p>

            {/* Botón de llamada a la acción con animación */}
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* === CAMBIOS AQUÍ === */}
              <a
                href={discordInviteLink} // Enlace al Discord
                target="_blank"          // Abre en una nueva pestaña
                rel="noopener noreferrer" // Buena práctica de seguridad
                className="
                  inline-block rounded-lg px-8 py-4
                  text-lg font-semibold text-white
                  shadow-lg transition-all duration-300
                  bg-gradient-to-r from-[#369876] to-[#71ff9e]
                  hover:shadow-2xl hover:brightness-110
                "
              >
                Driver Application
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* El resto de la página */}
      <div className="relative bg-[var(--background-main)]">
        <section className="container mx-auto py-20">
          <h2 className="text-4xl text-center font-bold">What We Offer</h2>
        </section>
      </div>
    </>
  );
}