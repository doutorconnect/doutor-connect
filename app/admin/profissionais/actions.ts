'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function approveProfessional(professionalId: string) {
  await prisma.professional.update({
    where: { id: professionalId },
    data: { profileStatus: 'PUBLISHED' }
  });
  revalidatePath('/admin/profissionais');
}

export async function rejectProfessional(professionalId: string) {
  await prisma.professional.update({
    where: { id: professionalId },
    data: { profileStatus: 'REJECTED' }
  });
  revalidatePath('/admin/profissionais');
}

// Selo "✔ Perfil Verificado" — concedido manualmente pelo admin após
// conferir o registro profissional. Independente do plano (Básico ou
// Premium podem ter esse selo).
export async function toggleVerified(professionalId: string, verified: boolean) {
  await prisma.professional.update({
    where: { id: professionalId },
    data: { isVerified: verified }
  });
  revalidatePath('/admin/profissionais');
}
