import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/', scroll: false },
    { label: 'Propiedades', href: '/#properties', scroll: true },
    { label: 'Historia', href: '/#historia', scroll: true },
    { label: 'Servicios', href: '/#servicios', scroll: true },
  ];

  const handleNavClick = (href: string, shouldScroll: boolean) => {
    if (shouldScroll && location.pathname === '/') {
      const id = href.split('#')[1];
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className={`font-display text-2xl font-bold transition-colors duration-300 ${
              isScrolled || !isHomePage
                ? 'text-terracotta-800'
                : 'text-white'
            }`}
          >
            Casa Sucre
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href, link.scroll)}
                className={`font-semibold transition-colors duration-300 hover:text-gold-500 ${
                  isScrolled || !isHomePage
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`https://wa.me/51987654321?text=${encodeURIComponent('¡Hola! Me gustaría hacer una reserva.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-terracotta-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Reservar Ahora
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled || !isHomePage
                ? 'text-terracotta-800'
                : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href, link.scroll)}
                  className="block text-gray-700 font-semibold hover:text-gold-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/51987654321?text=${encodeURIComponent('¡Hola! Me gustaría hacer una reserva.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold-500 hover:bg-gold-600 text-terracotta-900 font-semibold px-6 py-3 rounded-lg text-center transition-colors"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
