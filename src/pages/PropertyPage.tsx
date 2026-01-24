import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Star, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { getPropertyById } from '../data/hotelData';
import RoomCard from '../components/RoomCard';
import { hotelData } from '../data/hotelData';

export default function PropertyPage() {
  const { propertyId } = useParams<{ propertyId: string }>();
  const property = getPropertyById(propertyId || '');

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Propiedad no encontrada</h2>
          <Link to="/" className="text-terracotta-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const proTip = property.id === 'casona' ? hotelData.proTips.casona : hotelData.proTips.hostel;

  return (
    <div className="min-h-screen bg-gradient-to-b from-colonial-white to-white">
      <div className="relative h-96 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
                {property.name}
              </h1>
              <p className="text-2xl text-gold-300 font-semibold mb-4">
                {property.subtitle}
              </p>
              <div className="flex items-center justify-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{property.address}</span>
                </div>
                <div className="flex items-center gap-2 bg-gold-500 text-terracotta-900 px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-bold">{property.rating}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Link
          to="/"
          className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="font-display text-3xl font-bold text-terracotta-800 mb-6">
              Sobre Esta Propiedad
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {property.profile}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-terracotta-700 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Características
                </h3>
                <ul className="space-y-2">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-gold-500 mt-1">★</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-terracotta-700 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Reglas de la Casa
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Check-in:</strong> {property.rules.checkIn}</li>
                  <li><strong>Check-out:</strong> {property.rules.checkOut}</li>
                  <li><strong>Mascotas:</strong> {property.rules.pets}</li>
                  <li><strong>Edad:</strong> {property.rules.ageLimit}</li>
                  <li><strong>Camas extra:</strong> {property.rules.extraBeds}</li>
                </ul>
              </div>
            </div>

            {proTip && (
              <div className="bg-gold-50 border-l-4 border-gold-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gold-800 mb-1">Pro-Tip</p>
                    <p className="text-gray-700">{proTip}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <h2 className="font-display text-3xl font-bold text-terracotta-800 mb-8 text-center">
            Habitaciones Disponibles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {property.rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
