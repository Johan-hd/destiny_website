import Link from 'next/link';
import Image from 'next/image';
import {FaInstagram, FaDiscord, FaTruck, FaTruckMoving, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/what-we-offer' },
    { name: 'Contact Us', href: '/be-part' }
  ];

  const socialLinks = [
    { icon: <FaTruckMoving />, href: 'https://truckersmp.com/vtc/55439', name: 'TruckersMP' },
    { icon: <FaInstagram />, href: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaDiscord />, href: 'https://discord.gg/SXaRtj8dXS', name: 'Discord' },
    { icon: <FaGlobe />, href: 'https://trucksbook.eu/company/154745', name: 'TrucksBook' }
  ];

  return (
    <footer className="bg-[var(--background-contrast)] text-[var(--text-primary)] py-10 w-full">
      <div className="container w-full md:w-3/6 mx-auto px-4">
        
        {/* === CAMBIO DE ESTRUCTURA === */}
        {/* Ahora las 3 columnas son hijas directas de un contenedor Flexbox */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center md:text-left">
          
          {/* Columna 1: Logo */}
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
          {/* Le damos un ancho máximo para que no se estire demasiado */}
          <div className="max-w-md: flex-shrink-1">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">About Us</h3>
            <p className="text-[var(--text-secondary)]">
              Destiny VTC is a premier virtual trucking company dedicated to providing a realistic and engaging experience for all our drivers. We pride ourselves on professionalism, community, and a passion for the open road. Join us and drive your destiny.
            </p>
          </div>

          {/* Columna 3: Quick Links */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea divisora */}
        <hr className="border-t border-[var(--accent-muted)]/40 my-8" />

        {/* Sección inferior: Copyright y Redes Sociales */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Destiny VTC. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.name}
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

export default Footer;