import { Hero } from '@/features/hero/components/Hero';
import { BurgerGrid } from '@/features/menu/components/BurgerGrid';
import { Differentiators } from '@/features/about/components/Differentiators';
import { MapPlaceholder } from '@/features/location/components/MapPlaceholder';
import { ContactInfo } from '@/features/location/components/ContactInfo';
import { WhatsAppButton } from '@/features/contact/components/WhatsAppButton';

export const metadata = {
  title: 'Cool Burger and Fries - Hamburguesas Artesanales',
  description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
  openGraph: {
    title: 'Cool Burger and Fries - Hamburguesas Artesanales',
    description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
    url: 'https://coolburgerandfries.com',
    siteName: 'Cool Burger and Fries',
    images: [
      {
        url: 'https://coolburgerandfries.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cool Burger and Fries logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cool Burger and Fries - Hamburguesas Artesanales',
    description: 'Descubre las mejores hamburguesas artesanales de México. Ingredientes frescos, recetas originales y ambiente cool.',
    images: ['https://coolburgerandfries.com/twitter-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      
      {/* Menu Section */}
      <BurgerGrid />
      
      {/* About Section */}
      <Differentiators />
      
      {/* Location Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Encuéntranos
          </h2>
          
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 items-start">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Mapa</h3>
              <MapPlaceholder />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Información de contacto</h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gray-800 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6 text-white">
            ¿Listo para ordenar?
          </h2>
          <p className="text-gray-400 mb-8">
            Haz tu pedido directamente por WhatsApp
          </p>
          <div className="inline-flex items-center space-x-4 justify-center">
            <a href="https://wa.me/525512345678?text=Hola%20quisiera%20hacer%20un%20pedido" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-200">
              <span>💬</span>
              <span>Ordenar por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}