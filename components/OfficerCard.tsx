import Image from 'next/image';

interface Officer {
  id: string;
  name: string;
  position: string;
  department: string;
  description: string;
  image: string;
  email: string;
}

interface OfficerCardProps {
  officer: Officer;
}

export default function OfficerCard({ officer }: OfficerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200">
        <Image
          src={officer.image}
          alt={officer.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded text-xs font-semibold">
            {officer.department}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{officer.name}</h3>
        <p className="text-blue-900 font-semibold mb-3">{officer.position}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {officer.description}
        </p>
        <a
          href={`mailto:${officer.email}`}
          className="text-blue-900 hover:text-yellow-600 transition-colors text-sm font-semibold"
        >
          Contactează →
        </a>
      </div>
    </div>
  );
}

