interface BurgerCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl?: string;
}

export const BurgerCard = ({ name, description, price, imageUrl }: BurgerCardProps) => {
  return (
    <div className="burger-card bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <div className="text-6xl">🍔</div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-500 font-bold text-lg">${price}</span>
          <a 
            href="https://wa.me/525512345678?text=Hola%20quisiera%20pedir%20una%20" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Pedir
          </a>
        </div>
      </div>
    </div>
  );
};
