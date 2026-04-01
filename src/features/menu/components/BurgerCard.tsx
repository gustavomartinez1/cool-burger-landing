interface BurgerCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl?: string;
}

export const BurgerCard = ({ name, description, price, imageUrl }: BurgerCardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-border duration-300">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          <div className="text-gray-500">Imagen de {name}</div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-red-600 font-bold text-lg">${price}</span>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
};