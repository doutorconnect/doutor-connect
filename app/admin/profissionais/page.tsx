import { prisma } from '@/lib/prisma';
import { approveProfessional, rejectProfessional, toggleVerified } from './actions';

export default async function AdminProfissionaisPage() {
  const professionals = await prisma.professional.findMany({
    include: { user: true, subscription: { include: { plan: true } } },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">
        Profissionais e aprovações
      </h1>

      <div className="mt-6 overflow-hidden rounded-xl2 border border-navy-100 dark:border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy-50 text-ink-soft dark:bg-white/5">
            <tr>
              <th className="px-4 py-3 font-medium">Nome</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Plano</th>
              <th className="px-4 py-3 font-medium">Verificado</th>
              <th className="px-4 py-3 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((p) => (
              <tr key={p.id} className="border-t border-navy-100 dark:border-white/10">
                <td className="px-4 py-3">
                  <p className="font-medium text-navy dark:text-white">{p.displayName ?? p.user.name}</p>
                  <p className="text-xs text-ink-soft">{p.user.email}</p>
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={p.profileStatus} />
                </td>
                <td className="px-4 py-3 text-ink-soft">
                  {p.subscription?.plan.tier ?? '—'} {p.subscription?.status === 'ACTIVE' ? '' : '(inativo)'}
                </td>
                <td className="px-4 py-3">
                  <form action={toggleVerified.bind(null, p.id, !p.isVerified)}>
                    <button
                      type="submit"
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        p.isVerified ? 'bg-emerald-100 text-emerald-700' : 'bg-navy-50 text-ink-soft dark:bg-white/10'
                      }`}
                    >
                      {p.isVerified ? '✔ Verificado' : 'Marcar como verificado'}
                    </button>
                  </form>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <form action={approveProfessional.bind(null, p.id)}>
                      <button className="rounded-full bg-royal px-3 py-1 text-xs font-semibold text-white hover:bg-royal-700">
                        Aprovar
                      </button>
                    </form>
                    <form action={rejectProfessional.bind(null, p.id)}>
                      <button className="rounded-full border border-navy-100 px-3 py-1 text-xs font-medium text-ink-soft hover:border-red-300 hover:text-red-600 dark:border-white/10">
                        Recusar
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {professionals.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-ink-soft">
                  Nenhum profissional cadastrado ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    DRAFT: 'bg-navy-50 text-ink-soft dark:bg-white/10',
    IN_REVIEW: 'bg-amber-100 text-amber-700',
    PUBLISHED: 'bg-emerald-100 text-emerald-700',
    REJECTED: 'bg-red-100 text-red-700'
  };
  const label: Record<string, string> = {
    DRAFT: 'Rascunho',
    IN_REVIEW: 'Em análise',
    PUBLISHED: 'Publicado',
    REJECTED: 'Recusado'
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${map[status]}`}>{label[status]}</span>;
}
