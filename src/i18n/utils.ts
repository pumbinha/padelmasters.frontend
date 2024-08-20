import type { Session } from "@auth/core/types";
import { ui, defaultLang, type SupportedLanguages, TranslationKey } from "./ui";

export const getDefaultLang = (session: Session | null): SupportedLanguages => {
	const isSupportedLanguage = (locale: string): locale is SupportedLanguages => {
		return locale in ui;
	};

	if (session && session.locale && isSupportedLanguage(session.locale)) {
		return session.locale;
	}

	return defaultLang; // This should be a constant of type `SupportedLanguages`, e.g., 'en'
};

export const useTranslations = (session: Session | null) => {
	const lang = getDefaultLang(session);

	return function t(key: TranslationKey | string): string {
		// If the key is found in the current language, return it
		if (key in ui[lang]) {
			return ui[lang][key as TranslationKey];
		}

		// If the key is not found, try to fallback to the default language
		if (key in ui[defaultLang]) {
			return ui[defaultLang][key as TranslationKey];
		}

		// If the key isn't found in either language, return the key itself as a fallback
		return key;
	};
};
