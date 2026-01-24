import { motion } from 'framer-motion';
import { MapPin, Star, Users, Home } from 'lucide-react';
import { hotelData } from '../data/hotelData';
import { Link } from 'react-router-dom';

export default function PropertySelector() {
  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-colonial-white to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-terracotta-800 mb-4">
            Elige Tu Experiencia
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Dos propiedades únicas en el corazón histórico de Ayacucho
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hotelData.properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute top-4 right-4 bg-gold-500 text-terracotta-900 px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{property.rating}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-display text-3xl font-bold mb-2">
                    {property.name}
                  </h3>
                  <p className="text-gold-300 text-lg font-semibold mb-3">
                    {property.subtitle}
                  </p>

                  <div className="flex items-center gap-2 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{property.address}</span>
                  </div>

                  <p className="text-sm text-gray-200 mb-4 line-clamp-2">
                    {property.profile}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Link
                      to={`/property/${property.id}`}
                      className="flex-1 bg-gold-500 hover:bg-gold-600 text-terracotta-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      Ver Habitaciones
                    </Link>
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {property.type === 'hotel' ? (
                        <Home className="w-5 h-5" />
                      ) : (
                        <Users className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
