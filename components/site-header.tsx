import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/60 bg-white/80 backdrop-blur-md dark:bg-surface-dark/80 dark:border-white/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-navy dark:text-white">
          {/* A logo real vem do painel admin (SiteSettings.logoLightUrl / logoDarkUrl) */}
          <span className="inline-block h-2 w-2 rounded-full bg-royal" />
          Doutor Connect
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft md:flex">
          <Link href="/profissionais" className="hover:text-navy dark:hover:text-white">Profissionais</Link>
          <Link href="/#como-funciona" className="hover:text-navy dark:hover:text-white">Como funciona</Link>
          <Link href="/planos" className="hover:text-navy dark:hover:text-white">Planos</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Alternar tema claro/escuro"
            className="rounded-full border border-navy-100 p-2 text-ink-soft transition hover:border-royal hover:text-royal dark:border-white/15"
          >
            ◐
          </button>
          <Link
            href="/login"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-navy hover:bg-navy-50 dark:text-white dark:hover:bg-white/10 sm:block"
          >
            Entrar
          </Link>
          <Link
            href="/cadastro"
            className="rounded-full bg-royal px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-royal/30 transition hover:bg-royal-700"
          >
            Criar perfil profissional
          </Link>
        </div>
      </div>
    </header>
  );
}
