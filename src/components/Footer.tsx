import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { hotelData } from '../data/hotelData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-terracotta-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gold-300">
              Casa Sucre
            </h3>
            <p className="text-colonial-white/80 mb-4">
              Vive la historia de Ayacucho en nuestras dos propiedades únicas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/CasaSucreAyacucho/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/casa_sucre_ayacucho/"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${hotelData.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-2 rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-300">
              Nuestras Propiedades
            </h4>
            <ul className="space-y-2 text-colonial-white/80">
              {hotelData.properties.map((property) => (
                <li key={property.id}>
                  <Link
                    to={`/property/${property.id}`}
                    className="hover:text-gold-300 transition-colors flex items-start gap-2"
                  >
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">{property.name}</div>
                      <div className="text-sm">{property.address}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-300">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-colonial-white/80">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <a href="/#properties" className="hover:text-gold-300 transition-colors">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="/#historia" className="hover:text-gold-300 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-gold-300 transition-colors">
                  Servicios Extra
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-300">
              Contacto
            </h4>
            <ul className="space-y-3 text-colonial-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href={`https://wa.me/${hotelData.whatsappNumber}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  +{hotelData.whatsappNumber}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@casasucreayacucho.com"
                  className="hover:text-gold-300 transition-colors"
                >
                  info@casasucreayacucho.com
                </a>
              </li>
              <li className="text-sm">
                <strong>Manager:</strong> {hotelData.staff.manager}
              </li>
              <li className="text-sm">
                <strong>Experiencia al Cliente:</strong> {hotelData.staff.customerExperience}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-colonial-white/70 text-sm">
          <p className="mb-2">
            © {currentYear} Casa Sucre Ayacucho. Todos los derechos reservados.
          </p>
          <p className="text-xs">
            {hotelData.paymentPolicy.method} - {hotelData.paymentPolicy.note}
          </p>
        </div>
      </div>
    </footer>
  );
}
