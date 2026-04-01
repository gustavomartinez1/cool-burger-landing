import { BurgerCard } from './BurgerCard';

export const BurgerGrid = () => {
  const burgers = [
    {
      name: 'Clásica Cool',
      description: 'Carne 100% res, queso cheddar, lechuga, tomate, cebolla caramelizada y salsa especial en pan artesanal',
      price: '149',
    },
    {
      name: 'Bacon Deluxe',
      description: 'Doble carne, bacon crujiente, queso suizo, aros de cebolla y salsa BBQ casera',
      price: '189',
    },
    {
      name: 'Vegetariana Premium',
      description: 'Hamburguesa de garbanzos y quinoa, aguacate, espinaca, tomate seco y alioli de limón',
      price: '165',
    },
    {
      name: 'Chipotle Mexicana',
      description: 'Carne adobada con chipotle, queso oaxaca, jalapeños encurtidos, cilantro y salsa de mango habanero',
      price: '175',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Nuestras Burgers
        </h2>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {burgers.map((burger, index) => (
            <BurgerCard 
              key={index} 
              {...burger} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};