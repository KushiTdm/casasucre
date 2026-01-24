import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SEO from './components/SEO';
import Home from './pages/Home';
import PropertyPage from './pages/PropertyPage';
import RoomDetail from './pages/RoomDetail';

function App() {
  return (
    <Router>
      <SEO />
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:propertyId" element={<PropertyPage />} />
          <Route path="/room/:roomId" element={<RoomDetail />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}