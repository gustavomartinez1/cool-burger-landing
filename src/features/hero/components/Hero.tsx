'use client';
import { BurgerIllustration } from './BurgerIllustration';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 bg-black">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl font-bold mb-4 text-white">
          Cool Burger and Fries
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl">
          Hamburguesas artesanales con ingredientes frescos y recetas originales
        </p>
      </div>
      
      <div className="w-full max-w-md animate-scale-in">
        <BurgerIllustration />
      </div>
      
      <div className="mt-10 animate-fade-in-up-delayed">
        <a href="#menu" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105">
          Ver Menú
        </a>
      </div>
    </section>
  );
};
