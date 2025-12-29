import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/conducere', label: 'Conducere' },
    { href: '/anunturi-evenimente', label: 'Anunțuri Evenimente' },
    { href: '/anunturi-politie', label: 'Anunțuri Poliție' },
    { href: '/cerere-eveniment', label: 'Cerere Eveniment' },
    { href: '/ghiduri', label: 'Ghid-uri' },
    { href: '/stiri', label: 'Știri' },
    { href: '/echipa', label: 'Echipă' },
    { href: '/galerie', label: 'Galerie' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="glass-footer mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coloana 1: Logo + Despre */}
          <div className="glass-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo-politia.png"
                  alt="Logo Poliție"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-semibold text-xs text-[var(--text-primary)] leading-tight">
                  Inspectoratul de Poliție
                </div>
                <div className="text-xs text-[var(--text-secondary)] leading-tight">
                  Județean Los Santos
                </div>
              </div>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Inspectoratul de Poliție Județean Los Santos este dedicat serviciului 
              public și protecției comunității noastre cu profesionalism și dedicare.
            </p>
          </div>

          {/* Coloana 2: Linkuri Rapide */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-lg mb-4 text-[var(--text-primary)]">Linkuri Rapide</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coloana 3: Contact Info */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-lg mb-4 text-[var(--text-primary)]">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-[var(--primary)] mt-0.5">📞</span>
                <div>
                  <div className="text-[var(--text-primary)] font-semibold">Urgențe</div>
                  <div className="text-[var(--text-secondary)]">112</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[var(--primary)] mt-0.5">☎️</span>
                <div>
                  <div className="text-[var(--text-primary)] font-semibold">Telefon</div>
                  <div className="text-[var(--text-secondary)]">+40 XXX XXX XXX</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[var(--primary)] mt-0.5">✉️</span>
                <div>
                  <div className="text-[var(--text-primary)] font-semibold">Email</div>
                  <div className="text-[var(--text-secondary)]">contact@ipj-los-santos.ro</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[var(--primary)] mt-0.5">📍</span>
                <div>
                  <div className="text-[var(--text-primary)] font-semibold">Adresă</div>
                  <div className="text-[var(--text-secondary)]">
                    Str. Principală, Nr. 1<br />
                    Los Santos, Județul Los Santos
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Coloana 4: Social Media + Info */}
          <div className="glass-card p-6">
            <h3 className="text-white font-bold text-lg mb-4 text-[var(--text-primary)]">Informații</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Program</div>
                <div className="text-xs text-[var(--text-secondary)] space-y-1">
                  <div>Luni - Vineri: 08:00 - 16:00</div>
                  <div>Sâmbătă - Duminică: Închis</div>
                  <div className="mt-2 text-[var(--primary)]">* Urgențe: 24/7</div>
                </div>
              </div>
              <div className="pt-4 border-t border-[var(--glass-border)]">
                <div className="text-sm font-semibold text-[var(--text-primary)] mb-2">Suntem aici pentru tine</div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Serviciul nostru este disponibil 24/7 pentru urgențe. 
                  Pentru întrebări generale, contactați-ne în programul de lucru.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--glass-border)] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[var(--text-secondary)] text-center md:text-left">
              © {currentYear} Inspectoratul de Poliție Județean Los Santos. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
