export const languages = ['en', 'uk', 'ru', 'es'] as const;
export type Language = (typeof languages)[number];

export const defaultLng: Language = 'en';

export const fallbackLng = 'en';
