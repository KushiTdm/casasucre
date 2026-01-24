import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { hotelData } from '../data/hotelData';

export default function Amenities() {
  const { commonAmenities } = hotelData;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-terracotta-800 mb-4">
            Servicios Incluidos
          </h2>
          <p className="text-gray-600">
            Comodidades para hacer tu estadía inolvidable
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {commonAmenities.map((amenity, index) => {
            const IconComponent = Icons[amenity.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="bg-terracotta-50 group-hover:bg-terracotta-100 p-4 rounded-xl mb-3 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-terracotta-600" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {amenity.name}
                </h3>
                {amenity.score && (
                  <div className="text-xs text-gold-600 font-semibold">
                    ★ {amenity.score}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
