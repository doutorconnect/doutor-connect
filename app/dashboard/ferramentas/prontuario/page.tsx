import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { createClinicalNote } from './actions';

export default async function ProntuarioPage() {
  const session = await getServerSession(authOptions);
  const professional = session?.user
    ? await prisma.professional.findUnique({
        where: { userId: (session.user as any).id },
        include: {
          subscription: { include: { plan: true } },
          clinicalNotes: { orderBy: { createdAt: 'desc' } }
        }
      })
    : null;

  const isPremiumActive =
    professional?.subscription?.status === 'ACTIVE' && professional.subscription.plan.tier === 'PREMIUM';

  if (!isPremiumActive) {
    return (
      <div className="max-w-lg rounded-xl2 border border-navy-100 bg-white p-8 text-center dark:border-white/10 dark:bg-navy-600">
        <p className="font-display text-lg font-semibold text-navy dark:text-white">
          Ferramenta exclusiva do plano Premium
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          O prontuário digital com organização assistida por IA faz parte do plano Premium.
        </p>
        <a
          href="/dashboard/assinatura"
          className="mt-6 inline-block rounded-full bg-royal px-6 py-2.5 text-sm font-semibold text-white hover:bg-royal-700"
        >
          Ver planos
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Prontuário digital</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Registre a evolução clínica de cada paciente. A IA apenas organiza o texto — nunca
        gera diagnóstico.
      </p>

      <form action={createClinicalNote} className="mt-6 space-y-3 rounded-xl2 border border-navy-100 p-5 dark:border-white/10">
        <div>
          <label className="text-xs font-medium text-ink-soft">Referência do paciente</label>
          <input
            name="patientLabel"
            required
            placeholder="ex: Paciente J.S. — sessão nº 4"
            className="mt-1 w-full rounded-lg border border-navy-100 px-3 py-2 text-sm dark:border-white/10 dark:bg-navy-600"
          />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-soft">Evolução clínica</label>
          <textarea
            name="content"
            required
            rows={5}
            className="mt-1 w-full rounded-lg border border-navy-100 px-3 py-2 text-sm dark:border-white/10 dark:bg-navy-600"
          />
        </div>
        <button className="rounded-full bg-royal px-5 py-2 text-sm font-semibold text-white hover:bg-royal-700">
          Salvar registro
        </button>
      </form>

      <ul className="mt-6 space-y-3">
        {professional?.clinicalNotes.map((note) => (
          <li key={note.id} className="rounded-xl2 border border-navy-100 p-4 text-sm dark:border-white/10">
            <p className="font-medium text-navy dark:text-white">{note.patientLabel}</p>
            <p className="mt-1 text-ink-soft">{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
