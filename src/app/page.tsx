'use client';

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { 
  FaLandmark, FaDiscord, FaGlobe, FaSearch, 
  FaTachometerAlt, FaImage, FaCogs, FaPaintBrush, FaHandshake, FaUserFriends 
} from 'react-icons/fa';
import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function Home() {
  const discordInviteLink = 'https://discord.com/invite/SXaRtj8dXS';

  const advantages = [
    {
      icon: <FaTachometerAlt />,
      title: "Custom roles based on Kilometers",
      description: "Progress and get recognized with unique roles as you rack up the miles on the road."
    },
    {
      icon: <FaImage />,
      title: "Custom profile pictures",
      description: "Show off your personality with custom profile pictures for our internal platforms."
    },
    {
      icon: <FaCogs />,
      title: "Pre-configured profiles",
      description: "Get on the road faster with pre-configured game profiles, optimized for realism and performance."
    },
    {
      icon: <FaPaintBrush />,
      title: "Custom UI for TMP",
      description: "Enjoy a unique and immersive experience with our custom-designed user interface for TruckersMP."
    },
    {
      icon: <FaHandshake />,
      title: "Key partnerships",
      description: "We collaborate with several VTCs, offering more convoys, events, and a wider community."
    },
    {
      icon: <FaUserFriends />,
      title: "An amazing community",
      description: "Eventhough we are a trucking company, our drivers and staff become friends to play other games together, not only ETS2 or ATS."
    }
  ];
 
  const partners = [
    { name: "TCC&R", logoSrc: "/logos/tccr.png", href: "#" },
    { name: "Nova Era Transportes", logoSrc: "/logos/nova.png", href: "#" },
    { name: "Pean Logistics", logoSrc: "/logos/pean.png", href: "#" },
    { name: "Ghost Express", logoSrc: "/logos/ghost.png", href: "#" },
    { name: "Line of Energy", logoSrc: "/logos/loe.png", href: "#" },
    { name: "Pink Ribbon VTC", logoSrc: "/logos/prvtc.png", href: "#" },
    { name: "Ponc Logistics", logoSrc: "/logos/ponc.png", href: "#" },
  ];

  return (
    <>
      {/* SECCIÓN 1: HERO */}
      <div className="relative h-screen w-full">
        <Navbar />
        <Hero />
        <div className="relative z-10 flex h-full flex-col items-center justify-center">
          <motion.div className="mb-4 rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-400 p-0.5 shadow-lg" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="rounded-full bg-gray-800 bg-opacity-80 px-4 py-2"><span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text font-semibold text-transparent">A verified VTC on TruckerMP</span></div>
          </motion.div>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">DRIVE YOUR DESTINY</h1>
          <p className="mt-4 text-xl text-white drop-shadow-md">Join the best Virtual Trucking Company.</p>
          <motion.div className="mt-8" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-[#369876] to-[#71ff9e] hover:shadow-2xl hover:brightness-110">Driver Application</a>
          </motion.div>
        </div>
      </div>

      {/* SECCIÓN 2: WHY DESTINY */}
      <section id="explore-destiny" className="relative bg-[var(--background-main)] py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[600px] rounded-lg bg-cover bg-center p-6 flex flex-col justify-end" style={{ backgroundImage: "url('/images/truck_about.png')" }}>
            <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/50 backdrop-blur-sm p-4 rounded-lg">
              <InfoCard icon={<FaLandmark />} title="Founded in 2022">We are a growing VTC with a nice and friendly community that you can be part of.</InfoCard>
              <InfoCard icon={<FaDiscord />} title="+850 members">We are an international community with more than 850 members on our discord server.</InfoCard>
              <InfoCard icon={<FaGlobe />} title="+65 Drivers">Besides being a Verified VTC on TruckerMP, we have more than 65 driver over the world.</InfoCard>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4">
            <div className="flex items-center gap-3"><FaSearch className="text-2xl text-[var(--accent-primary)]" /><p className="font-semibold text-[var(--accent-primary)]">Why choose Destiny?</p></div>
            <h2 className="text-5xl font-bold text-white">Destiny is your destiny</h2>
            <p className="text-gray-300 text-lg">In Destiny, safety is everything, we maintain exceptional order in public and private events, we try to give a good experience on the road to both our members and the people who accompany us, we understand that more than a game sometimes is an escape from our reality and we do not want that experience to be damaged.</p>
            <motion.div className="mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#our-advantages" className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-[#369876] to-[#71ff9e] hover:shadow-2xl hover:brightness-110">Explore Destiny</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: ADVANTAGES */}
      <section id="our-advantages" className="relative bg-[var(--background-contrast)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-2">Our Advantages</h2>
          <p className="text-lg text-gray-400 mb-12">What makes us the best choice for your journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div key={index} className="bg-[var(--background-main)] p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className="text-4xl text-[var(--accent-primary)] mb-4">{advantage.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-400">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* SECCIÓN 4: PARTNERS */}
      <section className="relative bg-[var(--background-main)] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Partners</h2>
          
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] group">
            <div className="flex w-max animate-[scroll_45s_linear_infinite] group-hover:pause">
              {[...partners, ...partners].map((partner, index) => (
                // === CAMBIOS AQUÍ: Aumentamos el tamaño y espaciado de cada partner ===
                <a href={partner.href} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col items-center justify-center w-50 mx-12 transition-transform duration-300 hover:!scale-110">
                  <Image 
                    src={partner.logoSrc} 
                    alt={partner.name}
                    width={180} 
                    height={100} 
                    className="object-contain h-28"
                  />
                  <p className="mt-3 text-base font-semibold text-gray-400">{partner.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* SECCIÓN 5: ÚNETE A NOSOTROS */}
      <section 
        className="relative bg-cover bg-center bg-fixed py-24"
        style={{ backgroundImage: "url('/images/convoy.png')" }} // 1. Asegúrate de tener esta imagen en /public/images
      >
        {/* Overlay oscuro para la legibilidad */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative container mx-auto px-4 text-center text-white z-10 flex flex-col items-center">
          <h2 className="text-5xl font-bold">Join Our Ranks</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Your journey at Destiny begins as a driver, but it doesn't have to end there. We value dedication and passion, offering opportunities to grow and take on staff positions to help shape the future of our VTC.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={discordInviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 bg-gradient-to-r from-[#369876] to-[#71ff9e] hover:shadow-2xl hover:brightness-110"
            >
              Connect on Discord & Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}