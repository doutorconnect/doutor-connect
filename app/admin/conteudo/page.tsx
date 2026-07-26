import { getAllContentForLocale } from '@/lib/cms';
import { saveContent } from './actions';
import ptDefaults from '@/messages/pt.json';

const editableFields = [
  { key: 'home.headline', label: 'Título principal (hero)', fallback: ptDefaults.home.headline },
  { key: 'home.subheadline', label: 'Subtítulo (hero)', fallback: ptDefaults.home.subheadline },
  { key: 'home.ctaPrimary', label: 'Botão principal', fallback: ptDefaults.home.ctaPrimary },
  { key: 'home.ctaSecondary', label: 'Botão secundário', fallback: ptDefaults.home.ctaSecondary },
  { key: 'footer.rights', label: 'Texto do rodapé', fallback: ptDefaults.footer.rights }
];

export default async function ConteudoPage() {
  const content = await getAllContentForLocale('pt');

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Conteúdo do site</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Edite os textos da Home sem precisar de um desenvolvedor. As mudanças aparecem no site
        assim que você salvar.
      </p>

      <div className="mt-8 space-y-6">
        {editableFields.map((field) => (
          <form
            key={field.key}
            action={saveContent}
            className="rounded-xl2 border border-navy-100 p-5 dark:border-white/10"
          >
            <input type="hidden" name="key" value={field.key} />
            <input type="hidden" name="locale" value="pt" />
            <label className="text-sm font-medium text-navy dark:text-white">{field.label}</label>
            <textarea
              name="value"
              defaultValue={content[field.key] ?? field.fallback}
              rows={2}
              className="mt-2 w-full rounded-lg border border-navy-100 px-3 py-2 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 dark:border-white/10 dark:bg-navy-600"
            />
            <button className="mt-3 rounded-full bg-royal px-5 py-2 text-xs font-semibold text-white hover:bg-royal-700">
              Salvar
            </button>
          </form>
        ))}
      </div>
    </div>
  );
}
