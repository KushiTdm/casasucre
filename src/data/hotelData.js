export const hotelData = {
  brand: "Casa Sucre Ayacucho",
  tagline: "Vive la Historia en el Corazón de Ayacucho",
  description: "Experimenta la hospitalidad peruana en el corazón de la Ciudad de las 33 Iglesias, donde el legado del Mariscal Sucre y la gloriosa Batalla de Ayacucho de 1824 cobran vida.",

  staff: {
    manager: "Yuly",
    customerExperience: "Daniela"
  },

  commonAmenities: [
    { name: "WiFi de Alta Velocidad", score: 9.5, icon: "Wifi" },
    { name: "Cocina Profesional Compartida", icon: "ChefHat" },
    { name: "Seguridad 24h + Cámaras", icon: "Shield" },
    { name: "Guarda Equipaje", icon: "Package" },
    { name: "Agua Caliente", icon: "Droplet" },
    { name: "Mesa de Tours", icon: "Map" }
  ],

  paymentPolicy: {
    method: "Solo Efectivo",
    note: "No aceptamos tarjetas. Hay cajeros cerca."
  },

  properties: [
    {
      id: "casona",
      name: "La Casona",
      subtitle: "Confort & Familia",
      address: "Jr. Sucre 591",
      profile: "Encanto histórico familiar con espacios amplios",
      type: "hotel",
      rating: 9.2,
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200",

      features: [
        "Edificio colonial restaurado",
        "Ideal para familias",
        "Habitaciones espaciosas",
        "Patio interior tradicional"
      ],

      rules: {
        pets: "Mascotas bajo solicitud",
        ageLimit: "Sin límite de edad",
        extraBeds: "Disponibles por $8 USD adicionales",
        checkIn: "14:00",
        checkOut: "11:00"
      },

      rooms: [
        {
          id: "casona-double-king",
          name: "Habitación Doble King",
          propertyId: "casona",
          propertyName: "La Casona",
          size: 30,
          beds: "1 Cama King",
          bathroom: "Baño Privado",
          capacity: 2,
          price: 150,
          specialOffer: "Nacer's Special",
          images: [
            "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200"
          ],
          amenities: ["WiFi", "TV", "Escritorio", "Armario amplio", "Ventanas grandes"],
          description: "Nuestra habitación más espaciosa con cama King y todo el confort para una estadía inolvidable."
        },
        {
          id: "casona-double-standard",
          name: "Habitación Doble Estándar",
          propertyId: "casona",
          propertyName: "La Casona",
          size: 20,
          beds: "1 Cama Doble",
          bathroom: "Baño Privado",
          capacity: 2,
          price: 120,
          images: [
            "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1200"
          ],
          amenities: ["WiFi", "TV", "Escritorio", "Armario"],
          description: "Habitación acogedora perfecta para parejas que buscan comodidad y estilo colonial."
        },
        {
          id: "casona-triple",
          name: "Habitación Triple",
          propertyId: "casona",
          propertyName: "La Casona",
          size: 30,
          beds: "1 Cama Individual + 1 Cama Doble",
          bathroom: "Baño Privado",
          capacity: 3,
          price: 140,
          images: [
            "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1200"
          ],
          amenities: ["WiFi", "TV", "Escritorio", "Armario amplio", "Espacio familiar"],
          description: "Espacio ideal para familias o grupos pequeños con todas las comodidades."
        }
      ]
    },
    {
      id: "hostel",
      name: "El Hostel",
      subtitle: "Social & Design",
      address: "Pasaje Bolognesi 209",
      profile: "Hostel #1 de Ayacucho - Ambiente social moderno",
      type: "hostel",
      rating: 9.8,
      image: "https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&w=1200",

      features: [
        "Calificado #1 en Ayacucho",
        "Diseño innovador sin escaleras",
        "Ambiente backpacker",
        "Zonas comunes amplias"
      ],

      rules: {
        pets: "No se permiten mascotas",
        ageLimit: "Solo mayores de 18 años",
        extraBeds: "No disponible",
        checkIn: "14:00",
        checkOut: "11:00"
      },

      rooms: [
        {
          id: "hostel-dorm-mixed",
          name: "Dormitorio Compartido Mixto",
          propertyId: "hostel",
          propertyName: "El Hostel",
          size: 50,
          beds: "Camas individuales con escaleras innovadoras",
          bathroom: "Baño Compartido",
          capacity: 8,
          price: 100,
          specialOffer: "Nacer's Special",
          images: [
            "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200"
          ],
          amenities: [
            "Cortinas de privacidad",
            "Enchufe y luz individual",
            "Casilleros gigantes",
            "Sin escaleras tipo litera",
            "WiFi de alta velocidad"
          ],
          description: "Dormitorio innovador con diseño único de escaleras, máxima privacidad y seguridad para tus pertenencias.",
          proTip: "Nota: Ubicado en nuestra propiedad Solo Adultos (18+)"
        },
        {
          id: "hostel-private-double",
          name: "Habitación Privada Doble",
          propertyId: "hostel",
          propertyName: "El Hostel",
          size: 15,
          beds: "2 Camas Individuales",
          bathroom: "Baño Compartido",
          capacity: 2,
          price: 90,
          images: [
            "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200"
          ],
          amenities: ["WiFi", "Casillero", "Escritorio", "Ventana"],
          description: "Habitación privada con el ambiente social del hostel y baño compartido moderno.",
          proTip: "Nota: Ubicado en nuestra propiedad Solo Adultos (18+)"
        }
      ]
    }
  ],

  extraServices: {
    title: "Menú de Nacer",
    subtitle: "Servicios exclusivos para enriquecer tu experiencia",
    services: [
      {
        id: "tours",
        name: "Operadores de Tours",
        price: 130,
        unit: "USD por día",
        description: "Tours personalizados a Wari, Quinua, Pampa de Ayacucho y más",
        icon: "Compass",
        includes: ["Transporte privado", "Guía certificado", "Entradas incluidas"]
      },
      {
        id: "laundry",
        name: "Servicio de Lavandería",
        price: 15,
        unit: "USD por carga",
        description: "Lavado, secado y doblado de tu ropa",
        icon: "Shirt",
        includes: ["Recojo y entrega", "Detergente premium", "Entrega en 24h"]
      },
      {
        id: "local-kit",
        name: "Kit Local Ayacuchano",
        price: 25,
        unit: "USD por kit",
        description: "Degusta lo mejor de Ayacucho con nuestro kit curado",
        icon: "ShoppingBag",
        includes: ["Queso artesanal regional", "Pan Chapla tradicional", "Dulces típicos"]
      }
    ]
  },

  localGuide: {
    title: "Tu Guía Local",
    subtitle: "Distancias desde Casa Sucre",
    locations: [
      {
        name: "Plaza de Armas",
        distance: "8 minutos caminando",
        description: "Corazón histórico de Ayacucho",
        icon: "MapPin"
      },
      {
        name: "Mercado Central",
        distance: "300 metros",
        description: "Experiencia gastronómica auténtica",
        icon: "Store"
      },
      {
        name: "Ruinas de Wari",
        distance: "45 minutos en auto",
        description: "Capital del imperio Wari (600-1100 d.C.)",
        icon: "Landmark"
      },
      {
        name: "Quinua",
        distance: "1 hora en auto",
        description: "Pueblo histórico de la Batalla de Ayacucho",
        icon: "Mountain"
      },
      {
        name: "Barrio Santa Ana",
        distance: "15 minutos caminando",
        description: "Artesanías y talleres tradicionales",
        icon: "Palette"
      },
      {
        name: "Mirador de Acuchimay",
        distance: "20 minutos en auto",
        description: "Vista panorámica de toda la ciudad",
        icon: "Eye"
      }
    ]
  },

  whatsappNumber: "51987654321",

  historicalContext: {
    title: "Historia Viva",
    content: "Ayacucho, conocida como la 'Cuna de la Libertad Americana', fue el escenario de la histórica Batalla de Ayacucho en 1824, donde el Mariscal Antonio José de Sucre selló la independencia de Sudamérica. Nuestra casona y hostel te permiten caminar las mismas calles empedradas donde se forjó la historia.",
    facts: [
      "33 iglesias coloniales en la ciudad",
      "Arquitectura colonial del siglo XVI",
      "Ciudad declarada Patrimonio Cultural",
      "Capital del Imperio Wari (600-1100 d.C.)"
    ]
  },

  proTips: {
    casona: "¿Sensible al ruido? Solicita una habitación en el piso alto para mayor tranquilidad.",
    hostel: "Llega temprano para disfrutar de nuestras áreas comunes y conocer a otros viajeros."
  }
};

export const getAllRooms = () => {
  return hotelData.properties.flatMap(property => property.rooms);
};

export const getRoomById = (roomId) => {
  const allRooms = getAllRooms();
  return allRooms.find(room => room.id === roomId);
};

export const getPropertyById = (propertyId) => {
  return hotelData.properties.find(property => property.id === propertyId);
};

export const getRoomsByProperty = (propertyId) => {
  const property = getPropertyById(propertyId);
  return property ? property.rooms : [];
};
