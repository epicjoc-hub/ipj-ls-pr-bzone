import FAQAccordion from '@/components/FAQAccordion';
import faqData from '@/data/faq.json';

export const metadata = {
  title: 'Întrebări Frecvente - IPJ Los Santos',
  description: 'Răspunsuri la întrebările frecvente despre Inspectoratul de Poliție Județean Los Santos',
};

export default function FAQPage() {
  return (
    <div className="py-12 bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-3">Întrebări Frecvente</h1>
          <p className="text-base text-[var(--text-secondary)]">
            Găsiți răspunsuri la cele mai frecvente întrebări despre serviciile și activitățile noastre.
          </p>
        </div>

        <FAQAccordion faqs={faqData} />

        {faqData.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[var(--text-secondary)]">Nu există întrebări disponibile momentan.</p>
          </div>
        )}

        <div className="mt-8 bg-[var(--card-bg)] border border-[var(--border)] rounded p-6 text-center">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3">
            Nu găsiți răspunsul căutat?
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-4">
            Contactați-ne direct și vă vom răspunde la toate întrebările dvs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[var(--primary)] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors duration-200"
          >
            Contactează-ne
          </a>
        </div>
      </div>
    </div>
  );
}
