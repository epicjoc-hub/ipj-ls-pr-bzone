'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Admin Panel</h1>
              <p className="text-blue-200 text-sm">Gestionare conținut site</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Deconectare
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Panou de Control</h2>
          <p className="text-gray-600">Selectați secțiunea pe care doriți să o editați</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/edit-news"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Știri</h3>
            <p className="text-gray-600">Editează știri și anunțuri</p>
          </Link>

          <Link
            href="/admin/edit-officers"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Echipă</h3>
            <p className="text-gray-600">Gestionează membrii echipei</p>
          </Link>

          <Link
            href="/admin/edit-gallery"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Galerie</h3>
            <p className="text-gray-600">Adaugă și editează imagini</p>
          </Link>

          <Link
            href="/admin/edit-faq"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">❓</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">FAQ</h3>
            <p className="text-gray-600">Gestionează întrebări frecvente</p>
          </Link>

          <Link
            href="/"
            target="_blank"
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Vizualizează Site</h3>
            <p className="text-gray-600">Deschide site-ul în tab nou</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

