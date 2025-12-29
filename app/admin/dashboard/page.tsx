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
      <header className="bg-[var(--background)] border-b border-[var(--border)]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-[var(--text-primary)]">Admin Panel</h1>
              <p className="text-xs text-[var(--text-secondary)]">
                {adminUser && `${adminUser.grad} ${adminUser.nume}`}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-[var(--primary)] text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-[var(--primary-hover)] transition-colors duration-200"
            >
              Deconectare
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Panou de Control</h2>
          <p className="text-sm text-[var(--text-secondary)]">Selectați secțiunea pe care doriți să o gestionați</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-[var(--card-bg)] rounded border border-[var(--border)] p-4">
            <div className="text-2xl font-bold text-[var(--primary)] mb-1">
              {stats.cereriPending}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Cereri în așteptare</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded border border-[var(--border)] p-4">
            <div className="text-2xl font-bold text-[var(--primary)] mb-1">
              {stats.programariPending}
            </div>
            <div className="text-xs text-[var(--text-secondary)]">Programări în așteptare</div>
          </div>
          <div className="bg-[var(--card-bg)] rounded border border-[var(--border)] p-4">
            <div className="text-2xl font-bold text-[var(--primary)] mb-1">{stats.anunturi}</div>
            <div className="text-xs text-[var(--text-secondary)]">Anunțuri active</div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[var(--card-bg)] rounded border border-[var(--border)] p-4 hover:border-[var(--primary)] transition-all duration-200 block relative"
            >
              {item.badge && item.badge > 0 && (
                <span className="absolute top-2 right-2 bg-[var(--accent-warning)] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{item.label}</h3>
              <p className="text-xs text-[var(--text-secondary)]">Gestionare {item.label.toLowerCase()}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm text-[var(--primary)] hover:text-[var(--primary-hover)] font-semibold transition-colors duration-200"
          >
            🌐 Vizualizează Site
          </Link>
        </div>
      </div>
    </div>
  );
}
