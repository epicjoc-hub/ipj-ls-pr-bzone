'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-bold text-xl">
              IPJ
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg">Inspectoratul de Poliție</div>
              <div className="text-sm text-blue-200">Județean Los Santos</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-yellow-400 transition-colors">
              Acasă
            </Link>
            <Link href="/stiri" className="hover:text-yellow-400 transition-colors">
              Știri
            </Link>
            <Link href="/echipa" className="hover:text-yellow-400 transition-colors">
              Echipă
            </Link>
            <Link href="/galerie" className="hover:text-yellow-400 transition-colors">
              Galerie
            </Link>
            <Link href="/faq" className="hover:text-yellow-400 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded hover:bg-yellow-300 transition-colors font-semibold">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Acasă
            </Link>
            <Link
              href="/stiri"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Știri
            </Link>
            <Link
              href="/echipa"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Echipă
            </Link>
            <Link
              href="/galerie"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galerie
            </Link>
            <Link
              href="/faq"
              className="block py-2 hover:text-yellow-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block py-2 bg-yellow-400 text-blue-900 rounded px-4 font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

