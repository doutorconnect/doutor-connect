'use server';

import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

async function requirePremiumProfessional() {
  const session = await getServerSession(authOptions);
  if (!session?.user) throw new Error('Não autenticado.');

  const professional = await prisma.professional.findUnique({
    where: { userId: (session.user as any).id },
    include: { subscription: { include: { plan: true } } }
  });
  if (!professional) throw new Error('Perfil profissional não encontrado.');

  const isPremiumActive =
    professional.subscription?.status === 'ACTIVE' && professional.subscription.plan.tier === 'PREMIUM';

  if (!isPremiumActive) {
    throw new Error('O prontuário digital é exclusivo do plano Premium ativo.');
  }

  return professional.id;
}

export async function createClinicalNote(formData: FormData) {
  const professionalId = await requirePremiumProfessional();
  const patientLabel = String(formData.get('patientLabel'));
  const content = String(formData.get('content'));

  // A IA (quando configurada com uma chave da API) apenas organiza/resume
  // a evolução clínica escrita pelo profissional — nunca gera diagnóstico.
  // A chamada real fica em lib/ai-clinical-summary.ts, aqui é só o registro.
  await prisma.clinicalNote.create({
    data: { professionalId, patientLabel, content }
  });

  revalidatePath('/dashboard/ferramentas/prontuario');
}
