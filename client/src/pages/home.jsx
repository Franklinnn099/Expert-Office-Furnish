import React from 'react';
import { CheckCircle2, Search, ShoppingCart, User } from 'lucide-react';
import heroImage from '../assets/Greencouch.png';
import logo from '../assets/Logo.png';
import Footer from '../components/footer';



export default function Homepage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero with Header Combined */}
      <section className="relative h-screen bg-green-100 text-white" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10 h-full flex flex-col">
          <header className="p-6 bg-transparent z-50">
            <div className="container mx-auto flex justify-between items-center">
              <img src={logo} alt="Expert Office Logo" className="h-20" />
              <nav className="space-x-4 text-white hidden sm:block">
                <button onClick={() => scrollToSection('home')} className="hover:underline">Home</button>
                <button onClick={() => scrollToSection('products')} className="hover:underline">Products</button>
                <button onClick={() => scrollToSection('testimonials')} className="hover:underline">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button>
              </nav>
              <div className="flex items-center gap-4 text-white">
                <Search className="cursor-pointer" />
                <User className="cursor-pointer" />
                <ShoppingCart className="cursor-pointer" />
                <button onClick={() => scrollToSection('contact')} className="bg-white text-green-800 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-200">Contact</button>
              </div>
            </div>
          </header>
          <div id="home" className="flex-grow flex flex-col justify-center items-start text-left px-4 sm:px-16 py-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Elevate Your Workspace</h1>
            <p className="text-lg max-w-2xl mb-6">Discover premium office furniture designed with purpose. Solutions tailored for your health and productivity.</p>
            <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">Shop Now
            </button>
          </div>

        </div>
      </section>

      {/* Commitments */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-10">Our Commitment to Your Well-being</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
          <div className="bg-green-50 p-6 rounded-2xl shadow">
            <CheckCircle2 className="text-green-700 mb-3 w-6 h-6 mx-auto" />
            <h3 className="font-semibold mb-2">Eco-Friendly Materials</h3>
            <p>We prioritize sustainable, responsibly sourced materials.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow">
            <CheckCircle2 className="text-green-700 mb-3 w-6 h-6 mx-auto" />
            <h3 className="font-semibold mb-2">Ergonomic Comfort</h3>
            <p>Furniture designed to support posture and reduce strain.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl shadow">
            <CheckCircle2 className="text-green-700 mb-3 w-6 h-6 mx-auto" />
            <h3 className="font-semibold mb-2">Free Trials & Policies</h3>
            <p>Enjoy trial periods, warranties, and easy returns.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-green-50">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-4">
            <img src="/images/chair.png" alt="Chair" className="w-full h-40 object-cover rounded-xl mb-2" />
            <h4 className="font-medium">Ergonomic Office Chair</h4>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <img src="/images/desk.png" alt="Desk" className="w-full h-40 object-cover rounded-xl mb-2" />
            <h4 className="font-medium">Standing Desk Converter</h4>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <img src="/images/arm.png" alt="Monitor Arm" className="w-full h-40 object-cover rounded-xl mb-2" />
            <h4 className="font-medium">Adjustable Monitor Arm</h4>
          </div>
          <div className="bg-white rounded-2xl shadow p-4">
            <img src="/images/lamp.png" alt="Lamp" className="w-full h-40 object-cover rounded-xl mb-2" />
            <h4 className="font-medium">Modern Desk Lamp</h4>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-10">What Our Customers Say</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <p className="italic mb-4">"The ergonomic chair changed my work-from-home life! No more back pain. Highly recommend Expert Office."</p>
            <div className="font-semibold">– Ama K., Accra</div>
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow">
            <p className="italic mb-4">"Beautiful, functional designs that actually help me stay focused and feel better throughout the day."</p>
            <div className="font-semibold">– Kojo M., Kumasi</div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="contact" className="bg-green-100 py-12">
        <div className="text-center max-w-xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-2 text-green-900">Stay Updated</h2>
          <p className="mb-4 text-green-800">Join our newsletter to receive updates and exclusive offers.</p>
          <form className="flex flex-col sm:flex-row gap-2 justify-center">
            <input type="email" placeholder="Enter your email" className="p-3 rounded-lg border border-green-700 focus:outline-none w-full sm:w-64" />
            <button type="submit" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported