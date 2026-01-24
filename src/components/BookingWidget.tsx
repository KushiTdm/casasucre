import { useState } from 'react';
import { Calendar, Users, MessageCircle } from 'lucide-react';
import { hotelData } from '../data/hotelData';

interface BookingWidgetProps {
  roomName: string;
  propertyName: string;
}

export default function BookingWidget({ roomName, propertyName }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [guestName, setGuestName] = useState('');

  const handleBooking = () => {
    if (!checkIn || !checkOut || !guestName) {
      alert('Por favor completa todos los campos');
      return;
    }

    const message = `Hola Yuly, me gustaría reservar la ${roomName} en ${propertyName} desde ${checkIn} hasta ${checkOut} para ${guests} persona(s). Mi nombre es ${guestName}.`;
    const whatsappUrl = `https://wa.me/${hotelData.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-gradient-to-br from-terracotta-50 to-gold-50 rounded-xl shadow-xl p-6 sticky top-24">
      <h3 className="font-display text-2xl font-bold text-terracotta-800 mb-6 text-center">
        Reserva Ahora
      </h3>

      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-4 h-4 text-terracotta-500" />
            Check-in
          </label>
          <input
            type="date"
            min={today}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-4 py-3 border-2 border-terracotta-200 rounded-lg focus:border-terracotta-500 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Calendar className="w-4 h-4 text-terracotta-500" />
            Check-out
          </label>
          <input
            type="date"
            min={checkIn || today}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-4 py-3 border-2 border-terracotta-200 rounded-lg focus:border-terracotta-500 focus:outline-none transition-colors"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            <Users className="w-4 h-4 text-terracotta-500" />
            Huéspedes
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-4 py-3 border-2 border-terracotta-200 rounded-lg focus:border-terracotta-500 focus:outline-none transition-colors"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Persona' : 'Personas'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
            Tu Nombre
          </label>
          <input
            type="text"
            placeholder="Nombre completo"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full px-4 py-3 border-2 border-terracotta-200 rounded-lg focus:border-terracotta-500 focus:outline-none transition-colors"
          />
        </div>

        <div className="bg-white rounded-lg p-4 border-2 border-gold-300">
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-semibold text-terracotta-700">Nota Importante:</span>
          </p>
          <p className="text-sm text-gray-700">
            {hotelData.paymentPolicy.method} - {hotelData.paymentPolicy.note}
          </p>
        </div>

        <button
          onClick={handleBooking}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Reservar por WhatsApp
        </button>

        <p className="text-xs text-center text-gray-600">
          Te conectaremos con Yuly, nuestra gerente, para confirmar tu reserva
        </p>
      </div>
    </div>
  );
}
