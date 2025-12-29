'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(items.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === 'all'
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded text-sm font-semibold transition-colors ${
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative h-56 bg-[var(--background-secondary)] rounded overflow-hidden cursor-pointer group border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-200"
            onClick={() => setSelectedImage(item.image)}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-200 flex items-end">
              <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-full">
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-white bg-black/70 hover:bg-black/90 rounded p-2 z-10 transition-colors"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
