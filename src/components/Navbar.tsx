// Declara que este es un "Componente de Cliente".
// Es necesario porque utiliza hooks de React (useState, useEffect) y librerías del lado del cliente como Framer Motion.
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

// Definición del componente funcional Navbar.
const Navbar = () => {
  // Define un estado para saber si el usuario ha hecho scroll. Inicialmente es 'false'.
  const [isScrolled, setIsScrolled] = useState(false);
  // Define un estado para controlar qué menú desplegable está abierto. 'null' significa que ninguno está abierto.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Hook que se ejecuta después de que el componente se monta en el DOM.
  useEffect(() => {
    // Función que se ejecuta cada vez que el usuario hace scroll.
    const handleScroll = () => {
      // Si la posición del scroll vertical es mayor a 10 píxeles...
      if (window.scrollY > 10) {
        // ...cambia el estado 'isScrolled' a 'true'.
        setIsScrolled(true);
      } else {
        // ...de lo contrario, lo cambia a 'false'.
        setIsScrolled(false);
      }
    };
    // Añade un "escuchador" al evento de scroll de la ventana, que llamará a 'handleScroll'.
    window.addEventListener('scroll', handleScroll);
    
    // Función de limpieza: se ejecuta cuando el componente se desmonta.
    // Es importante para evitar fugas de memoria.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío '[]' asegura que este efecto solo se ejecute una vez (al montar el componente).

  // Array de objetos que define la estructura de los enlaces de navegación.
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { 
      name: 'Company', 
      // Si un enlace tiene la propiedad 'dropdown', se tratará como un menú desplegable.
      dropdown: [
        { name: 'Contact Us', href: '/company/contact' },
        { name: 'Events', href: '/company/events' },
        { name: 'Our Team', href: '/company/team' },
        { name: 'Our Partners', href: '/company/partners' },
      ]
    }
  ];

  // El JSX que se renderizará.
  return (
    // Etiqueta del encabezado. Es 'sticky' para que se mantenga fija en la parte superior.
    <header
      // Clases de CSS que cambian dinámicamente según el estado 'isScrolled'.
      className={`w-full p-4 sticky top-0 z-50 transition-colors duration-700 ${
        isScrolled ? 'bg-[var(--background-contrast)] shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Contenedor principal que centra el contenido. */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Sección del logo y nombre de la empresa. */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo_green.svg" // Ruta del logo en la carpeta /public.
            alt="Destiny VTC Logo"
            width={50}
            height={45}
          />
          <span className="text-xl font-bold text-[var(--text-primary)]">
            Destiny VTC
          </span>
        </Link>

        {/* Sección de la navegación. */}
        <nav>
          {/* Lista no ordenada que contiene los botones de navegación. 'hidden' en móvil, 'flex' en escritorio. */}
          <ul className="hidden md:flex items-center gap-4">
            {/* Itera sobre el array 'navLinks' para crear cada elemento de la lista. */}
            {navLinks.map((link) => (
              // Elemento de la lista. 'relative' para que el menú desplegable se posicione con respecto a él.
              <li 
                key={link.name} 
                className="relative"
                // Cuando el cursor entra, si el link tiene un dropdown, se establece como el menú abierto.
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                // Cuando el cursor sale, se cierra el menú.
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {/* Componente de Framer Motion para animar la escala del botón. */}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href || '#'} // Si no hay 'href', usa '#' (para botones que solo abren menús).
                    // Clases de Tailwind CSS para estilizar el botón.
                    className="
                      text-[var(--text-primary)] border-2 border-[var(--accent-muted)] 
                      px-5 py-2 rounded-md font-bold text-lg
                      transition-colors duration-300 flex items-center gap-2
                      hover:bg-[var(--accent-primary)] hover:text-[var(--background-main)] hover:border-[var(--accent-primary)]
                    "
                  >
                    {link.name}
                    {/* Renderiza el ícono de la flecha solo si el link tiene un 'dropdown'. */}
                    {link.dropdown && <FaChevronDown size={14} />}
                  </Link>
                </motion.div>

                {/* Componente que maneja las animaciones de entrada y salida de elementos. */}
                <AnimatePresence>
                  {/* Renderizado condicional: solo muestra el menú si el link tiene un dropdown Y su estado es abierto. */}
                  {link.dropdown && openDropdown === link.name && (
                    // El menú desplegable en sí, animado con Framer Motion.
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }} // Estado inicial (invisible y ligeramente arriba).
                      animate={{ opacity: 1, y: 0 }}   // Estado animado (visible y en su posición).
                      exit={{ opacity: 0, y: -10 }}    // Estado de salida (se desvanece y sube).
                      // Clases para posicionar y estilizar el menú.
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[var(--background-contrast)] border-2 border-[var(--accent-muted)] rounded-md shadow-lg"
                    >
                      {/* Itera sobre los items del dropdown para crear cada enlace. */}
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            // Estilos para cada item del menú.
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

// Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.
export default Navbar;