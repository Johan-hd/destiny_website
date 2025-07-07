'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; // Ícono para el desplegable

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar qué menú desplegable está abierto
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Modificamos la estructura para soportar sub-menús
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Company', 
      dropdown: [
        { name: 'Contact Us', href: '/company/contact' },
        { name: 'Events', href: '/company/events' },
        { name: 'Our Team', href: '/company/team' },
        { name: 'Our Partners', href: '/company/partners' },
      ]
    }
  ];

  return (
    <header
      className={`w-full p-4 sticky top-0 z-50 transition-colors duration-700 ${
        isScrolled ? 'bg-[var(--background-contrast)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_green.svg" // Asegúrate que este sea el path correcto
            alt="Destiny VTC Logo"
            width={50}
            height={45}
          />
          <span className="text-xl font-bold text-[var(--text-primary)]">
            Destiny VTC
          </span>
        </Link>

        {/* Enlaces de Navegación */}
        <nav>
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              // Envolvemos cada <li> para manejar el hover del menú
              <li 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href || '#'} // Usamos '#' si es un desplegable sin link directo
                    className="
                      text-[var(--text-primary)] border-2 border-[var(--accent-muted)] 
                      px-5 py-2 rounded-md font-bold text-lg
                      transition-colors duration-300 flex items-center gap-2
                      hover:bg-[var(--accent-primary)] hover:text-[var(--background-main)] hover:border-[var(--accent-primary)]
                    "
                  >
                    {link.name}
                    {/* Añadimos el ícono si es un desplegable */}
                    {link.dropdown && <FaChevronDown size={14} />}
                  </Link>
                </motion.div>

                {/* Lógica del Menú Desplegable */}
                <AnimatePresence>
                  {link.dropdown && openDropdown === link.name && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[var(--background-contrast)] border-2 border-[var(--accent-muted)] rounded-md shadow-lg"
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-sm text-[var(--text-primary)] hover:bg-[var(--accent-muted)] transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;