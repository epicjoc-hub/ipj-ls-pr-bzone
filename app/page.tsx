import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import newsData from '@/data/news.json';

export default function Home() {
  const recentNews = newsData.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Inspectoratul de Poliție Județean Los Santos
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Servim și protejăm comunitatea noastră cu dedicare și profesionalism
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
              >
                Contactează-ne
              </Link>
              <Link
                href="/stiri"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
              >
                Vezi Știrile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Disponibilitate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">112</div>
              <div className="text-gray-600">Număr Urgențe</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Dedicare</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Știri Recente</h2>
            <Link
              href="/stiri"
              className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors"
            >
              Vezi toate știrile →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Linkuri Rapide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/stiri"
              className="bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors text-center"
            >
              <div className="text-3xl mb-3">📰</div>
              <div className="font-semibold">Știri și Anunțuri</div>
            </Link>
            <Link
              href="/echipa"
              className="bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors text-center"
            >
              <div className="text-3xl mb-3">👥</div>
              <div className="font-semibold">Echipă</div>
            </Link>
            <Link
              href="/galerie"
              className="bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors text-center"
            >
              <div className="text-3xl mb-3">📸</div>
              <div className="font-semibold">Galerie</div>
            </Link>
            <Link
              href="/faq"
              className="bg-white/10 hover:bg-white/20 p-6 rounded-lg transition-colors text-center"
            >
              <div className="text-3xl mb-3">❓</div>
              <div className="font-semibold">Întrebări Frecvente</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
