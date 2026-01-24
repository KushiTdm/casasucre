import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProperties = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/guia-ayacucho-arco-triunfo-iglesia-patrimonio.jpg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-terracotta-900/70 via-terracotta-800/60 to-terracotta-900/80" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <motion.h1
            className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Casa Sucre
          </motion.h1>

          <motion.h2
            className="font-display text-3xl md:text-5xl font-semibold mb-8 text-gold-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Vive la Historia en el Corazón de Ayacucho
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl mb-12 leading-relaxed text-colonial-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Experimenta la hospitalidad peruana en la Ciudad de las 33 Iglesias,
            donde el legado del <span className="font-semibold text-gold-300">Mariscal Sucre</span> y
            la gloriosa <span className="font-semibold text-gold-300">Batalla de Ayacucho de 1824</span> cobran vida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProperties}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-terracotta-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Explorar Alojamientos
            </button>
            <a
              href="#historia"
              className="px-8 py-4 bg-transparent border-2 border-colonial-white hover:bg-colonial-white/10 text-colonial-white font-semibold rounded-lg transition-all duration-300"
            >
              Nuestra Historia
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProperties}
        >
          <ChevronDown className="w-8 h-8 animate-bounce text-gold-300" />
        </motion.div>
      </div>
    </section>
  );
}
