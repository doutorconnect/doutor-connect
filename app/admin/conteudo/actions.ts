'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function saveContent(formData: FormData) {
  const key = String(formData.get('key'));
  const locale = String(formData.get('locale'));
  const value = String(formData.get('value'));

  await prisma.siteContent.upsert({
    where: { key_locale: { key, locale } },
    create: { key, locale, value },
    update: { value }
  });

  revalidatePath('/');
  revalidatePath('/admin/conteudo');
}
