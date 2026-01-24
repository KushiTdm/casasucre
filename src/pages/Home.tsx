import Hero from '../components/Hero';
import PropertySelector from '../components/PropertySelector';
import Amenities from '../components/Amenities';
import HistoricalContext from '../components/HistoricalContext';
import Testimonials from '../components/Testimonials';
import LocalGuide from '../components/LocalGuide';

export default function Home() {
  return (
    <div>
      <Hero />
      <PropertySelector />
      <Amenities />
      <HistoricalContext />
      <Testimonials />
      <LocalGuide />
    </div>
  );
}
