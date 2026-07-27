import { SiteHeader } from '@/components/site-header';

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-md flex-col px-6 py-20">
        <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Entrar</h1>
        <form className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-navy dark:text-white">E-mail</label>
            <input
              type="email"
              className="mt-1 w-full rounded-lg border border-navy-100 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 dark:border-white/10 dark:bg-navy-600"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-navy dark:text-white">Senha</label>
            <input
              type="password"
              className="mt-1 w-full rounded-lg border border-navy-100 px-4 py-2.5 text-sm focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 dark:border-white/10 dark:bg-navy-600"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white hover:bg-royal-700"
          >
            Entrar
          </button>
        </form>
      </main>
    </>
  );
}
