'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ghiduri = [
  {
    id: '1',
    titlu: 'Ghid Port-Armă',
    descriere: 'Ghid complet pentru obținerea permisului de port-armă',
    link: 'https://docs.google.com/document/d/1I1awgGJB7KrKekI34_7_dgDcEnnFt3wpv7OBvsMcuxU/edit?usp=sharing',
  },
  {
    id: '2',
    titlu: 'Ghid Licență Tractări',
    descriere: 'Ghid complet pentru obținerea licenței de tractări',
    link: 'https://docs.google.com/document/d/1HWfuM39pjLjjvJiC_LcsukLtKF_NTCZ52wSp6TQKdD4/edit?usp=sharing',
  },
];

export default function GhiduriPage() {
  const [formularDeschis, setFormularDeschis] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    telefon: '',
    tipTest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleOpenForm = (ghidId: string, tipTest: string) => {
    setFormularDeschis(ghidId);
    setFormData({ ...formData, tipTest });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/programari-teste', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          status: 'pending',
          dataCreare: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ nume: '', prenume: '', email: '', telefon: '', tipTest: '' });
        setTimeout(() => {
          setFormularDeschis(null);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 min-h-screen bg-[var(--background)]">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">Ghid-uri</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Ghiduri utile și programare pentru teste
          </p>
        </motion.div>

        <div className="space-y-8">
          {ghiduri.map((ghid, index) => (
            <motion.div
              key={ghid.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--card-bg)] rounded-xl shadow-lg p-8 border border-[var(--border)]"
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                {ghid.titlu}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">{ghid.descriere}</p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={ghid.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-hover)] transition-colors inline-block"
                >
                  Vezi Ghid →
                </motion.a>
                <motion.button
                  onClick={() =>
                    handleOpenForm(
                      ghid.id,
                      ghid.id === '1' ? 'Port-Armă' : 'Licență Tractări'
                    )
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--accent)] text-[var(--primary)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--accent-hover)] transition-colors"
                >
                  Programează-ți testarea
                </motion.button>
              </div>

              {/* Formular Programare */}
              {formularDeschis === ghid.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-[var(--border)]"
                >
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                    Formular Programare Testare
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                          Nume *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nume}
                          onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                          Prenume *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.prenume}
                          onChange={(e) => setFormData({ ...formData, prenume: e.target.value })}
                          className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        className="w-full px-4 py-2 border border-[var(--border)] rounded-lg bg-[var(--background)] text-[var(--text-primary)]"
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="bg-green-100 dark:bg-green-900 border border-green-400 text-green-700 dark:text-green-200 px-4 py-3 rounded-lg">
                        Cererea a fost trimisă! Veți fi contactat pentru programare.
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-100 dark:bg-red-900 border border-red-400 text-red-700 dark:text-red-200 px-4 py-3 rounded-lg">
                        Eroare la trimitere. Încercați din nou.
                      </div>
                    )}

                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--primary-hover)] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setFormularDeschis(null);
                          setSubmitStatus('idle');
                        }}
                        className="bg-[var(--card-bg)] text-[var(--text-primary)] px-6 py-2 rounded-lg font-semibold border border-[var(--border)] hover:bg-[var(--hover-bg)]"
                      >
                        Anulează
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

