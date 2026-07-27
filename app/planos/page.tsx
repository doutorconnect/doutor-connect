import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

// Os valores reais vêm da tabela Plan (editável no painel admin).
// Aqui está a estrutura visual conforme o briefing: Básico e Premium,
// cada um com ciclo mensal ou trimestral.
const plans = [
  {
    tier: 'Básico',
    price: 'a definir no painel',
    features: ['Perfil público', 'Agenda online', 'Recebimento de agendamentos']
  },
  {
    tier: 'Premium',
    price: 'a definir no painel',
    highlight: true,
    features: [
      'Tudo do Básico',
      'Perfil em destaque na busca e na Home',
      'Prontuário digital com organização assistida por IA',
      'Plano terapêutico e biblioteca de documentos',
      'Financeiro e relatórios',
      'Página pública personalizada + QR Code',
      'Ferramentas de marketing',
      'Suporte por IA treinável'
    ]
  }
];

export default function PlanosPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="font-display text-3xl font-semibold text-navy dark:text-white">Planos para profissionais</h1>
        <p className="mt-2 max-w-xl text-ink-soft">
          Assinatura recorrente, mensal ou trimestral. Cancele quando quiser.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={`rounded-xl2 border p-8 ${
                p.highlight ? 'border-royal shadow-lg shadow-royal/10' : 'border-navy-100 dark:border-white/10'
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">
                  ⭐ Mais escolhido
                </span>
              )}
              <h2 className="font-display text-xl font-semibold text-navy dark:text-white">{p.tier}</h2>
              <p className="mt-1 text-sm text-ink-soft">{p.price}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-royal">✔</span>
                    <span className="text-ink dark:text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/cadastro?plano=${p.tier.toLowerCase()}`}
                className="mt-8 block rounded-full bg-royal px-6 py-3 text-center text-sm font-semibold text-white hover:bg-royal-700"
              >
                Escolher {p.tier}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
