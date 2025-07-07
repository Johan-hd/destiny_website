'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiSteeringWheel } from 'react-icons/gi';

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const discordInviteLink = 'https://discord.gg/SXaRtj8dXS';

  return (
    <div 
      className="fixed bottom-5 right-5 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="relative flex items-center h-14">
        {/* Botón circular */}
        <motion.div
          className="w-13 h-13 bg-[var(--accent-primary)] rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* 1. Div animado para el icono del volante */}
          <motion.div
            animate={{ rotate: isHovered ? -30 : 0 }} // Rota -30 grados cuando isHovered es true
            transition={{ duration: 0.3 }} // Duración de la animación de rotación
          >
            <GiSteeringWheel size={28} className="text-[var(--background-main)]" />
          </motion.div>
        </motion.div>

        {/* Nube de texto (Tooltip) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="
                absolute top-1/2 right-full -translate-y-1/2 
                mr-4 px-4 py-2          
                bg-[var(--background-contrast)] text-base text-[var(--text-primary)] 
                rounded-md shadow-lg whitespace-nowrap
                border border-[var(--accent-muted)]/50
              "
            >
              Click and become a driver!
              {/* Triángulo con borde */}
              <div 
                className="absolute top-1/2 -right-[9px] w-0 h-0 
                border-t-[9px] border-t-transparent 
                border-b-[9px] border-b-transparent 
                border-l-[9px] border-l-[var(--accent-muted)]/50 
                -translate-y-1/2"
              ></div>
              <div 
                className="absolute top-1/2 -right-2 w-0 h-0 
                border-t-8 border-t-transparent 
                border-b-8 border-b-transparent 
                border-l-8 border-l-[var(--background-contrast)] 
                -translate-y-1/2"
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  );
};

export default FloatingButton;