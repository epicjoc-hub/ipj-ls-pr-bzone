import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const formattedDate = new Date(news.date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/stiri/${news.slug}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-900 text-white px-3 py-1 rounded text-sm font-semibold">
              {news.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="text-sm text-gray-500 mb-2">
            {formattedDate} • {news.author}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {news.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {news.excerpt}
          </p>
          <div className="text-blue-900 font-semibold hover:text-yellow-600 transition-colors">
            Citește mai mult →
          </div>
        </div>
      </article>
    </Link>
  );
}

