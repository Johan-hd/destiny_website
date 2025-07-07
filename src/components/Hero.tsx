'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  '/images/truck_1.png',
  '/images/truck_2.png',
  '/images/truck_3.png',
  '/images/truck_4.png',
  '/images/truck_5.png',
  '/images/truck_6.png',
];

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    // === CAMBIOS AQUÍ ===
    // 1. Posicionamos de forma absoluta para que no ocupe espacio en el flujo del documento.
    // 2. 'inset-0' hace que ocupe toda la pantalla.
    // 3. '-z-10' lo envía detrás de todo el resto del contenido.
    <div className="absolute inset-0 -z-10 overflow-hidden h-screen" ref={emblaRef}>
      <div className="flex h-full">
        {images.map((src, index) => (
          <div className="relative flex-[0_0_100%] h-full" key={index}>
            <Image
              src={src}
              alt={`Destiny VTC Slide ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;