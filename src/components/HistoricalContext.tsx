import { motion } from 'framer-motion';
import { BookOpen, CheckCircle } from 'lucide-react';
import { hotelData } from '../data/hotelData';

export default function HistoricalContext() {
  const { historicalContext } = hotelData;

  return (
    <section id="historia" className="py-20 bg-terracotta-900 text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gold-500/20 backdrop-blur-sm p-4 rounded-full mb-6">
              <BookOpen className="w-12 h-12 text-gold-300" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {historicalContext.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8"
          >
            <p className="text-lg leading-relaxed text-colonial-white/90 mb-8">
              {historicalContext.content}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {historicalContext.facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                  <span className="text-colonial-white">{fact}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold-300 italic text-lg font-display">
              "Cuna de la Libertad Americana"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
