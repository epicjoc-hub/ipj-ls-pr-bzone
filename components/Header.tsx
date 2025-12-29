'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Acasă' },
    { href: '/conducere', label: 'Conducere' },
    { href: '/anunturi-evenimente', label: 'Anunțuri Evenimente' },
    { href: '/anunturi-politie', label: 'Anunțuri Poliție' },
    { href: '/cerere-eveniment', label: 'Cerere Eveniment' },
    { href: '/ghiduri', label: 'Ghid-uri' },
  ];

  return (
    <header className="bg-[var(--background)] border-b border-[var(--border)] sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="font-bold text-xl text-[var(--text-primary)] tracking-tight">
              IPJ
            </div>
            <div className="hidden sm:block">
              <div className="font-semibold text-sm text-[var(--text-primary)]">Inspectoratul de Poliție</div>
              <div className="text-xs text-[var(--text-secondary)]">Județean Los Santos</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-[var(--border)]">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 text-[var(--text-primary)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden pb-3 space-y-1 overflow-hidden border-t border-[var(--border)] mt-2 pt-3"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-3 text-sm text-[var(--text-primary)] hover:text-[var(--primary)] hover:bg-[var(--hover-bg)] rounded transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
