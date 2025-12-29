import FAQAccordion from '@/components/FAQAccordion';
import faqData from '@/data/faq.json';

export const metadata = {
  title: 'Întrebări Frecvente - IPJ Los Santos',
  description: 'Răspunsuri la întrebările frecvente despre Inspectoratul de Poliție Județean Los Santos',
};

export default function FAQPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Întrebări Frecvente</h1>
          <p className="text-lg text-gray-600">
            Găsiți răspunsuri la cele mai frecvente întrebări despre serviciile și activitățile noastre.
          </p>
        </div>

        <FAQAccordion faqs={faqData} />

        {faqData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nu există întrebări disponibile momentan.</p>
          </div>
        )}

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Nu găsiți răspunsul căutat?
          </h2>
          <p className="text-gray-600 mb-6">
            Contactați-ne direct și vă vom răspunde la toate întrebările dvs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </div>
  );
}

