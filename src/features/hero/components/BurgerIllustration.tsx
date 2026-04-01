export const BurgerIllustration = () => {
  return (
    <div className="relative h-96 w-full">
      {/* Placeholder for burger illustration - in real implementation this would be an actual image or SVG */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-400 opacity-20 blur-3xl"></div>
      
      {/* Burger bun top */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-orange-300 rounded-full"></div>
      
      {/* Lettuce */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-2 bg-green-400/50 rounded"></div>
      
      {/* Tomato */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-26 h-2 bg-red-400/50 rounded"></div>
      
      {/* Cheese */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-yellow-400/50"></div>
      
      {/* Patty */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-22 h-4 bg-brown-600/70 rounded"></div>
      
      {/* Bottom bun */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-6 bg-orange-200 rounded-full"></div>
      
      {/* Steam effect */}
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-8 w-4 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-6 w-2 h-1.5 bg-white/20 rounded-full animate-pulse delay-100"></div>
    </div>
  );
};