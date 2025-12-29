'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-6 space-y-3">
        <div>
          <input
            type="text"
            placeholder="Căutați întrebări..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border border-[var(--border)] rounded bg-[var(--background)] text-[var(--text-primary)] focus:border-[var(--primary)] focus:outline-none transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--hover-bg)]'
              }`}
            >
              {category === 'all' ? 'Toate' : category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-[var(--text-secondary)] py-6 text-sm">
            Nu s-au găsit întrebări care să corespundă criteriilor de căutare.
          </p>
        ) : (
          filteredFaqs.map((faq) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <div className="bg-[var(--card-bg)] rounded border border-[var(--border)] overflow-hidden">
                  <Disclosure.Button className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-[var(--hover-bg)] transition-colors duration-200">
                    <div className="flex-1">
                      <div className="text-xs text-[var(--primary)] font-semibold mb-1">
                        {faq.category}
                      </div>
                      <div className="text-base font-semibold text-[var(--text-primary)]">
                        {faq.question}
                      </div>
                    </div>
                    <ChevronDownIcon
                      className={`w-4 h-4 text-[var(--text-secondary)] transition-transform duration-200 ${
                        open ? 'transform rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 py-3 bg-[var(--background-secondary)] text-[var(--text-secondary)] text-sm">
                    {faq.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))
        )}
      </div>
    </div>
  );
}
