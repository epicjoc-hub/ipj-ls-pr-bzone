'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--background)] border-b border-[var(--border)] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)] leading-tight tracking-tight">
              Inspectoratul de Poliție
              <br />
              <span className="text-[var(--primary)]">Județean Los Santos</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-[var(--text-secondary)] max-w-2xl">
              Servim și protejăm comunitatea noastră cu dedicare și profesionalism
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cerere-eveniment"
                className="bg-[var(--primary)] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors inline-block text-center"
              >
                Cerere Eveniment
              </Link>
              <Link
                href="/anunturi-politie"
                className="bg-transparent border border-[var(--border)] text-[var(--text-primary)] px-6 py-2.5 rounded text-sm font-semibold hover:bg-[var(--hover-bg)] transition-colors inline-block text-center"
              >
                Vezi Anunțurile
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[var(--background-secondary)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { value: '24/7', label: 'Disponibilitate' },
              { value: '112', label: 'Număr Urgențe' },
              { value: '100%', label: 'Dedicare' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-4 bg-[var(--card-bg)] rounded border border-[var(--border)]"
              >
                <div className="text-3xl font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[var(--background)] py-12 border-b border-[var(--border)]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-2xl font-bold mb-8 text-center text-[var(--text-primary)]"
          >
            Linkuri Rapide
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { href: '/conducere', icon: '👔', label: 'Conducere' },
              { href: '/anunturi-evenimente', icon: '📅', label: 'Anunțuri Evenimente' },
              { href: '/anunturi-politie', icon: '📢', label: 'Anunțuri Poliție' },
              { href: '/ghiduri', icon: '📚', label: 'Ghid-uri' },
            ].map((link, index) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className="bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] p-4 rounded transition-all duration-200 text-center block"
                >
                  <div className="text-3xl mb-2">{link.icon}</div>
                  <div className="font-semibold text-sm text-[var(--text-primary)]">{link.label}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-[var(--background-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">
              Despre Inspectoratul de Poliție Județean Los Santos
            </h2>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
              Inspectoratul de Poliție Județean Los Santos este dedicat serviciului public și protecției comunității noastre. 
              Oferim servicii de calitate și menținem un standard înalt de profesionalism în toate activitățile noastre.
            </p>
            <Link
              href="/cerere-eveniment"
              className="inline-block bg-[var(--primary)] text-white px-6 py-2.5 rounded text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors"
            >
              Depune o Cerere
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
