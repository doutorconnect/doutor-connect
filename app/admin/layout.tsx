import Link from 'next/link';

const sections = [
  { href: '/admin', label: 'Visão geral' },
  { href: '/admin/aparencia', label: 'Logo, cores e favicon' },
  { href: '/admin/conteudo', label: 'Conteúdo do site (CMS)' },
  { href: '/admin/catalogos', label: 'Categorias, especialidades, idiomas' },
  { href: '/admin/planos', label: 'Planos e valores' },
  { href: '/admin/profissionais', label: 'Profissionais e aprovações' },
  { href: '/admin/pacientes', label: 'Pacientes' },
  { href: '/admin/assinaturas', label: 'Assinaturas e pagamentos' },
  { href: '/admin/agendamentos', label: 'Agendamentos' },
  { href: '/admin/relatorios', label: 'Relatórios' },
  { href: '/admin/usuarios', label: 'Usuários e permissões' }
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-light dark:bg-surface-dark">
      <aside className="hidden w-64 shrink-0 border-r border-navy-100 bg-navy-900 p-6 text-white/80 md:block">
        <p className="mb-6 font-display text-lg font-semibold text-white">Administração</p>
        <nav className="space-y-1 text-sm">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="block rounded-lg px-3 py-2 hover:bg-white/10 hover:text-white">
              {s.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
