import { prisma } from '@/lib/prisma';

// Busca um texto editável pelo admin (tabela SiteContent). Se o admin nunca
// editou essa chave, cai no valor padrão (vindo dos arquivos messages/*.json
// ou de um texto passado como fallback).
export async function getContent(key: string, locale: string, fallback: string): Promise<string> {
  const row = await prisma.siteContent.findUnique({
    where: { key_locale: { key, locale } }
  });
  return row?.value ?? fallback;
}

export async function getAllContentForLocale(locale: string) {
  const rows = await prisma.siteContent.findMany({ where: { locale } });
  return Object.fromEntries(rows.map((r) => [r.key, r.value]));
}
