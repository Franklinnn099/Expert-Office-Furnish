import logo from '../assets/Logo.png';
import React from 'react';
import { CheckCircle2, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="p-6 bg-gray-800 z-50">
            <div className="container mx-auto flex justify-between items-center">
              <img src={logo} alt="Expert Office Logo" className="h-20" />
              <nav className="space-x-4 text-white hidden sm:block">
                <button onClick={() => scrollToSection('home')} className="hover:underline">Home</button>
               <Link to="/shop">
                <button onClick={() => scrollToSection('products')} className="hover:underline">Products</button>
                </Link>
                <button onClick={() => scrollToSection('testimonials')} className="hover:underline">Testimonials</button>
                <Link to="/contact">
                  <button onClick={() => scrollToSection('contact')} className="hover:underline">Our Services</button>
                </Link>
              </nav>
              <div className="flex items-center gap-4 text-white">
                <Search className="cursor-pointer" />
                <User className="cursor-pointer" />
                <ShoppingCart className="cursor-pointer" />
                <button onClick={() => scrollToSection('contact')} className="bg-white text-green-800 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-green-200">Contact</button>
              </div>
            </div>
          </header>
  );
}
