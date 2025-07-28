import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import ShopPage from './pages/ShopPage';
import ContactPage from './pages/ContactPage';
import './index.css'; // Import Tailwind CSS

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} /> {/* ✅ NEW ROUTE */}
        <Route path="/contact" element={<ContactPage />} /> {/* ✅ NEW ROUTE */}
        {/* Add other routes as needed */}
        <Route path="*" element={<div className="text-center py-16">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  </StrictMode>
);