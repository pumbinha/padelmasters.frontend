// translationStore.ts
import type { SupportedLanguages, Translations, TranslationKey } from "@/i18n/ui";
import { atom, map } from "nanostores";

interface TranslationState {
	language: SupportedLanguages;
	translations: Translations;
}

// Create an atom to hold the current translation state
export const translationStore = atom<TranslationState | null>(null);

// Function to initialize the store with language and translations
export const initializeTranslations = (
	language: SupportedLanguages,
	translations: Translations
) => {
	translationStore.set({ language, translations });
};

// Function to retrieve a translation by key
export const getTranslation = (key: TranslationKey): string => {
	const state = translationStore.get();
	if (state && key in state.translations) {
		return state.translations[key];
	}
	return key; // Fallback to the key itself if translation is missing
};

export const isCartOpen = atom(false);

export const profile = map({
	name: "anonymous",
});
