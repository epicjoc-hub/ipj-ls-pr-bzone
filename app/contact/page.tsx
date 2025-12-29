import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact - IPJ Los Santos',
  description: 'Contactați Inspectoratul de Poliție Județean Los Santos',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactează-ne</h1>
          <p className="text-lg text-gray-600">
            Suntem aici pentru a vă ajuta. Contactați-ne folosind formularul de mai jos sau informațiile de contact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimite un mesaj</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informații de contact</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Urgențe</h3>
                <p className="text-2xl font-bold text-blue-900">112</p>
                <p className="text-gray-600 text-sm">Apelați 112 pentru orice urgență</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                <p className="text-lg text-gray-700">+40 XXX XXX XXX</p>
                <p className="text-gray-600 text-sm">Luni - Vineri: 08:00 - 16:00</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-lg text-gray-700">contact@ipj-los-santos.ro</p>
                <p className="text-gray-600 text-sm">Răspundem în 24-48 de ore</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresă</h3>
                <p className="text-lg text-gray-700">
                  Str. Principală, Nr. 1<br />
                  Los Santos, Județul Los Santos<br />
                  Cod poștal: XXXXX
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Program</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Luni - Vineri: 08:00 - 16:00</p>
                  <p>Sâmbătă - Duminică: Închis</p>
                  <p className="text-sm text-gray-600 mt-2">
                    * Pentru urgențe, apelați 112 (disponibil 24/7)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

