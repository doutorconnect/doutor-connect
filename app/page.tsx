import Link from 'next/link';
import {
  Brain,
  Leaf,
  Sparkles,
  Users,
  ShieldCheck,
  CalendarCheck,
  Heart,
  Frown,
  MessageCircleHeart
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

const trustPoints = [
  { icon: Users, label: 'Profissionais qualificados' },
  { icon: ShieldCheck, label: 'Atendimento seguro e sigiloso' },
  { icon: CalendarCheck, label: 'Agendamento simples e rápido' }
];

const whyCareCards = [
  { icon: Brain, title: 'Mais equilíbrio emocional', desc: 'Lide melhor com os desafios do dia a dia.' },
  { icon: Leaf, title: 'Mais qualidade de vida', desc: 'O bem-estar mental reflete em todas as áreas da sua vida.' },
  { icon: Sparkles, title: 'Autoconhecimento e crescimento', desc: 'Entenda suas emoções e fortaleça sua autoestima.' },
  { icon: Heart, title: 'Relações mais saudáveis', desc: 'Melhore sua comunicação e suas conexões com os outros.' }
];

const topics = [
  { title: 'Ansiedade e excesso de pensamentos', desc: 'Quando a mente não desliga, conversar com um profissional pode trazer clareza.' },
  { title: 'Autoestima e insegurança', desc: 'Cuidar de como você se percebe muda a forma como você vive suas relações.' },
  { title: 'Tristeza e desânimo', desc: 'Buscar apoio antes que o peso emocional tome conta da sua rotina também é cuidado.' },
  { title: 'Relacionamentos', desc: 'A terapia ajuda a entender padrões, limites, vínculos e escolhas afetivas.' }
];

const steps = [
  { title: 'Escolha o profissional', desc: 'Veja perfis, abordagens, idiomas e valores até achar quem combina com você.' },
  { title: 'Agende um horário', desc: 'Escolha um horário disponível direto na agenda do profissional.' },
  { title: 'Converse e confirme', desc: 'O profissional confirma e combina com você o formato do atendimento.' },
  { title: 'Continue seu cuidado', desc: 'Acompanhe suas sessões e seu histórico dentro da plataforma.' }
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
        <section className="relative overflow-hidden bg-white dark:bg-surface-dark">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-28 pt-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-royal/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-royal-700">
                <Heart className="h-3.5 w-3.5 fill-royal text-royal" /> Cuidar da mente é cuidar da vida
              </p>
              <h1 className="font-display text-4xl font-semibold leading-tight text-navy dark:text-white md:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-md text-base text-ink-soft">{subheadline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/profissionais"
                  className="rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-royal/20 transition hover:bg-royal-700"
                >
                  {ctaPrimary}
                </Link>
                <Link
                  href="/cadastro"
                  className="rounded-full border border-navy-100 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                >
                  {ctaSecondary}
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-soft">
                {trustPoints.map((t) => (
                  <span key={t.label} className="flex items-center gap-2">
                    <t.icon className="h-4 w-4 text-royal" /> {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80"
                alt="Mulher sorrindo, transmitindo acolhimento"
                className="h-[420px] w-full max-w-md rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-8 left-0 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-lg md:-left-10">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal/10">
                  <Heart className="h-4 w-4 fill-royal text-royal" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-navy">Acolhimento que transforma</p>
                  <p className="text-xs text-ink-soft">Você não precisa estar bem o tempo todo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por que cuidar da saúde mental */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
                Por que cuidar da sua saúde mental
              </h2>
              <p className="mt-3 text-ink-soft">
                Cuidar da mente é essencial para viver melhor, tomar decisões com mais clareza e
                construir relações mais saudáveis.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyCareCards.map((c) => (
                <div key={c.title} className="rounded-xl2 bg-white p-6 shadow-sm dark:bg-navy-600">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-royal/10">
                    <c.icon className="h-5 w-5 text-royal" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium text-navy dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Você não precisa esperar */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-royal/10">
                <Frown className="h-6 w-6 text-royal" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
                Você não precisa esperar tudo ficar insuportável para buscar ajuda
              </h2>
              <p className="mt-4 text-ink-soft">
                Terapia não é só para momentos de crise. É um espaço de cuidado e fortalecimento
                emocional para lidar melhor com ansiedade, insegurança, sobrecarga, tristeza e as
                mudanças da vida.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {topics.map((t) => (
                <div key={t.title} className="rounded-xl2 border border-navy-100 p-5 dark:border-white/10">
                  <h3 className="font-display text-base font-medium text-navy dark:text-white">{t.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
                Como começar seu cuidado emocional
              </h2>
              <p className="mt-3 text-ink-soft">
                Você escolhe o profissional que mais combina com o seu momento. O processo é
                simples, acolhedor e pensado para facilitar o primeiro passo.
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <div key={s.title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-royal font-display text-sm font-semibold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 font-display text-base font-medium text-navy dark:text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/profissionais"
              className="mt-10 inline-block rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white hover:bg-royal-700"
            >
              Ver profissionais disponíveis
            </Link>
          </div>
        </section>

        {/* CTA intermediário */}
        <section className="bg-navy-900 py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
            <MessageCircleHeart className="h-8 w-8 text-royal-400" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">
              Dê o primeiro passo com mais leveza
            </h2>
            <p className="mt-3 text-white/70">
              Você não precisa ter todas as respostas agora. Comece escolhendo um profissional e
              permita-se cuidar da sua saúde mental.
            </p>
            <Link
              href="/profissionais"
              className="mt-6 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white hover:bg-royal-700"
            >
              Encontrar profissional
            </Link>
          </div>
        </section>

        {/* Profissionais em destaque — placeholder, alimentado via API/admin */}
        <section className="mx-auto max-w-6xl px-6 py-20">
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
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-royal/10 font-display text-lg font-semibold text-royal">
                  DR
                </div>
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
