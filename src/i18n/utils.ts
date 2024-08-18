import type { Session } from "@auth/core/types";
import { ui, defaultLang, type SupportedLanguages, TranslationKey } from "./ui";

const getDefaultLang = (session: Session | null): SupportedLanguages => {
	if (session && session.locale && session.locale in ui) {
		return session.locale as SupportedLanguages;
	}
	return defaultLang;
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
