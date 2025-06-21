import React from 'react';
import { Target, Users, BarChart3, Leaf, Shield, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Hedefli Reklam',
      description: 'Demografik ve coğrafi hedefleme ile doğru kişilere ulaşın',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Users,
      title: 'Geniş Erişim',
      description: 'Günlük binlerce kişiye markanızı tanıtma fırsatı',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: BarChart3,
      title: 'Detaylı Analiz',
      description: 'Kampanya performansını gerçek zamanlı takip edin',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Leaf,
      title: 'Çevre Dostu',
      description: 'Geri dönüştürülebilir malzemeler ile sürdürülebilir pazarlama',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Güvenli Ödeme',
      description: 'SSL korumalı güvenli ödeme sistemi',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Hızlı Kurulum',
      description: '24 saat içinde kampanyanız yayında',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">AquaAds</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geleneksel reklam yöntemlerini aşan, yenilikçi ve etkili pazarlama çözümü
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Sosyal Sorumluluk + Etkili Pazarlama
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Markanızı tanıtırken aynı zamanda topluma fayda sağlayın. 
                Ücretsiz su dağıtımı ile sosyal sorumluluğunuzu gösterin.
              </p>
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Daha Fazla Bilgi
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-sm text-blue-100">Günlük Görüntüleme</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-blue-100">Hatırlama Oranı</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-100">Aktif Reklam</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-100">Geri Dönüşüm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;