import Hero from "@/components/Hero";

export default function Home() {
  return (
    // Contenedor principal relativo para que el Hero absoluto se posicione correctamente
    <div className="relative"> 
      <Hero />
      
      {/* Este div ocupa el espacio de la primera pantalla. 
          Aquí pondremos el texto y los botones sobre el carrusel. */}
      <div className="h-screen">
        {/* Contenido sobre el Hero irá aquí */}
      </div>

      {/* El resto de las secciones de tu página irán debajo. */}
      {/* Les damos un fondo para que no sean transparentes y se vea el carrusel. */}
      <div className="relative bg-[var(--background-main)]">
        <section className="container mx-auto py-20">
          <h2 className="text-3xl text-center">Future Content Section</h2>
          {/* Más contenido... */}
        </section>
      </div>
    </div>
  );
}