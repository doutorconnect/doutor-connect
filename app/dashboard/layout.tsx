import Link from 'next/link';

const menu = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/agenda', label: 'Agenda' },
  { href: '/dashboard/consultas', label: 'Consultas' },
  { href: '/dashboard/pacientes', label: 'Pacientes' },
  { href: '/dashboard/financeiro', label: 'Financeiro' },
  { href: '/dashboard/ferramentas', label: 'Ferramentas' },
  { href: '/dashboard/perfil', label: 'Perfil' },
  { href: '/dashboard/assinatura', label: 'Assinatura' },
  { href: '/dashboard/configuracoes', label: 'Configurações' },
  { href: '/dashboard/suporte-ia', label: 'Suporte IA' }
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-light dark:bg-surface-dark">
      <aside className="hidden w-60 shrink-0 border-r border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600 md:block">
        <p className="mb-6 font-display text-lg font-semibold text-navy dark:text-white">Doutor Connect</p>
        <nav className="space-y-1 text-sm">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-ink-soft transition hover:bg-navy-50 hover:text-navy dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
