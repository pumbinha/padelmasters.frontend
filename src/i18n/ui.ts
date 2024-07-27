export enum TranslationKey {
	SignIn = "acc.signin",
	Home = "nav.home",
	About = "nav.about",
	Twitter = "nav.twitter",
	WelcomeTitle = "Welcome.Title",
	SignInTitle = "SignIn.Title",
	WelcomeJoin = "Welcome.Join",
	ChampionshipsTitle = "Championships.Title",
	ChampionshipsName = "ChampionshipsName",
	ChampionshipsDescription = "Championships.Description",
	ChampionshipsStartDate = "Championships.StartDate",
	ChampionshipsEndDate = "Championships.EndDate",
	ChampionshipsStatus = "Championships.Status",
	ChampionshipsType = "Championships.Type",
	ChampionshipsAdd = "Championships.Add",
	ChampionshipsNoChampionshipsDescription = "Championships.NoChampionshipsDescription",
	ChampionshipsNoChampionshipstitle = "Championships.NoChampionshipstitle",
}

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages
export type SupportedLanguages = "en" // | "es"
export const defaultLang: SupportedLanguages = "en"

type Translations = {
	[key in TranslationKey]: string
}

type UI = {
	[lang in SupportedLanguages]: Translations
}

export const ui: UI = {
	en: {
		[TranslationKey.SignIn]: "Sign in",
		[TranslationKey.Home]: "Home",
		[TranslationKey.About]: "About",
		[TranslationKey.Twitter]: "Twitter",
		[TranslationKey.WelcomeTitle]: "Welcome to Padel Master",
		[TranslationKey.SignInTitle]: "Sign in to your account",
		[TranslationKey.WelcomeJoin]: "Join the League",
		[TranslationKey.ChampionshipsTitle]: "Championships",
		[TranslationKey.ChampionshipsName]: "Name",
		[TranslationKey.ChampionshipsDescription]: "Description",
		[TranslationKey.ChampionshipsStartDate]: "Start Date",
		[TranslationKey.ChampionshipsEndDate]: "End Date",
		[TranslationKey.ChampionshipsStatus]: "Status",
		[TranslationKey.ChampionshipsType]: "Type",
		[TranslationKey.ChampionshipsAdd]: "Add championship",
		[TranslationKey.ChampionshipsNoChampionshipsDescription]: "How about creating one?",
		[TranslationKey.ChampionshipsNoChampionshipstitle]: "There are no championships created!",
	},
}
