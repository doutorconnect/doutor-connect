// Barra de progresso e checklist do PASSO 5 do fluxo (Completar Perfil).
// profileProgress e os itens do checklist vêm do model Professional.
const checklist = [
  { label: 'Foto', done: true },
  { label: 'Registro profissional', done: true },
  { label: 'Especialidade', done: true },
  { label: 'Agenda', done: false },
  { label: 'Valor da sessão', done: false },
  { label: 'Biografia', done: true },
  { label: 'Idiomas', done: true }
];

export default function DashboardHomePage() {
  const progress = Math.round((checklist.filter((c) => c.done).length / checklist.length) * 100);

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Seu painel</h1>

      <div className="mt-6 rounded-xl2 border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600">
        <div className="flex items-center justify-between">
          <p className="font-medium text-navy dark:text-white">Perfil {progress}% completo</p>
          {progress < 100 && (
            <span className="text-xs font-medium text-royal">Em análise após completar</span>
          )}
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy-50 dark:bg-white/10">
          <div className="h-full rounded-full bg-royal transition-all" style={{ width: `${progress}%` }} />
        </div>

        <ul className="mt-6 space-y-2 text-sm">
          {checklist.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <span className={item.done ? 'text-emerald-600' : 'text-navy-100 dark:text-white/20'}>
                {item.done ? '✔' : '○'}
              </span>
              <span className={item.done ? 'text-ink dark:text-white/90' : 'text-ink-soft'}>{item.label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-xs text-ink-soft">✔ Alterações salvas automaticamente.</p>
      </div>
    </div>
  );
}
