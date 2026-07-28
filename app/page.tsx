import Link from 'next/link';
import {
  Heart,
  ArrowRight,
  Play,
  ShieldCheck,
  Globe2,
  Users,
  Star,
  BadgeCheck,
  Frown,
  Smile,
  Briefcase,
  Moon,
  Brain,
  Baby,
  UserCheck,
  HandHeart,
  Sparkles
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { getContent } from '@/lib/cms';
import ptDefaults from '@/messages/pt.json';

// Fotos com licença livre para uso comercial (Unsplash License).
const IMG_HERO = 'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80';
const IMG_WHY = 'https://images.unsplash.com/photo-1758273241078-8eec353836be?auto=format&fit=crop&w=900&q=80';

const heroTrust = [
  { icon: Star, label: 'Avaliado por pacientes' },
  { icon: Globe2, label: 'Diversos idiomas' },
  { icon: ShieldCheck, label: 'Profissionais qualificados' }
];

// "Como você está se sentindo hoje?" — navegação por necessidade, não por
// nome técnico de especialidade.
const feelings = [
  { icon: Frown, label: 'Ansiedade' },
  { icon: Smile, label: 'Depressão' },
  { icon: Heart, label: 'Relacionamentos' },
  { icon: Users, label: 'Família' },
  { icon: Briefcase, label: 'Estresse no trabalho' },
  { icon: Moon, label: 'Insônia' },
  { icon: Brain, label: 'TDAH' },
  { icon: Baby, label: 'Infância' },
  { icon: UserCheck, label: 'Adolescência' },
  { icon: Sparkles, label: 'Autoconhecimento' },
  { icon: HandHeart, label: 'Luto' },
  { icon: BadgeCheck, label: 'Autoestima' }
];

const steps = [
  { n: '01', title: 'Escolha um profissional', desc: 'Filtre por especialidade, idioma e preço.' },
  { n: '02', title: 'Conheça o perfil', desc: 'Veja abordagem, biografia e avaliações.' },
  { n: '03', title: 'Agende um horário', desc: 'Escolha um horário disponível na agenda.' },
  { n: '04', title: 'Converse diretamente', desc: 'Converse com o profissional, sem intermediários.' }
];

const whyChoose = [
  'Atendimento totalmente online',
  'Plataforma especializada em Saúde Mental',
  'Profissionais qualificados',
  'Diversos idiomas',
  'Atendimento internacional',
  'Escolha livre do profissional',
  'Privacidade',
  'Agendamento simples'
];

const categories = [
  'Psicologia',
  'Psiquiatria',
  'Psicanálise',
  'Terapia Integrativa',
  'Terapia Infantil',
  'Terapia de Casal',
  'Neuropsicologia'
];

// Depoimentos ilustrativos — substituir por avaliações reais de pacientes
// assim que a plataforma tiver histórico de uso.
const testimonials = [
  { initials: 'MF', name: 'Mariana F.', text: 'Encontrei uma profissional que fala meu idioma mesmo estando fora do Brasil. Muito mais fácil do que eu esperava.' },
  { initials: 'JP', name: 'João P.', text: 'Gostei de poder escolher pela abordagem e ver a agenda na hora, sem trocar mensagem pra marcar.' },
  { initials: 'LC', name: 'Larissa C.', text: 'O processo foi acolhedor do início ao fim. Me senti segura para escolher com calma.' }
];

const faqs = [
  { q: 'Como funciona?', a: 'Você pesquisa profissionais por especialidade, idioma ou como está se sentindo, escolhe um perfil e agenda diretamente.' },
  { q: 'Como agendar?', a: 'No perfil do profissional, escolha um horário disponível na agenda e confirme sua solicitação.' },
  { q: 'Como entro em contato com o profissional?', a: 'Após o agendamento ser aceito, o profissional combina com você os detalhes do atendimento.' },
  { q: 'Como funciona o atendimento online?', a: 'As sessões acontecem por vídeo, no horário combinado, direto pela plataforma ou por link enviado pelo profissional.' },
  { q: 'Posso escolher o idioma?', a: 'Sim — você pode filtrar profissionais por idioma na busca.' },
  { q: 'Como remarcar uma consulta?', a: 'Entre em contato diretamente com o profissional para reagendar.' }
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
          <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-12 pt-16 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="font-display text-4xl font-semibold leading-tight text-navy dark:text-white md:text-5xl">
                {headline}
              </h1>
              <p className="mt-5 max-w-md text-base text-ink-soft">{subheadline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/profissionais"
                  className="inline-flex items-center gap-2 rounded-full bg-royal px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-royal/25 transition hover:bg-royal-700"
                >
                  Encontrar um Profissional <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#como-funciona"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-100 px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-white dark:border-white/20 dark:text-white"
                >
                  <Play className="h-4 w-4" /> Como Funciona
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                {heroTrust.map((t) => (
                  <span key={t.label} className="flex items-center gap-1.5">
                    <t.icon className="h-4 w-4 text-royal" /> {t.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <img
                src={IMG_HERO}
                alt="Profissional em atendimento online, transmitindo acolhimento"
                className="h-[380px] w-full max-w-md rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg md:-left-10">
                <BadgeCheck className="h-4 w-4 text-royal" />
                <span className="text-xs font-semibold text-navy">Perfil Verificado</span>
              </div>
              <div className="absolute -right-2 bottom-8 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-lg md:-right-6">
                <Globe2 className="h-4 w-4 text-royal" />
                <span className="text-xs font-semibold text-navy">Atendimento internacional</span>
              </div>
            </div>
          </div>

          {/* Busca principal, estilo Airbnb */}
          <div className="mx-auto max-w-5xl px-6 pb-16">
            <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-xl dark:bg-navy-600 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-navy-100 sm:dark:divide-white/10">
              <label className="px-3 py-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Especialidade</span>
                <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                  <option>Qualquer</option>
                  <option>Ansiedade</option>
                  <option>Relacionamentos</option>
                  <option>TDAH</option>
                </select>
              </label>
              <label className="px-3 py-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Idioma</span>
                <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                  <option>Português</option>
                  <option>English</option>
                  <option>Français</option>
                  <option>Italiano</option>
                </select>
              </label>
              <label className="px-3 py-1">
                <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Público</span>
                <select className="mt-1 w-full bg-transparent text-sm text-navy outline-none dark:text-white">
                  <option>Adulto</option>
                  <option>Adolescente</option>
                  <option>Criança</option>
                  <option>Casal</option>
                </select>
              </label>
              <div className="flex items-center px-3 py-1">
                <Link
                  href="/profissionais"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-royal py-2.5 text-sm font-semibold text-white hover:bg-royal-700"
                >
                  Encontrar Profissional
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Como você está se sentindo hoje? */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
              Como você está se sentindo hoje?
            </h2>
            <p className="mt-3 text-ink-soft">
              Não precisa saber o nome técnico da especialidade — comece pelo que você está
              sentindo, e a busca já filtra os profissionais mais indicados.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {feelings.map((f) => (
              <Link
                key={f.label}
                href={`/profissionais?tema=${encodeURIComponent(f.label)}`}
                className="group flex flex-col items-center gap-3 rounded-xl2 border border-navy-100 bg-white p-6 text-center transition hover:-translate-y-0.5 hover:border-royal/40 hover:shadow-md dark:border-white/10 dark:bg-navy-600"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-royal/10 transition group-hover:bg-royal/15">
                  <f.icon className="h-6 w-6 text-royal" />
                </span>
                <span className="text-sm font-medium text-navy dark:text-white">{f.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
              Encontrar ajuda nunca foi tão simples
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="rounded-xl2 bg-white p-6 text-center shadow-sm dark:bg-navy-600">
                  <p className="font-display text-3xl font-bold text-royal/20">{s.n}</p>
                  <h3 className="mt-2 font-display text-base font-medium text-navy dark:text-white">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profissionais em destaque */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-white">Profissionais em Destaque</h2>
            <Link href="/profissionais" className="text-sm font-medium text-royal">Ver todos →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group overflow-hidden rounded-xl2 border border-navy-100 bg-white transition hover:shadow-lg dark:border-white/10 dark:bg-navy-600">
                <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-royal/15 to-royal/5">
                  <span className="font-display text-4xl font-semibold text-royal">DR</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-display font-medium text-navy dark:text-white">Nome do profissional</p>
                    <span className="rounded-full bg-royal/10 px-2 py-0.5 text-xs font-medium text-royal">⭐ Premium</span>
                  </div>
                  <p className="text-sm text-ink-soft">Psicóloga clínica · Ansiedade</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600">
                    <BadgeCheck className="h-3.5 w-3.5" /> Perfil Verificado
                  </p>
                  <Link href="/profissionais/exemplo" className="mt-4 inline-block text-sm font-medium text-royal">
                    Ver Perfil →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Por que escolher a Doutor Connect */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
            <img src={IMG_WHY} alt="Sessão de terapia acolhedora" className="h-[380px] w-full rounded-3xl object-cover shadow-lg" />
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">
                Por que escolher a Doutor Connect?
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span className="mt-0.5 text-royal">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">Categorias</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c}
                href={`/profissionais?categoria=${encodeURIComponent(c)}`}
                className="rounded-xl2 border border-navy-100 bg-white p-5 text-center text-sm font-medium text-navy transition hover:border-royal/40 hover:shadow-md dark:border-white/10 dark:bg-navy-600 dark:text-white"
              >
                {c}
              </Link>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="bg-surface-light py-20 dark:bg-white/5">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">O que dizem os pacientes</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-xl2 bg-white p-6 shadow-sm dark:bg-navy-600">
                  <div className="flex text-royal">★★★★★</div>
                  <p className="mt-3 text-sm text-ink-soft">"{t.text}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-royal/10 text-xs font-semibold text-royal">
                      {t.initials}
                    </span>
                    <span className="text-sm font-medium text-navy dark:text-white">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="font-display text-2xl font-semibold text-navy dark:text-white md:text-3xl">Perguntas frequentes</h2>
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
        </section>

        {/* Chamada final */}
        <section className="bg-navy-900 py-20 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
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
