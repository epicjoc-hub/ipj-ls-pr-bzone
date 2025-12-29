'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AdminConducere() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [conducere, setConducere] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated');
    if (auth !== 'true') {
      router.push('/admin');
    } else {
      setIsAuthenticated(true);
      loadConducere();
    }
  }, [router]);

  const loadConducere = async () => {
    try {
      const response = await fetch('/data/conducere.json');
      const data = await response.json();
      setConducere(data);
    } catch (error) {
      console.error('Error loading conducere:', error);
    }
  };

  const handleSave = () => {
    // În producție, aici ai face API call pentru salvare
    if (editingId) {
      const updated = conducere.map((m) =>
        m.id === editingId ? { ...m, ...formData } : m
      );
      setConducere(updated);
      setEditingId(null);
      setFormData({});
      alert('Modificările au fost salvate! (Notă: În producție, datele vor fi salvate permanent)');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <header className="bg-[var(--primary)] text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Gestionare Conducere</h1>
            </div>
            <Link
              href="/admin/dashboard"
              className="bg-[var(--accent)] text-[var(--primary)] px-4 py-2 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              ← Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {editingId ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 mb-6 border border-[var(--border)]"
          >
            <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Editează Membru</h2>
            <div className="space-y-4">
              {['nume', 'grad', 'functie', 'email', 'descriere'].map((field) => (
                <div key={field}>
                  <label className="block font-semibold mb-2 text-[var(--text-primary)] capitalize">
                    {field}
                  </label>
                  {field === 'descriere' ? (
                    <textarea
                      value={formData[field] || ''}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                      rows={5}
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field] || ''}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                    />
                  )}
                </div>
              ))}
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary-hover)]"
                >
                  Salvează
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setFormData({});
                  }}
                  className="bg-[var(--card-bg)] text-[var(--text-primary)] px-6 py-2 rounded-lg font-semibold border border-[var(--border)] hover:bg-[var(--hover-bg)]"
                >
                  Anulează
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="mb-6">
            <button
              onClick={() => {
                const newId = Date.now().toString();
                setEditingId(newId);
                setFormData({
                  id: newId,
                  nume: '',
                  grad: '',
                  functie: '',
                  descriere: '',
                  email: '',
                  imagine: '/images/officers/default.jpg',
                });
              }}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              + Adaugă Membru Nou
            </button>
          </div>
        )}

        <div className="space-y-4">
          {conducere.map((membru) => (
            <motion.div
              key={membru.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--card-bg)] rounded-xl shadow-md p-6 border border-[var(--border)]"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{membru.nume}</h3>
                  <p className="text-[var(--primary)] font-semibold">{membru.functie}</p>
                  <p className="text-[var(--text-secondary)] mt-2">{membru.descriere}</p>
                </div>
                <button
                  onClick={() => {
                    setEditingId(membru.id);
                    setFormData(membru);
                  }}
                  className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--primary-hover)]"
                >
                  Editează
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

