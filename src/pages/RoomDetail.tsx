import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Bed, Maximize2, Users, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { getRoomById } from '../data/hotelData';
import BookingWidget from '../components/BookingWidget';
import { useState } from 'react';

export default function RoomDetail() {
  const { roomId } = useParams<{ roomId: string }>();
  const room = getRoomById(roomId || '');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Habitación no encontrada</h2>
          <Link to="/" className="text-terracotta-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-colonial-white to-white">
      <div className="relative h-[500px] overflow-hidden">
        <img
          src={room.images[currentImageIndex]}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {room.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {room.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Ver imagen ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <Link
          to={`/property/${room.propertyId}`}
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </Link>

        {room.specialOffer && (
          <div className="absolute top-6 right-6 bg-gold-500 text-terracotta-900 px-4 py-2 rounded-full flex items-center gap-2 text-lg font-bold shadow-xl">
            <Sparkles className="w-5 h-5" />
            <span>{room.specialOffer}</span>
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <div className="mb-6">
                    <div className="text-sm text-terracotta-600 font-semibold mb-2">
                      {room.propertyName}
                    </div>
                    <h1 className="font-display text-4xl font-bold text-terracotta-800 mb-4">
                      {room.name}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
                    <div className="text-center">
                      <div className="bg-terracotta-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Maximize2 className="w-8 h-8 text-terracotta-600" />
                      </div>
                      <div className="text-2xl font-bold text-terracotta-800">{room.size}m²</div>
                      <div className="text-sm text-gray-600">Espacio</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-terracotta-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-8 h-8 text-terracotta-600" />
                      </div>
                      <div className="text-2xl font-bold text-terracotta-800">{room.capacity}</div>
                      <div className="text-sm text-gray-600">
                        {room.capacity === 1 ? 'Persona' : 'Personas'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-terracotta-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Bed className="w-8 h-8 text-terracotta-600" />
                      </div>
                      <div className="text-sm font-semibold text-terracotta-800 mt-3">
                        {room.beds}
                      </div>
                    </div>
                  </div>

                  <div className="py-6">
                    <h3 className="font-semibold text-xl text-terracotta-800 mb-4">
                      Comodidades de la Habitación
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="py-6 border-t border-gray-200">
                    <h3 className="font-semibold text-xl text-terracotta-800 mb-3">
                      Baño
                    </h3>
                    <p className="text-gray-700">{room.bathroom}</p>
                  </div>

                  {room.proTip && (
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-blue-800 mb-1">Nota Importante</p>
                          <p className="text-gray-700">{room.proTip}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="font-display text-2xl font-bold text-terracotta-800 mb-4">
                    Precio y Disponibilidad
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-terracotta-800">
                      ${room.price}
                    </span>
                    <span className="text-xl text-gray-600">por noche</span>
                  </div>
                  {room.specialOffer && (
                    <p className="text-gold-600 font-semibold mb-4">
                      ✨ {room.specialOffer} - ¡Precio exclusivo!
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    Precios sujetos a disponibilidad. Contacta directamente para confirmar.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <BookingWidget roomName={room.name} propertyName={room.propertyName} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
