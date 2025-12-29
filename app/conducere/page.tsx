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
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="py-12 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="glass-card p-8 text-center">
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Conducere</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Cunoașteți echipa de conducere a Inspectoratului de Poliție Județean Los Santos
            </p>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">{conducereData.length}</div>
            <div className="text-sm text-[var(--text-secondary)]">Membri Conducere</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">24/7</div>
            <div className="text-sm text-[var(--text-secondary)]">Disponibilitate</div>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">100%</div>
            <div className="text-sm text-[var(--text-secondary)]">Dedicare</div>
          </div>
        </motion.div>

        {/* Main Content - Grid Dashboard */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {conducereData.map((membru) => (
            <motion.div
              key={membru.id}
              variants={itemVariants}
              className="glass-card overflow-hidden glass-hover"
            >
              <div className="relative h-64 bg-[var(--background-secondary)]">
                <Image
                  src={membru.imagine}
                  alt={membru.nume}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="bg-[var(--primary)]/20 text-[var(--primary)] px-3 py-1 rounded-full text-xs font-semibold">
                    {membru.grad}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  {membru.nume}
                </h3>
                <p className="text-[var(--primary)] text-sm font-semibold mb-3">{membru.functie}</p>
                <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-3">
                  {membru.descriere}
                </p>
                <a
                  href={`mailto:${membru.email}`}
                  className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors text-sm font-semibold inline-flex items-center gap-1"
                >
                  Contactează →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {conducereData.length === 0 && (
          <div className="glass-card p-12 text-center">
            <p className="text-[var(--text-secondary)] text-lg">
              Nu există informații despre conducere momentan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
