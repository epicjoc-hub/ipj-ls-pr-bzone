'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import anunturiData from '@/data/anunturi-politie.json';

const categorii = ['Toate', 'Comunicate', 'Urgente', 'Raport Săptămânal'];

export default function AnunturiPolitiePage() {
  const [categorieSelectata, setCategorieSelectata] = useState('Toate');

  const anunturiFiltrate =
    categorieSelectata === 'Toate'
      ? anunturiData
      : anunturiData.filter((anunt) => anunt.categorie === categorieSelectata);

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
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
            Anunțuri Poliție
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comunicate, anunțuri urgente și rapoarte săptămânale
          </p>
        </motion.div>

        {/* Filtru Categorii */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {categorii.map((categorie) => (
            <button
              key={categorie}
              onClick={() => setCategorieSelectata(categorie)}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                categorieSelectata === categorie
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-[var(--card-bg)] text-[var(--text-primary)] border border-[var(--border)] hover:bg-[var(--hover-bg)]'
              }`}
            >
              {categorie}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {anunturiFiltrate.map((anunt) => (
            <motion.div
              key={anunt.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className={`bg-[var(--card-bg)] rounded-xl shadow-md p-6 border-l-4 ${
                anunt.categorie === 'Urgente'
                  ? 'border-red-500'
                  : anunt.categorie === 'Comunicate'
                    ? 'border-blue-500'
                    : 'border-green-500'
              } border-[var(--border)]`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block ${
                      anunt.categorie === 'Urgente'
                        ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        : anunt.categorie === 'Comunicate'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    }`}
                  >
                    {anunt.categorie}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {anunt.titlu}
                  </h3>
                  <span className="text-sm text-[var(--text-secondary)]">
                    📅 {new Date(anunt.data).toLocaleDateString('ro-RO')}
                  </span>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">
                {anunt.conținut}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {anunturiFiltrate.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">
              Nu există anunțuri în această categorie momentan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

