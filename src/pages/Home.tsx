import Hero from '../components/Hero';
import PropertySelector from '../components/PropertySelector';
import Amenities from '../components/Amenities';
import HistoricalContext from '../components/HistoricalContext';
import ExtraServicesSection from '../components/ExtraServicesSection';
import LocalGuide from '../components/LocalGuide';

export default function Home() {
  return (
    <div>
      <Hero />
      <PropertySelector />
      <Amenities />
      <HistoricalContext />
      <ExtraServicesSection />
      <LocalGuide />
    </div>
  );
}
