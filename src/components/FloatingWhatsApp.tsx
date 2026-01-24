import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { hotelData } from '../data/hotelData';

export default function FloatingWhatsApp() {
  const message = "¡Hola! Estoy interesado en alojarme en Casa Sucre. ¿Pueden ayudarme?";
  const whatsappUrl = `https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap hidden group-hover:block"
      >
        ¿Necesitas ayuda?
      </motion.div>
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />
    </motion.a>
  );
}
