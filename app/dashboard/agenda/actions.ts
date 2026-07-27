'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

async function currentProfessionalId() {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error('Não autenticado.');
  const professional = await prisma.professional.findUnique({
    where: { userId: (session.user as any).id }
  });
  if (!professional) throw new Error('Perfil profissional não encontrado.');
  return professional.id;
}

export async function addAvailabilitySlot(formData: FormData) {
  const professionalId = await currentProfessionalId();
  const weekday = Number(formData.get('weekday'));
  const startTime = String(formData.get('startTime'));
  const endTime = String(formData.get('endTime'));

  await prisma.availabilitySlot.create({
    data: { professionalId, weekday, startTime, endTime }
  });

  revalidatePath('/dashboard/agenda');
}

export async function removeAvailabilitySlot(slotId: string) {
  await prisma.availabilitySlot.delete({ where: { id: slotId } });
  revalidatePath('/dashboard/agenda');
}
