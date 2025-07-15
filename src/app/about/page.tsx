'use client';

import Navbar from "@/components/Navbar";
import { FaBullseye, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      
      {/* SECCIÓN 1: BANNER PRINCIPAL (Sin cambios) */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/truck_about.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold">About Destiny VTC</h1>
          <p className="mt-4 text-xl">The story behind our journey, our family, and our future.</p>
        </div>
      </section>

      {/* SECCIÓN 2: NUESTRA HISTORIA */}
      {/* === CAMBIO 1: Reducimos el padding inferior para acercar las secciones === */}
      <section className="bg-[var(--background-main)] pt-20 pb-5">
        <div className="container mx-auto px-4 max-w-4xl text-gray-300 text-lg leading-relaxed">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">What has happened to us?</h2>
            <h3 className="text-xl text-[var(--accent-primary)] font-semibold mb-4">Let's talk a little bit about the past.</h3>
            <p>
              It has been more than a year since we took the decision to cease our operations as a VTC, this unanimous decision was taken jointly by all the staff due to personal issues that prevented us from continuing to operate efficiently, which caused us to stop following the values that have always represented us as a company; therefore, Destiny had to close its doors indefinitely with much sadness. As part of the staff, it was like leaving our family aside, something we could never get out of our hearts, so today we are back to give you great news.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our family is back !</h2>
            <p>
              After a year we have made the decision to return to the roads. During this period, we evaluated the situation of our VTC, we have heard comments, and received messages of support that made us took the decision of return to the roads. Our big family with immense joy wants to tell you that we are back! With many improvements and many changes, but without losing the essence that makes us a VTC made for the friendship that has brought us together, with the fun that characterizes us and the experience of our great staff. So, we want to ask you, do you want to be part of our new Destiny?
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">News</h2>
            <p>
              We are back renewed, we have great ideas in mind and we are looking forward to be again one of the main Spanish speaking VTC's. We are still on track with the same values as always, prioritizing respect and love without leaving fun aside; we also focus on balancing our experience with modernity; so we invite you to meet us and be part of our family. We also invite our friends who supported us with their kind messages, all of them are in our hearts and will always have a place in it, all the former staff who supported us in the decision to retake the journey and not lose what that has brought us together as a family, and has broken barriers such as distance, culture and language, because a family like ours always prioritizes its own and invites new people to join it.
            </p>
          </motion.div>

        </div>
      </section>

      {/* SECCIÓN 3: MISIÓN Y VISIÓN */}
      {/* === CAMBIO 2: Mismo fondo y menos padding superior === */}
      <section className="bg-[var(--background-main)] pt-5 pb-20">
        <div className="container mx-auto px-4 flex flex-col items-center gap-12 md:max-w-3xl">

          {/* Tarjeta de Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--background-contrast)] p-8 rounded-lg w-full" // Mantenemos el contraste aquí para las tarjetas
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBullseye className="text-4xl text-[var(--accent-primary)]" />
              <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              To unite truck simulation enthusiasts from all over the world, creating a professional, respectful, and fun environment. We strive to offer a top-tier virtual trucking experience through realistic operations, engaging events, and a strong sense of community.
            </p>
          </motion.div>

          {/* Tarjeta de Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--background-contrast)] p-8 rounded-lg w-full" // Mantenemos el contraste aquí para las tarjetas
          >
            <div className="flex items-center gap-4 mb-4">
              <FaEye className="text-4xl text-[var(--accent-primary)]" />
              <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300">
              To be a leading and globally recognized VTC, setting the standard for professionalism and camaraderie in the virtual trucking world. We aim to continuously innovate and provide a welcoming home for every driver who shares our passion for the road.
            </p>
          </motion.div>
          
        </div>
      </section>
    </>
  );
}