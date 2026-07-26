import { getRequestConfig } from 'next-intl/server';

// Idiomas suportados. O administrador escolhe o idioma padrão no painel;
// pt é o padrão de fábrica conforme o briefing do produto.
export const locales = ['pt', 'en', 'es', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'pt';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
