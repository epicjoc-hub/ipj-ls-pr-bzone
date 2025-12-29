'use client';

import { motion } from 'framer-motion';
import anunturiData from '@/data/anunturi-evenimente.json';

export default function AnunturiEvenimentePage() {
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
            Anunțuri Evenimente
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Rămâneți la curent cu evenimentele aprobate din comunitate
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {anunturiData.map((anunt) => (
            <motion.div
              key={anunt.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 border border-[var(--border)]"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {anunt.titlu}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                    <span>📅 {new Date(anunt.data).toLocaleDateString('ro-RO')}</span>
                    <span>🕐 {anunt.ora}</span>
                    <span>📍 {anunt.locatie}</span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    anunt.status === 'aprobat'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}
                >
                  {anunt.status === 'aprobat' ? 'Aprobat' : 'În așteptare'}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">{anunt.descriere}</p>
            </motion.div>
          ))}
        </motion.div>

        {anunturiData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">
              Nu există anunțuri de evenimente momentan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

