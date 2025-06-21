import React, { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              AquaAds
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
              Özellikler
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">
              Nasıl Çalışır
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
              Fiyatlandırma
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              İletişim
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary-600 transition-colors">
              Giriş Yap
            </button>
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all transform hover:scale-105">
              Ücretsiz Dene
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
                Özellikler
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">
                Nasıl Çalışır
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">
                Fiyatlandırma
              </a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                İletişim
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-gray-600 hover:text-primary-600 transition-colors text-left">
                  Giriş Yap
                </button>
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all w-full">
                  Ücretsiz Dene
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;