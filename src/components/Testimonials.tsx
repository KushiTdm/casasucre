import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Muy acogedor y muy limpio, con una hermosa decoración local. Uno se siente cómodo de inmediato.",
    author: "Catherine",
    country: "Perú",
    flag: "🇵🇪",
    source: "Booking.com",
    rating: 5
  },
  {
    id: 2,
    text: "Excelente ubicación, a pocos minutos a pie de la Plaza de Armas. Muy buena relación calidad-precio.",
    author: "Pedro",
    country: "Venezuela",
    flag: "🇻🇪",
    source: "Booking.com",
    rating: 5
  },
  {
    id: 3,
    text: "El personal es extremadamente amable y siempre dispuesto a ayudar. Habitaciones cómodas y bien mantenidas.",
    author: "Camille",
    country: "Francia",
    flag: "🇫🇷",
    source: "Booking.com",
    rating: 5
  },
  {
    id: 4,
    text: "Alojamiento limpio, tranquilo y acogedor. La cocina compartida está bien equipada y es muy práctica.",
    author: "Luz",
    country: "Perú",
    flag: "🇵🇪",
    source: "Booking.com",
    rating: 5
  },
  {
    id: 5,
    text: "Muy buena acogida, personal atento y ubicación ideal para visitar Ayacucho a pie.",
    author: "Michael",
    country: "Estados Unidos",
    flag: "🇺🇸",
    source: "Booking.com",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-terracotta-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-terracotta-800 mb-4">
            Lo Que Dicen Nuestros Huéspedes
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experiencias auténticas compartidas por viajeros de todo el mundo
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-80 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-4">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-gold-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-800 text-center mb-8 leading-relaxed italic font-light">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div className="text-center">
                    <p className="font-semibold text-terracotta-800 text-lg mb-1">
                      {testimonials[currentIndex].author} {testimonials[currentIndex].flag}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].country} • {testimonials[currentIndex].source}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-terracotta-50 text-terracotta-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Avis précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-terracotta-50 text-terracotta-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Avis suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-terracotta-600 w-8 h-3'
                    : 'bg-terracotta-200 w-3 h-3 hover:bg-terracotta-400'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}