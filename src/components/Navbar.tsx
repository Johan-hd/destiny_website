'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'More', 
      dropdown: [
        // === CAMBIO 1: Añadimos 'external: true' para identificar el enlace externo ===
        { name: 'Contact Us', href: 'https://discord.com/invite/SXaRtj8dXS', external: true },
        { name: 'Events', href: '/events' },
        { name: 'Our Team', href: '/team' },
        { name: 'Our Partners', href: '/partners' },
      ]
    }
  ];

  return (
    <header
      className={`w-full p-4 fixed top-0 z-50 transition-colors duration-700 ${
        isScrolled ? 'bg-[var(--background-contrast)] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_green.svg"
            alt="Destiny VTC Logo"
            width={50}
            height={45}
          />
          <span className="text-xl font-bold text-[var(--text-primary)]">
            Destiny VTC
          </span>
        </Link>
        <nav>
          <ul className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href || '#'}
                    className="text-[var(--text-primary)] border-2 border-[var(--accent-muted)] px-5 py-2 rounded-md font-bold text-lg transition-colors duration-300 flex items-center gap-2 hover:bg-[var(--accent-primary)] hover:text-[var(--background-main)] hover:border-[var(--accent-primary)]"
                  >
                    {link.name}
                    {link.dropdown && <FaChevronDown size={14} />}
                  </Link>
                </motion.div>
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
                          {/* === CAMBIO 2: Añadimos lógica para abrir en nueva pestaña === */}
                          <Link
                            href={item.href}
                            target={item.external ? '_blank' : '_self'}
                            rel={item.external ? 'noopener noreferrer' : ''}
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