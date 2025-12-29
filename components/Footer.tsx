import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Despre Noi</h3>
            <p className="text-sm mb-4">
              Inspectoratul de Poliție Județean Los Santos este dedicat serviciului 
              public și protecției comunității noastre.
            </p>
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded font-bold">
                IPJ
              </div>
              <span className="text-sm">Los Santos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Linkuri Rapide</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/stiri" className="hover:text-yellow-400 transition-colors">
                  Știri și Anunțuri
                </Link>
              </li>
              <li>
                <Link href="/echipa" className="hover:text-yellow-400 transition-colors">
                  Echipă
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="hover:text-yellow-400 transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-yellow-400 transition-colors">
                  Întrebări Frecvente
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Urgențe:</strong> 112
              </li>
              <li>
                <strong>Telefon:</strong> +40 XXX XXX XXX
              </li>
              <li>
                <strong>Email:</strong> contact@ipj-los-santos.ro
              </li>
              <li>
                <strong>Adresă:</strong><br />
                Str. Principală, Nr. 1<br />
                Los Santos, Județul Los Santos
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Inspectoratul de Poliție Județean Los Santos. 
            Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}

