import { Hero } from '@/features/hero/components/Hero';
import { BurgerGrid } from '@/features/menu/components/BurgerGrid';
import { Differentiators } from '@/features/about/components/Differentiators';
import { MapPlaceholder } from '@/features/location/components/MapPlaceholder';
import { ContactInfo } from '@/features/location/components/ContactInfo';

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
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8]">
      <Hero />
      
      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white reveal-on-scroll">
            Nuestras Burgers
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            <div className="burger-card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-red-900/30 to-gray-800 flex items-center justify-center">
                <span className="text-6xl">🍔</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Clásica Cool</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">Carne 100% res, queso cheddar, lechuga, tomate, cebolla caramelizada y salsa especial en pan artesanal</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#E63946] font-bold text-lg">$149</span>
                  <a href="https://wa.me/525512345678?text=Hola%20quisiera%20pedir%20una%20Clásica%20Cool" target="_blank" rel="noopener noreferrer" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">Pedir</a>
                </div>
              </div>
            </div>
            <div className="burger-card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-amber-900/30 to-gray-800 flex items-center justify-center">
                <span className="text-6xl">🥓</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Bacon Deluxe</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">Doble carne, bacon crujiente, queso suizo, aros de cebolla y salsa BBQ casera</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#E63946] font-bold text-lg">$189</span>
                  <a href="https://wa.me/525512345678?text=Hola%20quisiera%20pedir%20una%20Bacon%20Deluxe" target="_blank" rel="noopener noreferrer" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">Pedir</a>
                </div>
              </div>
            </div>
            <div className="burger-card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-green-900/30 to-gray-800 flex items-center justify-center">
                <span className="text-6xl">🥑</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Vegetariana Premium</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">Hamburguesa de garbanzos y quinoa, aguacate, espinaca, tomate seco y alioli de limón</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#E63946] font-bold text-lg">$165</span>
                  <a href="https://wa.me/525512345678?text=Hola%20quisiera%20pedir%20una%20Vegetariana%20Premium" target="_blank" rel="noopener noreferrer" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">Pedir</a>
                </div>
              </div>
            </div>
            <div className="burger-card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-orange-900/30 to-gray-800 flex items-center justify-center">
                <span className="text-6xl">🌶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Chipotle Mexicana</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">Carne adobada con chipotle, queso oaxaca, jalapeños encurtidos, cilantro y salsa de mango habanero</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#E63946] font-bold text-lg">$175</span>
                  <a href="https://wa.me/525512345678?text=Hola%20quisiera%20pedir%20una%20Chipotle%20Mexicana" target="_blank" rel="noopener noreferrer" className="bg-[#E63946] hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">Pedir</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white reveal-on-scroll">
            ¿Por qué Cool Burger?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-[#E63946]/30 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-[#E63946]/10 rounded-full">
                <span className="text-3xl">🥩</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Ingredientes Frescos</h3>
              <p className="text-gray-400">Carne 100% res, vegetales de mercado local y pan artesanal diario</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-[#E63946]/30 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-[#E63946]/10 rounded-full">
                <span className="text-3xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Recetas Originales</h3>
              <p className="text-gray-400">Creaciones únicas desarrolladas por nuestro chef ejecutivo con influencias de street food global</p>
            </div>
            <div className="text-center p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-[#E63946]/30 transition-colors">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-[#E63946]/10 rounded-full">
                <span className="text-3xl">🏙️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Ambiente Cool</h3>
              <p className="text-gray-400">Diseño urbano inspirado en NYC food trucks y cultura streetwear para una experiencia completa</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white reveal-on-scroll">
            Encuéntranos
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 items-start">
            <div className="reveal-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-white">Mapa</h3>
              <div className="w-full h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700/50">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">📍</div>
                  <div className="font-medium">Mapa de ubicación</div>
                  <div className="mt-2 text-sm text-gray-600">Google Maps se integrará aquí</div>
                </div>
              </div>
            </div>
            <div className="reveal-on-scroll">
              <h3 className="text-xl font-bold mb-4 text-white">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#E63946]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Dirección</h3>
                    <p className="text-gray-400">Av. Revolución #123, Colonia Hipódromo, Ciudad de México</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#E63946]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>🕒</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Horario</h3>
                    <p className="text-gray-400">Lunes a Domingo: 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#E63946]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span>📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Teléfono</h3>
                    <p className="text-gray-400">+52 55 1234 5678</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#E63946]/10 via-gray-900 to-[#E63946]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 reveal-on-scroll">
          <h2 className="text-2xl font-bold mb-4 text-white">
            ¿Listo para ordenar?
          </h2>
          <p className="text-gray-400 mb-8">
            Haz tu pedido directamente por WhatsApp
          </p>
          <a href="https://wa.me/525512345678?text=Hola%20quisiera%20hacer%20un%20pedido" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-flex items-center space-x-3 bg-[#E63946] hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transform hover:scale-105 transition-all duration-200 whatsapp-pulse">
            <span className="text-2xl">💬</span>
            <span className="text-lg">Ordenar por WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/525512345678?text=Hola%20quisiera%20hacer%20un%20pedido" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transform hover:scale-110 transition-transform duration-200 whatsapp-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}
