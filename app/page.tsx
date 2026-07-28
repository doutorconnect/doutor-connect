import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Lock,
  Video,
  BadgeCheck,
  Search,
  Users
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

// Fotos com licença livre para uso comercial (Unsplash License), de
// psicólogos/atendimento online. Um overlay azul (BlueTint) é aplicado
// sobre todas para manter o tom da marca consistente entre fotos diferentes.
const IMG_HERO = 'https://images.unsplash.com/photo-1752650733337-cb0189176fb9?auto=format&fit=crop&w=900&q=80';
const IMG_INTRO = 'https://images.unsplash.com/photo-1758273241078-8eec353836be?auto=format&fit=crop&w=900&q=80';
const IMG_PRO_1 = 'https://images.unsplash.com/photo-1758876203819-4cb3eec8e1aa?auto=format&fit=crop&w=700&q=80';
const IMG_PRO_2 = 'https://images.unsplash.com/photo-1758691463620-188ca7c1a04f?auto=format&fit=crop&w=700&q=80';
const IMG_PRO_3 = 'https://images.unsplash.com/photo-1758273241086-f3585ef8c2f8?auto=format&fit=crop&w=700&q=80';

function BlueTint() {
  return <div className="absolute inset-0 bg-royal-700/20 mix-blend-multiply" />;
}

const features = [
  { icon: ShieldCheck, title: 'Profissionais Verificados', desc: 'Todos os profissionais são licenciados e verificados.' },
  { icon: Globe2, title: 'Alcance Global', desc: 'Conecte-se com profissionais em qualquer lugar do mundo.' },
  { icon: Lock, title: 'Privado e Seguro', desc: 'Sua privacidade e a segurança dos seus dados são prioridade.' },
  { icon: Video, title: 'Sessões Online', desc: 'Sessões online convenientes, no seu horário.' }
];

const professionals = [
  { img: IMG_PRO_1, name: 'Dra. Camila Andrade', category: 'Psicologia', price: 'R$ 180 / sessão', approach: 'Terapia Cognitivo-Comportamental' },
  { img: IMG_PRO_2, name: 'Dr. Rafael Nogueira', category: 'Psiquiatria', price: 'R$ 250 / sessão', approach: 'Abordagem Integrativa' },
  { img: IMG_PRO_3, name: 'Dra. Beatriz Lima', category: 'Psicanálise', price: 'R$ 200 / sessão', approach: 'Psicanálise Contemporânea' }
];

const nextSteps = [
  { n: '01', title: 'O motivo da sua busca', desc: 'Comece pela área mais próxima da sua experiência atual.' },
  { n: '02', title: 'Idioma e localização preferidos', desc: 'Use os filtros que facilitam a comunicação e o acesso.' },
  { n: '03', title: 'Sua rotina e disponibilidade', desc: 'Compare as opções de horário antes de escolher.' }
];

const howItWorks = [
  { n: '01', title: 'Busque com filtros úteis', desc: 'Explore profissionais por especialidade, idioma, localização e disponibilidade.' },
  { n: '02', title: 'Compare perfis profissionais', desc: 'Veja experiência, abordagem, idiomas, valores e formatos de atendimento.' },
  { n: '03', title: 'Escolha um horário disponível', desc: 'Abra o perfil do profissional e siga as opções de agendamento.' }
];

const whatBringsYou = [
  { title: 'Ansiedade e excesso de pensamentos', desc: 'Preocupação, medo, tensão e pensamentos recorrentes.' },
  { title: 'Relacionamentos', desc: 'Comunicação, conexão e limites pessoais.' },
  { title: 'Autoestima', desc: 'Confiança, autoimagem e desenvolvimento pessoal.' },
  { title: 'Estresse e esgotamento', desc: 'Sobrecarga, exaustão e dificuldade de desacelerar.' },
  { title: 'Luto e perdas', desc: 'Apoio durante perdas e mudanças emocionais importantes.' },
  { title: 'Transições de vida', desc: 'Carreira, mudanças, identidade e decisões importantes.' }
];

const beforeChoosing = [
  { n: '01', title: 'Áreas de experiência', desc: 'O profissional atua com o que você está enfrentando?' },
  { n: '02', title: 'Idioma e comunicação', desc: 'Você consegue se comunicar no idioma que for mais natural?' },
  { n: '03', title: 'Disponibilidade e valor', desc: 'As opções de horário e preço cabem na sua rotina?' },
  { n: '04', title: 'Abordagem profissional', desc: 'O perfil explica o trabalho de um jeito que você entende?' }
];

export default async function HomePage() {
  const [headline, subheadline] = await Promise.all([
    getContent('home.headline', 'pt', ptDefaults.home.headline),
    getContent('home.subheadline', 'pt', ptDefaults.home.subheadline)
  ]);

  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy-50 dark:bg-surface-dark">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-royal shadow-sm">
                Plataforma Global de Saúde Mental
              </p>
              <h1 className="font-display text-4xl font-extrabold uppercase leading-tight text-navy dark:text-white md:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-md text-base text-ink-soft">{subheadline}</p>

              <Link
                href="/profissionais"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-400 to-royal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition hover:opacity-90"
              >
                Iniciar Jornada <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="relative h-[380px] w-full max-w-md overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={IMG_HERO}
                  alt="Psicóloga em atendimento online por vídeo"
                  className="h-full w-full object-cover"
                />
                <BlueTint />
              </div>
            </div>
          </div>

          {/* 4 cards de confiança */}
          <div className="mx-auto max-w-6xl px-6 pb-16">
            <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-navy-600 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-royal/10">
                    <f.icon className="h-5 w-5 text-royal" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-navy dark:text-white">{f.title}</p>
                    <p className="text-xs text-ink-soft">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comece sua busca */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-center font-display text-2xl font-semibold text-navy dark:text-white">
            Comece sua busca
          </h2>
          <div className="mt-6 grid gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-navy-600 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-navy-100 sm:dark:divide-white/10">
            <label className="px-3 py-1">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Localização</span>
              <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                <option>Brasil</option>
                <option>Portugal</option>
                <option>Estados Unidos</option>
                <option>Reino Unido</option>
              </select>
            </label>
            <label className="px-3 py-1">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Especialidade</span>
              <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                <option>Psicologia</option>
                <option>Psiquiatria</option>
                <option>Psicanálise</option>
                <option>Terapia Integrativa</option>
              </select>
            </label>
            <label className="px-3 py-1">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Serviço</span>
              <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                <option>Consulta Online</option>
                <option>Terapia de Casal</option>
                <option>Terapia Infantil</option>
              </select>
            </label>
            <div className="flex items-center px-3 py-1">
              <Link
                href="/profissionais"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-2.5 text-sm font-semibold text-white hover:bg-royal-700"
              >
                <Search className="h-4 w-4" /> Buscar agora
              </Link>
            </div>
          </div>
        </section>

        {/* Banner profissional */}
        <section className="bg-navy-900 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
            <p className="font-display text-lg font-medium text-white">
              Você é profissional? Junte-se à nossa equipe.
            </p>
            <Link
              href="/para-profissionais"
              className="shrink-0 rounded-full bg-royal px-6 py-2.5 text-sm font-semibold text-white hover:bg-royal-700"
            >
              Cadastre-se como profissional
            </Link>
          </div>
        </section>

        {/* Psicólogos online */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <div className="relative order-2 h-[360px] w-full overflow-hidden rounded-3xl shadow-lg md:order-1">
              <img src={IMG_INTRO} alt="Sessão de psicologia online" className="h-full w-full object-cover" />
              <BlueTint />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-royal">Atendimento psicológico online</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
                Apoio profissional, onde quer que você se sinta confortável.
              </h2>
              <p className="mt-4 text-ink-soft">
                Conheça psicólogos que oferecem atendimento online. Compare especialidades,
                idiomas, disponibilidade e valores de sessão antes de fazer sua escolha.
              </p>
              <Link href="/profissionais" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-royal">
                Encontrar um psicólogo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Conheça alguns profissionais */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
            Conheça alguns profissionais
          </h2>
          <p className="mt-2 max-w-xl text-ink-soft">
            Compare especialidades, formatos de atendimento, disponibilidade e abordagem
            profissional antes de escolher.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {professionals.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-xl2 border border-navy-100 bg-white transition hover:shadow-lg dark:border-white/10 dark:bg-navy-600">
                <div className="relative h-56 w-full">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  <BlueTint />
                  <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-royal shadow">
                    ⭐ Premium
                  </span>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-emerald-600 shadow">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verificado
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-display font-semibold text-navy dark:text-white">{p.name}</p>
                  <p className="mt-0.5 text-sm text-royal">{p.category}</p>
                  <p className="mt-2 text-sm text-ink-soft">{p.approach}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold text-navy dark:text-white">{p.price}</span>
                    <Link href="/profissionais/exemplo" className="text-sm font-medium text-royal">
                      Ver Perfil →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Seu próximo passo */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-royal">Seu próximo passo</p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
              Encontrar o profissional certo pode ser mais pessoal e menos cansativo.
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {nextSteps.map((s) => (
                <div key={s.n}>
                  <p className="font-display text-3xl font-bold text-royal/25">{s.n}</p>
                  <h3 className="mt-2 font-display text-base font-medium text-navy dark:text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-royal">Como funciona</p>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
            Um caminho simples da sua busca até a sua consulta.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {howItWorks.map((s) => (
              <div key={s.n} className="rounded-xl2 border border-navy-100 p-6 dark:border-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal font-display text-sm font-semibold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-base font-medium text-navy dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* O que te traz aqui? */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-royal">O que te traz aqui?</p>
            <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
              Encontre apoio para o que é importante agora.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {whatBringsYou.map((t) => (
                <Link
                  key={t.title}
                  href={`/profissionais?tema=${encodeURIComponent(t.title)}`}
                  className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 transition hover:border-royal/40 hover:shadow-md dark:border-white/10 dark:bg-navy-600"
                >
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-royal" />
                  <div>
                    <p className="font-display text-sm font-medium text-navy dark:text-white">{t.title}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{t.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Antes de escolher */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-semibold uppercase tracking-wide text-royal">Antes de escolher</p>
          <h2 className="mt-2 max-w-2xl font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
            Compare os detalhes que podem te deixar mais confortável.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {beforeChoosing.map((s) => (
              <div key={s.n}>
                <p className="font-display text-2xl font-bold text-royal/25">{s.n}</p>
                <h3 className="mt-2 font-display text-base font-medium text-navy dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chamada final */}
        <section className="bg-navy-900 py-20 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <Users className="mx-auto h-8 w-8 text-royal-400" />
            <h2 className="mt-4 font-display text-2xl font-semibold text-white md:text-3xl">
              O primeiro passo para cuidar da sua saúde mental começa aqui.
            </h2>
            <p className="mt-3 text-white/70">
              Encontre profissionais qualificados para atendimento online com segurança,
              acolhimento e flexibilidade.
            </p>
            <Link
              href="/profissionais"
              className="mt-8 inline-block rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white hover:bg-royal-700"
            >
              Encontrar um Profissional
            </Link>
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
