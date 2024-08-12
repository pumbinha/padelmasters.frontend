export enum TranslationKey {
	SignIn = "acc.signin",
	Home = "nav.home",
	About = "nav.about",
	NavProfile = "Nav.Profile",
	NavMatches = "Nav.Matches",
	NavChampionships = "Nav.Championships",
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
export type SupportedLanguages = "en" | "es";
export const defaultLang: SupportedLanguages = "en";

type Translations = {
	[key in TranslationKey]: string;
};

type UI = {
	[lang in SupportedLanguages]: Translations;
};

export const ui: UI = {
	en: {
		[TranslationKey.SignIn]: "Sign in",
		[TranslationKey.Home]: "Home",
		[TranslationKey.About]: "About",
		[TranslationKey.NavChampionships]: "Championships",
		[TranslationKey.NavProfile]: "Profile",
		[TranslationKey.NavMatches]: "Matches",
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
	es: {
		[TranslationKey.SignIn]: "Entrar",
		[TranslationKey.Home]: "Casa",
		[TranslationKey.About]: "Acerca de",
		[TranslationKey.NavChampionships]: "Campeonatos",
		[TranslationKey.NavProfile]: "Perfil",
		[TranslationKey.NavMatches]: "Partidos",
		[TranslationKey.WelcomeTitle]: "Bienvenido a Padel Master",
		[TranslationKey.SignInTitle]: "Entrar",
		[TranslationKey.WelcomeJoin]: "Apúntate a la Liga",
		[TranslationKey.ChampionshipsTitle]: "Campeonatos",
		[TranslationKey.ChampionshipsName]: "Nombre",
		[TranslationKey.ChampionshipsDescription]: "Descripción",
		[TranslationKey.ChampionshipsStartDate]: "Fecha de inicio",
		[TranslationKey.ChampionshipsEndDate]: "Fecha de fin",
		[TranslationKey.ChampionshipsStatus]: "Estado",
		[TranslationKey.ChampionshipsType]: "Tipo",
		[TranslationKey.ChampionshipsAdd]: "Añadir campeonato",
		[TranslationKey.ChampionshipsNoChampionshipsDescription]: "¿Qué tal si creas uno?",
		[TranslationKey.ChampionshipsNoChampionshipstitle]: "¡No hay campeonatos creados!",
	},
};
