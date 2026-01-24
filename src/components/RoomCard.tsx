import { motion } from 'framer-motion';
import { Bed, Maximize2, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoomCardProps {
  room: {
    id: string;
    name: string;
    propertyName: string;
    size: number;
    beds: string;
    bathroom: string;
    capacity: number;
    price: number;
    specialOffer?: string;
    images: string[];
    amenities: string[];
    description: string;
  };
  index: number;
}

export default function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {room.specialOffer && (
          <div className="absolute top-4 right-4 bg-gold-500 text-terracotta-900 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>{room.specialOffer}</span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
          {room.propertyName}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-terracotta-800 mb-3">
          {room.name}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
          {room.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Maximize2 className="w-4 h-4 text-terracotta-500" />
            <span className="text-sm">{room.size}m²</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="w-4 h-4 text-terracotta-500" />
            <span className="text-sm">{room.capacity} {room.capacity === 1 ? 'persona' : 'personas'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 col-span-2">
            <Bed className="w-4 h-4 text-terracotta-500" />
            <span className="text-sm">{room.beds}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="text-xs bg-terracotta-50 text-terracotta-700 px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              +{room.amenities.length - 3} más
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="text-sm text-gray-500">Desde</div>
            <div className="text-2xl font-bold text-terracotta-800">
              ${room.price}
              <span className="text-sm text-gray-500 font-normal"> /noche</span>
            </div>
          </div>
          <Link
            to={`/room/${room.id}`}
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
