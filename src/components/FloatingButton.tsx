// Declara que es un "Componente de Cliente" para permitir el uso de hooks (useState)
// y animaciones de Framer Motion que interactúan con el navegador.
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GiSteeringWheel } from 'react-icons/gi';

// Definición del componente funcional FloatingButton.
const FloatingButton = () => {
  // Define un estado para saber si el cursor está sobre el botón.
  // Se usa para mostrar u ocultar el tooltip (nube de texto).
  const [isHovered, setIsHovered] = useState(false);

  // Almacena el enlace de invitación de Discord en una constante para fácil modificación.
  const discordInviteLink = 'https://discord.gg/SXaRtj8dXS';

  // El JSX que se renderizará.
  return (
    // Contenedor principal del botón.
    // 'fixed' lo mantiene en una posición fija en la pantalla, incluso al hacer scroll.
    // 'bottom-5 right-5' lo ancla en la esquina inferior derecha.
    // 'z-50' asegura que esté en una capa superior, por encima de la mayoría de los otros elementos.
    <div 
      className="fixed bottom-5 right-5 z-50"
      // Evento que se dispara cuando el cursor entra en el área del div, cambiando 'isHovered' a true.
      onMouseEnter={() => setIsHovered(true)}
      // Evento que se dispara cuando el cursor sale, cambiando 'isHovered' a false.
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Etiqueta de enlace que envuelve todo el botón para hacerlo clickeable. */}
      <a href={discordInviteLink} target="_blank" rel="noopener noreferrer" className="relative flex items-center h-14">
        
        {/* El botón circular en sí. */}
        <motion.div
          // === CAMBIO AQUÍ: Se reemplazó el color de fondo por un degradado diagonal ===
          className="w-14 h-14 bg-gradient-to-br from-[#369876] to-[#71ff9e] rounded-full flex items-center justify-center cursor-pointer shadow-lg"
          // Animación de Framer Motion: agranda el botón al pasar el cursor.
          whileHover={{ scale: 1.1 }}
          // Define la física de la animación para un efecto de "resorte".
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {/* Contenedor animado para el ícono del volante. */}
          <motion.div
            // Anima la propiedad 'rotate'. Gira -30 grados si 'isHovered' es true, y 0 si es false.
            animate={{ rotate: isHovered ? -30 : 0 }} 
            transition={{ duration: 0.3 }} // La animación de rotación dura 0.3 segundos.
          >
            <GiSteeringWheel size={28} className="text-white" />
          </motion.div>
        </motion.div>

        {/* Componente que maneja la animación de elementos que aparecen y desaparecen. */}
        <AnimatePresence>
          {/* Renderizado condicional: la nube de texto solo se muestra si 'isHovered' es true. */}
          {isHovered && (
            // La "nube de texto" o tooltip, animada con Framer Motion.
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }} // Estado inicial: invisible y ligeramente a la derecha.
              animate={{ opacity: 1, x: 0, scale: 1 }}   // Estado animado: visible y en su posición.
              exit={{ opacity: 0, x: 10, scale: 0.9 }}    // Estado de salida: se desvanece y se mueve a la derecha.
              transition={{ duration: 0.2 }}
              // Clases de estilo para la nube.
              className="
                absolute top-1/2 right-full -translate-y-1/2  // Posiciona la nube a la izquierda del botón y la centra verticalmente.
                mr-4 px-4 py-2          
                bg-[var(--background-contrast)] text-base text-[var(--text-primary)] 
                rounded-md shadow-lg whitespace-nowrap
                border border-[var(--accent-muted)]/50 // Añade un borde sutil.
              "
            >
              Click and become a driver!
              {/* Los dos divs siguientes crean un triángulo con borde que apunta hacia el botón. */}
              {/* Div para el borde del triángulo (figura de atrás, más grande). */}
              <div 
                className="absolute top-1/2 -right-[9px] w-0 h-0 
                border-t-[9px] border-t-transparent 
                border-b-[9px] border-b-transparent 
                border-l-[9px] border-l-[var(--accent-muted)]/50 
                -translate-y-1/2"
              ></div>
              {/* Div para el relleno del triángulo (figura de adelante, más pequeña). */}
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

// Exporta el componente para ser usado en otras partes de la aplicación.
export default FloatingButton;