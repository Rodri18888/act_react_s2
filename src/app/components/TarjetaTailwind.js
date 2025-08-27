export default function TarjetaTailwind({ titulo, descripcion, imagen, etiqueta }) {
  return (
    <div className="flex flex-col w-64 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 m-2">
      {imagen && (
        <img 
          src={imagen} 
          alt={titulo} 
          className="w-full h-40 object-cover rounded-t-lg" 
        />
      )}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800">{titulo}</h3>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full self-start">
          {etiqueta}
        </span>
      </div>
    </div>
  );
}
