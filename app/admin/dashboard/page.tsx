'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [stats, setStats] = useState({
    cereriPending: 0,
    programariPending: 0,
    anunturi: 0,
  });

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    const userStr = sessionStorage.getItem('admin_user');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      if (userStr) {
        setAdminUser(JSON.parse(userStr));
      }
      loadStats();
    }
  }, [router]);

  const loadStats = async () => {
    try {
      const [cereriRes, programariRes] = await Promise.all([
        fetch('/api/cereri-evenimente'),
        fetch('/api/programari-teste'),
      ]);
      const cereri = await cereriRes.json();
      const programari = await programariRes.json();
      setStats({
        cereriPending: cereri.filter((c: any) => c.status === 'pending').length,
        programariPending: programari.filter((p: any) => p.status === 'pending').length,
        anunturi: 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    sessionStorage.removeItem('admin_user');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  const menuItems = [
    { href: '/admin/conducere', icon: '👔', label: 'Conducere', color: 'blue' },
    { href: '/admin/anunturi-evenimente', icon: '📅', label: 'Anunțuri Evenimente', color: 'green' },
    { href: '/admin/anunturi-politie', icon: '📢', label: 'Anunțuri Poliție', color: 'purple' },
    { href: '/admin/cereri-evenimente', icon: '📝', label: 'Cereri Evenimente', color: 'yellow', badge: stats.cereriPending },
    { href: '/admin/programari-teste', icon: '📚', label: 'Programări Teste', color: 'orange', badge: stats.programariPending },
    { href: '/admin/edit-news', icon: '📰', label: 'Știri', color: 'red' },
    { href: '/admin/edit-officers', icon: '👥', label: 'Echipă', color: 'indigo' },
    { href: '/admin/edit-gallery', icon: '📸', label: 'Galerie', color: 'pink' },
    { href: '/admin/edit-faq', icon: '❓', label: 'FAQ', color: 'teal' },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="bg-[var(--primary)] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <p className="opacity-90 text-sm">
                {adminUser && `${adminUser.grad} ${adminUser.nume}`}
              </p>
            </div>
            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--accent)] text-[var(--primary)] px-4 py-2 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Deconectare
            </motion.button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Panou de Control</h2>
          <p className="text-[var(--text-secondary)]">Selectați secțiunea pe care doriți să o gestionați</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 border border-[var(--border)]"
          >
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">
              {stats.cereriPending}
            </div>
            <div className="text-[var(--text-secondary)]">Cereri în așteptare</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 border border-[var(--border)]"
          >
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">
              {stats.programariPending}
            </div>
            <div className="text-[var(--text-secondary)]">Programări în așteptare</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 border border-[var(--border)]"
          >
            <div className="text-3xl font-bold text-[var(--primary)] mb-2">{stats.anunturi}</div>
            <div className="text-[var(--text-secondary)]">Anunțuri active</div>
          </motion.div>
        </div>

        {/* Menu Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={item.href}
                className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 hover:shadow-xl transition-all border border-[var(--border)] block relative"
              >
                {item.badge && item.badge > 0 && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.label}</h3>
                <p className="text-[var(--text-secondary)] text-sm">Gestionare {item.label.toLowerCase()}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold"
          >
            🌐 Vizualizează Site
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
