// Esta tela lê/grava o model SiteSettings.
// É aqui que a exigência "sem programação" do briefing se concretiza:
// qualquer alteração de marca acontece por upload/seleção, nunca por código.
export default function AparenciaPage() {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Logo, cores e favicon</h1>

      <div className="rounded-xl2 border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600">
        <h2 className="font-medium text-navy dark:text-white">Logo</h2>
        <p className="mt-1 text-sm text-ink-soft">
          Envie versões para modo claro e escuro. Aparecem automaticamente no header, login,
          cadastro, dashboard, rodapé e e-mails do sistema.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-navy-100 text-xs text-ink-soft hover:border-royal dark:border-white/15">
            Logo — modo claro
            <input type="file" accept="image/*" className="hidden" />
          </label>
          <label className="flex h-28 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-navy-100 text-xs text-ink-soft hover:border-royal dark:border-white/15">
            Logo — modo escuro
            <input type="file" accept="image/*" className="hidden" />
          </label>
        </div>
      </div>

      <div className="rounded-xl2 border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600">
        <h2 className="font-medium text-navy dark:text-white">Favicon</h2>
        <label className="mt-4 flex h-20 w-20 cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-navy-100 text-xs text-ink-soft hover:border-royal dark:border-white/15">
          Enviar
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="rounded-xl2 border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600">
        <h2 className="font-medium text-navy dark:text-white">Cores da marca</h2>
        <div className="mt-4 flex gap-6">
          <div>
            <label className="text-sm text-ink-soft">Cor primária</label>
            <input type="color" defaultValue="#0B1F3A" className="mt-1 block h-10 w-16 rounded" />
          </div>
          <div>
            <label className="text-sm text-ink-soft">Cor de destaque</label>
            <input type="color" defaultValue="#2452FF" className="mt-1 block h-10 w-16 rounded" />
          </div>
        </div>
      </div>

      <button className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white hover:bg-royal-700">
        Salvar e visualizar
      </button>
    </div>
  );
}
