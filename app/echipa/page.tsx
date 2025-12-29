import OfficerCard from '@/components/OfficerCard';
import officersData from '@/data/officers.json';

export const metadata = {
  title: 'Echipă - IPJ Los Santos',
  description: 'Cunoașteți echipa Inspectoratului de Poliție Județean Los Santos',
};

export default function EchipaPage() {
  const departments = Array.from(new Set(officersData.map((o) => o.department)));

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Echipa Noastră</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            O echipă dedicată de profesioniști, angajați în servirea și protecția comunității noastre.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Departamente</h2>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <span
                key={dept}
                className="bg-blue-100 text-blue-900 px-4 py-2 rounded-lg font-semibold"
              >
                {dept}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officersData.map((officer) => (
            <OfficerCard key={officer.id} officer={officer} />
          ))}
        </div>

        {officersData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nu există informații despre echipă momentan.</p>
          </div>
        )}
      </div>
    </div>
  );
}

