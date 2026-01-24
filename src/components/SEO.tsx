import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Casa Sucre Ayacucho - Hospedaje Colonial en el Corazón de Ayacucho',
  description = 'Experimenta la hospitalidad peruana en Casa Sucre Ayacucho. Dos propiedades únicas en el centro histórico: La Casona y El Hostel. Reserva tu estadía en la Ciudad de las 33 Iglesias.',
  keywords = 'Casa Sucre, Ayacucho, hospedaje Ayacucho, hotel Ayacucho, hostel Ayacucho, alojamiento Perú, turismo Ayacucho, Mariscal Sucre, hotel colonial, hospedaje centro Ayacucho',
  image = 'https://casasucreayacucho.com/og-image.jpg',
  url = 'https://casasucreayacucho.com',
  type = 'website'
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      <meta name="author" content="Casa Sucre Ayacucho" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_PE" />
      <meta property="og:site_name" content="Casa Sucre Ayacucho" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="geo.region" content="PE-AYA" />
      <meta name="geo.placename" content="Ayacucho" />
      <meta name="geo.position" content="-13.1631;-74.2236" />
      <meta name="ICBM" content="-13.1631, -74.2236" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}