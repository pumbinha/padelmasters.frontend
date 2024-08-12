import { ui, defaultLang, type SupportedLanguages, TranslationKey } from "./ui";

export function getLangFromUrl(url: URL): SupportedLanguages {
	// const [, lang] = url.pathname.split("/")
	// if (lang !== undefined && lang in ui) return lang as SupportedLanguages
	return defaultLang;
}

export function useTranslations(url: URL) {
	const lang = getLangFromUrl(url);
	return function t(key: TranslationKey): string {
		return ui[lang][key] || ui[defaultLang][key];
	};
}
