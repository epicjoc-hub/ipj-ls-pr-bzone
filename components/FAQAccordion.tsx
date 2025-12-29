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
      <div className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Căutați întrebări..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? 'Toate' : category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            Nu s-au găsit întrebări care să corespundă criteriilor de căutare.
          </p>
        ) : (
          filteredFaqs.map((faq) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Disclosure.Button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="text-xs text-blue-900 font-semibold mb-1">
                        {faq.category}
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </div>
                    </div>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        open ? 'transform rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 bg-gray-50 text-gray-700">
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

