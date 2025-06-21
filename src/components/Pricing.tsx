import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Başlangıç',
      price: '7,000',
      period: 'ay',
      description: 'Küçük işletmeler için ideal',
      features: [
        '1,000 adet su şişesi',
        'Tek renk baskı',
        'Temel hedefleme',
        'Aylık rapor',
        'Email destek'
      ],
      buttonText: 'Başla',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      popular: false
    },
    {
      name: 'Profesyonel',
      price: '9,000',
      period: 'ay',
      description: 'Büyüyen markalar için',
      features: [
        '3,000 adet su şişesi',
        'Renkli baskı',
        'Gelişmiş hedefleme',
        'Haftalık rapor',
        'Telefon + Email destek',
        'Özel tasarım desteği'
      ],
      buttonText: 'En Popüler',
      buttonStyle: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600',
      popular: true
    },
    {
      name: 'Kurumsal',
      price: 'Özel',
      period: 'Fiyat',
      description: 'Büyük şirketler için',
      features: [
        '10,000+ adet su şişesi',
        'Premium baskı kalitesi',
        'Tam özelleştirme',
        'Günlük rapor',
        '7/24 destek',
        'Kişisel hesap yöneticisi',
        'Özel etkinlik desteği'
      ],
      buttonText: 'İletişime Geç',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Şeffaf <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Fiyatlandırma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            İhtiyaçlarınıza uygun paketi seçin, istediğiniz zaman değiştirin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-secondary-50 shadow-xl scale-105'
                  : 'border-gray-200 bg-white hover:shadow-lg'
              } transition-all duration-300 hover:-translate-y-1`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>En Popüler</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === 'Özel' ? 'Özel' : `₺${plan.price}`}
                  </span>
                  {plan.price !== 'Özel' && (
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-all transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Özel İhtiyaçlarınız mı Var?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Büyük çaplı kampanyalar, özel etkinlikler veya farklı ihtiyaçlarınız için 
              bizimle iletişime geçin. Size özel çözümler sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Özel Teklif Al</span>
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all">
                Demo Talep Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;