const stats = [
  { label: 'Profissionais ativos', value: '—' },
  { label: 'Em análise', value: '—' },
  { label: 'Assinaturas ativas', value: '—' },
  { label: 'Agendamentos (30 dias)', value: '—' }
];

export default function AdminOverviewPage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Visão geral</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl2 border border-navy-100 bg-white p-5 dark:border-white/10 dark:bg-navy-600">
            <p className="text-sm text-ink-soft">{s.label}</p>
            <p className="mt-2 font-display text-2xl font-semibold text-navy dark:text-white">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
