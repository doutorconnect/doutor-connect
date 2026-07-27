import Link from 'next/link';

const tools = [
  { href: '/dashboard/ferramentas/prontuario', label: 'Prontuário digital', desc: 'Evolução clínica organizada, com apoio de IA.' },
  { href: '/dashboard/ferramentas/prontuario', label: 'Plano terapêutico', desc: 'Em breve.' },
  { href: '/dashboard/ferramentas/prontuario', label: 'Biblioteca de documentos', desc: 'Em breve.' },
  { href: '/dashboard/ferramentas/prontuario', label: 'Financeiro', desc: 'Em breve.' },
  { href: '/dashboard/ferramentas/prontuario', label: 'Relatórios', desc: 'Em breve.' }
];

export default function FerramentasPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Ferramentas Premium</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="rounded-xl2 border border-navy-100 bg-white p-5 transition hover:border-royal/40 dark:border-white/10 dark:bg-navy-600"
          >
            <p className="font-medium text-navy dark:text-white">{t.label}</p>
            <p className="mt-1 text-sm text-ink-soft">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
