import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

// Configura la fuente 'Geist' (sans-serif) y la asigna a una variable CSS para su uso global.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configura la fuente 'Geist Mono' (monoespaciada) y la asigna a otra variable CSS.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define los metadatos de la página. Esto es bueno para el SEO.
export const metadata: Metadata = {
  title: "Destiny VTC",
  description: "Your Virtual Trucking Company",
};

// 'RootLayout' es el componente principal que envuelve toda la aplicación.
// 'children' es una prop especial que representa cualquier página que se esté renderizando.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Etiqueta HTML principal, con el idioma definido como inglés.
    <html lang="en">
      {/* Etiqueta body principal. */}
      <body
        // Asigna las variables de las fuentes al body para que estén disponibles en toda la app.
        // 'flex flex-col min-h-screen' es una configuración clave para que el footer se mantenga al final,
        // incluso en páginas con poco contenido.
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* La Navbar está comentada aquí porque solo se usa en 'page.tsx' actualmente. */}
        {/* <Navbar /> */}
        
        {/* Contenedor principal para el contenido de la página. */}
        {/* 'flex-grow' hace que este contenedor ocupe todo el espacio vertical disponible, empujando al footer hacia abajo. */}
        <main className="flex-grow">{children}</main>
        
        {/* Renderiza el componente Footer en la parte inferior de todas las páginas. */}
        <Footer />
        {/* Renderiza el componente FloatingButton, que estará fijo en la esquina de la pantalla. */}
        <FloatingButton />
      </body>
    </html>
  );
}