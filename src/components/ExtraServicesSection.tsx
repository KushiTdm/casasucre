import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { hotelData } from '../data/hotelData';
import { MessageCircle, CheckCircle } from 'lucide-react';

export default function ExtraServicesSection() {
  const { extraServices } = hotelData;

  const handleServiceInquiry = (serviceName: string) => {
    const message = `Hola, me interesa saber más sobre el servicio: ${serviceName}`;
    const whatsappUrl = `https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-terracotta-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-terracotta-800 mb-4">
            {extraServices.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {extraServices.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {extraServices.services.map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-terracotta-500 to-terracotta-700 p-8 text-center">
                  <div className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <div className="text-gold-300 text-3xl font-bold">
                    ${service.price}
                  </div>
                  <div className="text-colonial-white text-sm">
                    {service.unit}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 text-center">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-semibold text-terracotta-700 mb-2">
                      Incluye:
                    </p>
                    {service.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleServiceInquiry(service.name)}
                    className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
