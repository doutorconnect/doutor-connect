const cities = [
  { city: 'São Paulo', time: '09:40', status: 'Disponível agora' },
  { city: 'Lisboa', time: '13:40', status: 'Disponível agora' },
  { city: 'Madrid', time: '13:40', status: '2 vagas hoje' },
  { city: 'Paris', time: '13:40', status: 'Próxima às 15h' },
  { city: 'Milão', time: '13:40', status: '2 vagas hoje' }
];

// Elemento de assinatura da Home: mostra a proposta central do produto
// (encontrar um profissional disponível, em qualquer fuso, agora) sem
// depender de estatísticas genéricas.
export function GlobalAvailabilityCard() {
  return (
    <div className="w-full max-w-sm rounded-xl2 border border-navy-100 bg-white p-5 shadow-xl shadow-navy-900/5 dark:border-white/10 dark:bg-navy-600">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-ink-soft">
          Agenda em tempo real
        </span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Ao vivo
        </span>
      </div>

      <ul className="space-y-3">
        {cities.map((c) => (
          <li key={c.city} className="flex items-center justify-between text-sm">
            <div>
              <p className="font-medium text-navy dark:text-white">{c.city}</p>
              <p className="text-xs text-ink-soft">{c.time} horário local</p>
            </div>
            <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600 dark:bg-white/10 dark:text-white">
              {c.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
