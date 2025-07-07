// Declara que este es un "Componente de Cliente" porque utiliza hooks y librerías
// que necesitan interactuar con el navegador (como embla-carousel-react).
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

// Array que contiene las rutas de las imágenes que se mostrarán en el carrusel.
// Estas imágenes deben estar ubicadas en la carpeta /public del proyecto.
const images = [
  '/images/truck_1.png',
  '/images/truck_2.png',
  '/images/truck_3.png',
  '/images/truck_4.png',
  '/images/truck_5.png',
  '/images/truck_6.png',
];

// Definición del componente funcional Hero.
const Hero = () => {
  // Inicializa el carrusel usando el hook 'useEmblaCarousel'.
  // { loop: true } hace que el carrusel sea infinito.
  // [Autoplay({ delay: 4000 })] activa el plugin de autoplay, cambiando la imagen cada 4000ms (4 segundos).
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  // El JSX que se renderizará para el componente.
  return (
    // Contenedor principal del carrusel.
    // 'absolute inset-0' lo posiciona para que ocupe todo el espacio de su contenedor padre relativo.
    // '-z-10' lo coloca en una capa de fondo, detrás del contenido principal.
    // 'h-full w-full' asegura que llene completamente a su contenedor padre.
    // 'overflow-hidden' oculta cualquier parte del carrusel que se salga de los límites.
    // 'ref={emblaRef}' conecta este div con la lógica del carrusel de Embla.
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden" ref={emblaRef}>
      {/* Contenedor interno que Embla utiliza para las diapositivas. 'flex' las alinea horizontalmente. */}
      <div className="flex h-full">
        {/* Itera sobre el array de imágenes para crear una diapositiva para cada una. */}
        {images.map((src, index) => (
          // Contenedor para cada diapositiva individual.
          // 'relative' para poder posicionar la imagen y el overlay dentro de ella.
          // 'flex-[0_0_100%]' es una clase de Tailwind que le dice a cada diapositiva que ocupe el 100% del ancho del carrusel.
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={src} // La ruta de la imagen actual.
              alt={`Destiny VTC Slide ${index + 1}`} // Texto alternativo para accesibilidad.
              fill // Hace que la imagen ocupe todo el espacio del div padre ('relative').
              style={{ objectFit: 'cover' }} // 'cover' asegura que la imagen cubra todo el espacio sin distorsionarse, recortando si es necesario.
              priority={index === 0} // Da prioridad de carga a la primera imagen para mejorar el LCP (Largest Contentful Paint).
            />
            {/* Div para el overlay oscuro. Se coloca sobre la imagen para mejorar la legibilidad del texto que irá encima. */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta el componente para poder usarlo en otras partes de la aplicación.
export default Hero;