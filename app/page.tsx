'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] via-[var(--primary-hover)] to-[var(--primary)] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Inspectoratul de Poliție
              <br />
              <span className="text-[var(--accent)]">Județean Los Santos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Servim și protejăm comunitatea noastră cu dedicare și profesionalism
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/cerere-eveniment"
                  className="bg-[var(--accent)] text-[var(--primary)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors text-center inline-block shadow-lg"
                >
                  Cerere Eveniment
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/anunturi-politie"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary)] transition-colors text-center inline-block"
                >
                  Vezi Anunțurile
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[var(--card-bg)] py-16 border-b border-[var(--border)]">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { value: '24/7', label: 'Disponibilitate' },
              { value: '112', label: 'Număr Urgențe' },
              { value: '100%', label: 'Dedicare' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-[var(--background)] rounded-xl shadow-md border border-[var(--border)]"
              >
                <div className="text-5xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[var(--primary)] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Linkuri Rapide
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { href: '/conducere', icon: '👔', label: 'Conducere' },
              { href: '/anunturi-evenimente', icon: '📅', label: 'Anunțuri Evenimente' },
              { href: '/anunturi-politie', icon: '📢', label: 'Anunțuri Poliție' },
              { href: '/ghiduri', icon: '📚', label: 'Ghid-uri' },
            ].map((link, index) => (
              <motion.div key={link.href} variants={itemVariants} whileHover={{ y: -5 }}>
                <Link
                  href={link.href}
                  className="bg-white/10 hover:bg-white/20 p-6 rounded-xl transition-all duration-300 text-center block backdrop-blur-sm border border-white/20"
                >
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <div className="font-semibold text-lg">{link.label}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-[var(--background)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
              Despre Inspectoratul de Poliție Județean Los Santos
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Inspectoratul de Poliție Județean Los Santos este dedicat serviciului public și protecției comunității noastre. 
              Oferim servicii de calitate și menținem un standard înalt de profesionalism în toate activitățile noastre.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/cerere-eveniment"
                className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors shadow-lg"
              >
                Depune o Cerere
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
