import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { addAvailabilitySlot, removeAvailabilitySlot } from './actions';

const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

export default async function AgendaPage() {
  const session = await getServerSession(authOptions);
  const professional = session?.user
    ? await prisma.professional.findUnique({
        where: { userId: (session.user as any).id },
        include: { availability: { orderBy: [{ weekday: 'asc' }, { startTime: 'asc' }] } }
      })
    : null;

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-2xl font-semibold text-navy dark:text-white">Agenda</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Defina os dias e horários em que você aceita agendamentos. O fuso horário usado é o
        cadastrado no seu perfil.
      </p>

      <form action={addAvailabilitySlot} className="mt-6 flex flex-wrap items-end gap-3 rounded-xl2 border border-navy-100 p-4 dark:border-white/10">
        <div>
          <label className="text-xs font-medium text-ink-soft">Dia da semana</label>
          <select name="weekday" className="mt-1 block rounded-lg border border-navy-100 px-3 py-2 text-sm dark:border-white/10 dark:bg-navy-600">
            {weekdays.map((d, i) => (
              <option key={d} value={i}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-medium text-ink-soft">Início</label>
          <input type="time" name="startTime" required className="mt-1 block rounded-lg border border-navy-100 px-3 py-2 text-sm dark:border-white/10 dark:bg-navy-600" />
        </div>
        <div>
          <label className="text-xs font-medium text-ink-soft">Fim</label>
          <input type="time" name="endTime" required className="mt-1 block rounded-lg border border-navy-100 px-3 py-2 text-sm dark:border-white/10 dark:bg-navy-600" />
        </div>
        <button className="rounded-full bg-royal px-5 py-2 text-sm font-semibold text-white hover:bg-royal-700">
          Adicionar horário
        </button>
      </form>

      <ul className="mt-6 space-y-2">
        {professional?.availability.map((slot) => (
          <li key={slot.id} className="flex items-center justify-between rounded-lg border border-navy-100 px-4 py-3 text-sm dark:border-white/10">
            <span className="text-navy dark:text-white">
              {weekdays[slot.weekday]} · {slot.startTime} às {slot.endTime}
            </span>
            <form action={removeAvailabilitySlot.bind(null, slot.id)}>
              <button className="text-xs font-medium text-red-600 hover:underline">Remover</button>
            </form>
          </li>
        ))}
        {(!professional || professional.availability.length === 0) && (
          <p className="text-sm text-ink-soft">Nenhum horário cadastrado ainda.</p>
        )}
      </ul>
    </div>
  );
}
