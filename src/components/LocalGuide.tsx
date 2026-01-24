import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { hotelData } from '../data/hotelData';

export default function LocalGuide() {
  const { localGuide } = hotelData;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-terracotta-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-terracotta-800 mb-4">
            {localGuide.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {localGuide.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {localGuide.locations.map((location, index) => {
            const IconComponent = Icons[location.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-terracotta-100 p-3 rounded-lg">
                    <IconComponent className="w-6 h-6 text-terracotta-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-terracotta-800 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gold-600 font-semibold text-sm mb-2">
                      {location.distance}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {location.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
