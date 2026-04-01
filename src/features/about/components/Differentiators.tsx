interface DifferentiatorProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Differentiators = () => {
  const differentiators = [
    {
      title: 'Ingredientes Frescos',
      description: 'Carne 100% res, vegetales de mercado local y pan artesanal diario',
      icon: () => <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">🥩</div>,
    },
    {
      title: 'Recetas Originales',
      description: 'Creaciones únicas desarrolladas por nuestro chef ejecutivo con influencias de street food global',
      icon: () => <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">👨‍🍳</div>,
    },
    {
      title: 'Ambiente Cool',
      description: 'Diseño urbano inspirado en NYC food trucks y cultura streetwear para una experiencia completa',
      icon: () => <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">🏙️</div>,
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">
          ¿Por qué Cool Burger?
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((diff, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="mb-4">
                {diff.icon()}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{diff.title}</h3>
              <p className="text-gray-400">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};