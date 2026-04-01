export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mt-0.5">
          📍
        </div>
        <div>
          <h3 className="font-bold text-white">Dirección</h3>
          <p className="text-gray-400">Av. Revolución #123, Colonia Hipódromo, Ciudad de México</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mt-0.5">
          🕒
        </div>
        <div>
          <h3 className="font-bold text-white">Horario</h3>
          <p className="text-gray-400">Lunes a Domingo: 12:00 PM - 10:00 PM</p>
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mt-0.5">
          📞
        </div>
        <div>
          <h3 className="font-bold text-white">Teléfono</h3>
          <p className="text-gray-400">+52 55 1234 5678</p>
        </div>
      </div>
    </div>
  );
};