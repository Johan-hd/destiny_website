import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram, FaDiscord, FaTruckMoving, FaGlobe } from 'react-icons/fa';

// Definición del componente funcional Footer.
const Footer = () => {
  // Array de objetos que define los enlaces rápidos que se mostrarán en la tercera columna.
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    // Se añade la propiedad 'external: true' para identificarlo como enlace externo.
    { name: 'Contact Us', href: 'https://discord.gg/SXaRtj8dXS', external: true }, // <-- Modificado
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' }
  ];

  // Array de objetos que define los íconos y enlaces a las redes sociales y plataformas externas.
  const socialLinks = [
    { icon: <FaTruckMoving />, href: 'https://truckersmp.com/vtc/55439', name: 'TruckersMP' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/destiny_vtc', name: 'Instagram' },
    { icon: <FaDiscord />, href: 'https://discord.gg/SXaRtj8dXS', name: 'Discord' },
    { icon: <FaGlobe />, href: 'https://trucksbook.eu/company/154745', name: 'TrucksBook' }
  ];

  // El JSX que se renderizará para el componente.
  return (
    // Etiqueta semántica para el pie de página. Ocupa todo el ancho ('w-full').
    <footer className="bg-[var(--background-contrast)] text-[var(--text-primary)] py-10 w-full">
      {/* Contenedor que limita el ancho del contenido a 3/6 (o 1/2) en escritorios y lo centra. */}
      <div className="container w-full md:w-3/6 mx-auto px-4">
        
        {/* Contenedor Flexbox principal para las tres columnas superiores. (logo, about us, quick links) */}
        {/* 'justify-center' y 'items-center' centran las columnas horizontal y verticalmente. */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left">
          
          {/* Columna 1: Logo */}
          {/* 'flex-shrink-0' evita que esta columna se encoja si no hay espacio. */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo_green.svg"
                alt="Destiny VTC Logo"
                width={125}
                height={125}
              />
            </Link>
          </div>

          {/* Columna 2: About */}
          {/* Esta columna tiene un ancho máximo para no estirarse demasiado. */}
          <div className="max-w-md: flex-shrink-1">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">About Us</h3>
            <p className="text-[var(--text-secondary)]">
              Destiny VTC is a premier virtual trucking company dedicated to providing a realistic and engaging experience for all our drivers. We pride ourselves on professionalism, community, and a passion for the open road. Join us and drive your destiny.
            </p>
          </div>

          {/* Columna 3: Quick Links */}
          {/* 'flex-shrink-0' también evita que esta columna se encoja. */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {/* Itera sobre 'quickLinks' para crear cada enlace. */}
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    // Añadimos los atributos target y rel SÓLO si el enlace es externo
                    target={link.external ? '_blank' : '_self'} // <-- Modificado
                    rel={link.external ? 'noopener noreferrer' : ''} // <-- Modificado
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea horizontal que actúa como separador visual. */}
        <hr className="border-t border-[var(--accent-muted)]/40 my-8" />

        {/* Sección inferior del footer. */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Texto de Copyright. El año se genera dinámicamente. */}
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Destiny VTC. All Rights Reserved.
          </p>
          {/* Contenedor para los íconos de redes sociales. */}
          <div className="flex gap-5">
            {/* Itera sobre 'socialLinks' para renderizar cada ícono y su enlace. */}
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target="_blank" // Abre el enlace en una nueva pestaña.
                rel="noopener noreferrer" // Medida de seguridad.
                aria-label={social.name} // Para accesibilidad.
                // Estilos para el ícono, incluyendo un efecto de cambio de color al pasar el cursor.
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] text-2xl transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Exporta el componente para su uso en otras partes de la aplicación.
export default Footer;