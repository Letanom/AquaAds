import React, { useState } from 'react';
import { ArrowRight, Upload, Eye, Zap, Palette, Rotate3D } from 'lucide-react';
import BottleMockup from './BottleMockup';

const Hero = () => {
  const [adText, setAdText] = useState('MARKANIZ');
  const [logoText, setLogoText] = useState('LOGO');

  return (
    <section className="pt-20 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply opacity-20 animate-bounce-gentle"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply opacity-20 animate-bounce-gentle delay-700"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>Yenilikçi Reklam Çözümü</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Su Şişeleri İle{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Etkili Reklam
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                Markanızı su şişeleri üzerinde tanıtın, hedef kitlenize ücretsiz su dağıtarak 
                hem sosyal sorumluluk hem de etkili pazarlama yapın.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-primary-600 hover:to-secondary-600 transition-all transform hover:scale-105 shadow-lg">
                <span>Hemen Başla</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all transform hover:scale-105">
                Demo İzle
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Dağıtılan Şişe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600">Mutlu Marka</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Interactive Bottle Mockup */}
          <div className="relative animate-scale-in">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-primary-100 hover:shadow-3xl transition-all duration-500">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-extrabold text-primary-700 mb-2 flex items-center justify-center space-x-2 drop-shadow-sm">
                  <Rotate3D className="w-7 h-7 text-primary-600" />
                  <span>3D Reklam Önizleme</span>
                </h3>
                <p className="text-lg text-gray-500 font-medium max-w-xs mx-auto">
                  Markanızın 3D su şişesi üzerinde nasıl görüneceğini test edin
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Marka Adı
                  </label>
                  <input
                    type="text"
                    value={adText}
                    onChange={(e) => setAdText(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all bg-white/90 text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400 shadow-sm hover:border-primary-300"
                    placeholder="Markanızın adını girin"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-primary-700 mb-2">
                    Logo Metni
                  </label>
                  <input
                    type="text"
                    value={logoText}
                    onChange={(e) => setLogoText(e.target.value)}
                    className="w-full px-5 py-3 border-2 border-primary-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all bg-white/90 text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400 shadow-sm hover:border-primary-300"
                    placeholder="Logo metni girin"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-4 shadow-inner mb-8 border border-primary-100">
                <BottleMockup adText={adText} logoText={logoText} />
              </div>

              <div className="mt-4 flex justify-center space-x-4">
                <button className="flex items-center space-x-2 text-primary-700 hover:text-white hover:bg-primary-500 px-4 py-2 rounded-full font-semibold border border-primary-200 bg-white/80 shadow transition-all duration-200">
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">Logo Yükle</span>
                </button>
                <button className="flex items-center space-x-2 text-secondary-700 hover:text-white hover:bg-secondary-500 px-4 py-2 rounded-full font-semibold border border-secondary-200 bg-white/80 shadow transition-all duration-200">
                  <Palette className="w-4 h-4" />
                  <span className="text-sm">Renk Seç</span>
                </button>
                <button className="flex items-center space-x-2 text-accent-700 hover:text-white hover:bg-accent-500 px-4 py-2 rounded-full font-semibold border border-accent-200 bg-white/80 shadow transition-all duration-200">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">AR Görünüm</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;