import React from 'react';
import { ArrowRight, Upload, Settings, Truck, BarChart3 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: 'Tasarım Yükle',
      description: 'Markanızın logosunu ve reklam metnini yükleyin',
      details: 'Logo, slogan ve renk seçiminizi yapın'
    },
    {
      icon: Settings,
      title: 'Hedef Seç',
      description: 'Hedef kitlenizi ve dağıtım alanlarını belirleyin',
      details: 'Yaş, cinsiyet, lokasyon hedeflemesi'
    },
    {
      icon: Truck,
      title: 'Dağıtım Başla',
      description: 'Su şişeleri hedef bölgelerde ücretsiz dağıtılır',
      details: 'Profesyonel ekibimiz dağıtımı gerçekleştirir'
    },
    {
      icon: BarChart3,
      title: 'Sonuçları İzle',
      description: 'Kampanyanızın performansını gerçek zamanlı takip edin',
      details: 'Detaylı raporlar ve analitik veriler'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasıl <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Çalışır</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            4 basit adımda kampanyanızı başlatın ve etkili sonuçlar alın ve %100 etkileşimli müşteri potansiyeli oluşturun.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-primary-600 font-medium">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                      <ArrowRight className="w-4 h-4 text-primary-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Hemen Başlamaya Hazır mısınız?
            </h3>
            <p className="text-xl text-blue-100 mb-6">
              Kampanyanızı 5 dakikada kurun ve 24 saat içinde yayına alın
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
              Ücretsiz Hesap Aç
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;