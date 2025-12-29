import NewsCard from '@/components/NewsCard';
import newsData from '@/data/news.json';

export const metadata = {
  title: 'Știri și Anunțuri - IPJ Los Santos',
  description: 'Știri, anunțuri și comunicate de presă de la Inspectoratul de Poliție Județean Los Santos',
};

export default function StiriPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Știri și Anunțuri</h1>
          <p className="text-lg text-gray-600">
            Rămâneți la curent cu cele mai recente știri și anunțuri de la Inspectoratul de Poliție Județean Los Santos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        {newsData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nu există știri disponibile momentan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

