export const WhatsAppButton = () => {
  const whatsappNumber = '+525512345678'; // Placeholder - debería venir de variables de entorno
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hola%20quisiera%20hacer%20un%20pedido`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-bold flex items-center space-x-3 p-4 rounded-full shadow-lg z-50 transform hover:scale-105 transition-transform duration-200"
    >
      <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-red-600">
        💬
      </div>
      <div>
        <span className="block text-sm">WhatsApp</span>
        <span className="block font-medium">Pedidos</span>
      </div>
    </a>
  );
};