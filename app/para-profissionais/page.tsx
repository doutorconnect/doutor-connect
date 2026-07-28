import Link from 'next/link';
import { Globe2, DollarSign, LayoutGrid, HelpCircle } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';

const benefits = [
  { icon: Globe2, title: 'Atendimento internacional', desc: 'Amplie sua atuação para pacientes de outros países.' },
  { icon: DollarSign, title: 'Ganhos em outras moedas', desc: 'Receba diretamente de pacientes que pagam em dólar ou euro.' },
  { icon: LayoutGrid, title: 'Ferramentas completas', desc: 'Agenda, prontuário digital, financeiro e muito mais.' }
];

const faqs = [
  { q: 'Como funciona o cadastro?', a: 'Você cria sua conta, escolhe um plano, e depois completa seu perfil profissional para análise.' },
  { q: 'Quanto tempo leva a aprovação?', a: 'Nossa equipe analisa o registro profissional e aprova perfis completos rapidamente.' },
  { q: 'Como recebo dos pacientes?', a: 'O pagamento é combinado diretamente entre você e o paciente.' }
];

export default function ParaProfissionaisPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy-50 py-20 dark:bg-surface-dark">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-display text-3xl font-semibold text-navy dark:text-white md:text-4xl">
              Leve seu atendimento além das fronteiras
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft">
              O Doutor Connect conecta você a pacientes de vários países, com as ferramentas de
              uma plataforma completa para sua prática clínica online.
            </p>
            <Link
              href="/planos"
              className="mt-8 inline-block rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 hover:bg-royal-700"
            >
              Criar perfil profissional
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl2 border border-navy-100 p-6 dark:border-white/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-royal/10">
                  <b.icon className="h-5 w-5 text-royal" />
                </div>
                <h3 className="mt-4 font-display text-base font-medium text-navy dark:text-white">{b.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="flex items-center gap-2 font-display text-2xl font-semibold text-navy dark:text-white">
              <HelpCircle className="h-6 w-6 text-royal" /> Perguntas frequentes
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-xl2 border border-navy-100 p-5 dark:border-white/10">
                  <summary className="cursor-pointer font-display text-sm font-medium text-navy marker:content-none dark:text-white">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy-900 py-16 text-center">
          <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">Pronto para começar?</h2>
          <Link
            href="/planos"
            className="mt-6 inline-block rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white hover:bg-royal-700"
          >
            Ver planos e criar perfil
          </Link>
        </section>
      </main>
    </>
  );
}
