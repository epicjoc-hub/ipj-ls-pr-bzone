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
    <div className="bg-[var(--card-bg)] border border-[var(--border)] rounded overflow-hidden hover:border-[var(--primary)] transition-all duration-200">
      <div className="relative h-56 bg-[var(--background-secondary)]">
        <Image
          src={officer.image}
          alt={officer.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <span className="bg-[var(--primary)]/10 text-[var(--primary)] px-2 py-1 rounded text-xs font-semibold">
            {officer.department}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{officer.name}</h3>
        <p className="text-[var(--primary)] text-sm font-semibold mb-2">{officer.position}</p>
        <p className="text-[var(--text-secondary)] text-sm mb-3 line-clamp-3">
          {officer.description}
        </p>
        <a
          href={`mailto:${officer.email}`}
          className="text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors text-sm font-semibold"
        >
          Contactează →
        </a>
      </div>
    </div>
  );
}
