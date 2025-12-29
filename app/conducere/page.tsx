'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import conducereData from '@/data/conducere.json';

export default function ConducerePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="py-12 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Conducere</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Cunoașteți echipa de conducere a Inspectoratului de Poliție Județean Los Santos
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {conducereData.map((membru) => (
            <motion.div
              key={membru.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[var(--card-bg)] rounded-xl shadow-lg overflow-hidden border border-[var(--border)]"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={membru.imagine}
                  alt={membru.nume}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-3 py-1 rounded text-xs font-semibold">
                    {membru.grad}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  {membru.nume}
                </h3>
                <p className="text-[var(--primary)] font-semibold mb-3">{membru.functie}</p>
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
                  {membru.descriere}
                </p>
                <a
                  href={`mailto:${membru.email}`}
                  className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors text-sm font-semibold"
                >
                  Contactează →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {conducereData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">
              Nu există informații despre conducere momentan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

