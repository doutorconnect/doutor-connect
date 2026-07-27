import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { GlobalAvailabilityCard } from '@/components/global-availability-card';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

const benefits = [
  { title: 'Consulta online', desc: 'Sessões por vídeo direto do navegador, sem instalar nada.' },
  { title: 'Profissionais verificados', desc: 'Registro profissional conferido manualmente pela nossa equipe.' },
  { title: 'Atendimento internacional', desc: 'Encontre profissionais em qualquer país e fuso horário.' },
  { title: 'Agenda fácil', desc: 'Horários sincronizados, sem trocas de mensagem para marcar.' },
  { title: 'Diversos idiomas', desc: 'Português, inglês, espanhol, francês e italiano.' },
  { title: 'Privacidade', desc: 'Seus dados e conversas protegidos ponta a ponta.' }
];

const steps = [
  { title: 'Encontre', desc: 'Filtre por especialidade, idioma e preço até achar quem combina com você.' },
  { title: 'Agende', desc: 'Escolha um horário disponível na agenda do profissional.' },
  { title: 'Converse', desc: 'O profissional confirma e combina o pagamento diretamente com você.' },
  { title: 'Continue', desc: 'Acompanhe suas sessões e histórico dentro da plataforma.' }
];

export default async function HomePage() {
  const [headline, subheadline, ctaPrimary, ctaSecondary] = await Promise.all([
    getContent('home.headline', 'pt', ptDefaults.home.headline),
    getContent('home.subheadline', 'pt', ptDefaults.home.subheadline),
    getContent('home.ctaPrimary', 'pt', ptDefaults.home.ctaPrimary),
    getContent('home.ctaSecondary', 'pt', ptDefaults.home.ctaSecondary)
  ]);

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-900">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(60% 50% at 15% 20%, rgba(36,82,255,0.35), transparent), radial-gradient(50% 40% at 90% 10%, rgba(36,82,255,0.2), transparent)'
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
                Saúde mental, sem fronteiras
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-md text-base text-white/70">{subheadline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/profissionais"
                  className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/30 transition hover:bg-royal-700"
                >
                  {ctaPrimary}
                </Link>
                <Link
                  href="/cadastro"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {ctaSecondary}
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/60">
                <span>★★★★★ &nbsp;avaliado por pacientes</span>
                <span>Consulta por vídeo</span>
                <span>PT · EN · ES · FR · IT</span>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <GlobalAvailabilityCard />
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-navy dark:text-white">
            Por que o Doutor Connect
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl2 border border-navy-100 p-6 transition hover:border-royal/40 hover:shadow-md dark:border-white/10"
              >
                <h3 className="font-display text-lg font-medium text-navy dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Profissionais em destaque — placeholder, alimentado via API/admin */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white">
                Profissionais em destaque
              </h2>
              <Link href="/profissionais" className="text-sm font-medium text-royal">
                Ver todos →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl2 border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-600">
                  <div className="h-32 w-full rounded-lg bg-navy-50 dark:bg-white/10" />
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-display font-medium text-navy dark:text-white">Nome do profissional</p>
                    <span className="rounded-full bg-royal/10 px-2 py-0.5 text-xs font-medium text-royal">
                      ⭐ Premium
                    </span>
                  </div>
                  <p className="text-sm text-ink-soft">Psicóloga clínica · Ansiedade</p>
                  <Link
                    href="/profissionais/exemplo"
                    className="mt-4 inline-block text-sm font-medium text-royal"
                  >
                    Ver perfil →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-navy dark:text-white">Como funciona</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title}>
                <p className="font-display text-sm font-semibold text-royal">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-2 font-display text-lg font-medium text-navy dark:text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-navy-100 py-10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-ink-soft sm:flex-row">
          <span>© {new Date().getFullYear()} Doutor Connect. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link href="/faq">FAQ</Link>
            <Link href="/termos">Termos</Link>
            <Link href="/politica">Política</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
