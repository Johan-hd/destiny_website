import React from 'react';

// Definimos los tipos de las props para que TypeScript nos ayude
interface InfoCardProps {
  icon: React.ReactNode; // El ícono será un componente de React
  title: string;
  children: React.ReactNode; // El párrafo será el hijo del componente
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      {/* Contenedor del ícono */}
      <div className="text-4xl text-[var(--accent-primary)] mb-3">
        {icon}
      </div>
      {/* Título */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      {/* Párrafo (children) */}
      <p className="text-sm text-gray-300">
        {children}
      </p>
    </div>
  );
};

export default InfoCard;