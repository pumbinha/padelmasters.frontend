export enum TranslationKey {
	SignIn = "acc.signin",
	SignOut = "account.SignOut",
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
	ActionEnroll = "Action.Enroll",
	ActionLeave = "Action.Leave",
	ChampionshipsStatusnull = "Championships.Status.null",
	ChampionshipsStatusundefined = "Championships.Status.undefined",
	ChampionshipsStatusCreated = "Championships.Status.Created",
	ChampionshipsStatusOpen = "Championships.Status.Open",
	ChampionshipsStatusStarted = "Championships.Status.Started",
	ChampionshipsStatusCancelled = "Championships.Status.Cancelled",
	ChampionshipsStatusFinished = "Championships.Status.Finished",

	PlayedMatches = "PlayedMatches",
	PendingMatches = "PendingMatches",
	NumberOfPlayers = "NumberOfPlayers",
	NumberMatches = "NumberMatches",
	StandingsTitle = "Standings.Title",
	StandingsName = "Standings.Name",
	StandingsPlayedShort = "Standings.Played.Short",
	StandingsVictoryShort = "Standings.Victory.Short",
	StandingsLostShort = "Standings.Lose.Short",
	StandingsPointShort = "Standings.Point.Short",
	StandingsPlayedLong = "Standings.Played.Long",
	StandingsVictoryLong = "Standings.Victory.Long",
	StandingsLostLong = "Standings.Lose.Long",
	StandingsPointLong = "Standings.Point.Long",
	Salutation = "Salutation",
	AccounSettings = "AccounSettings",
	GoBackHome = "ActionGoBackHome",
	PageNotFound = "PageNotFound",
	PageNotFoundText = "PageNotFoundText",
	ProfileFirstName = "Profile.FirstName",
	ProfileLastName = "Profile.LastName",
	ProfileSelectALocale = "SelectALocale",
	Cancel = "Cancel",
	Save = "Save",
	ProfileTitleEdit = "Profile.Title.Edit",
	ProfileEmailAddress = "Profile.EmailAddress",
	ProfileUsername = "Profile.Username",
	MatchesTitle = "Matches.Title",
	MatchRestartTitle = "Match.RestartTitle",
	MatchRestartMessage = "Match.RestartMessage",
	Restart = "Restart",
	GroupsTitle = "Groups.Title",
	RulesTitle = "Rules.Title",
	MyChampionships = "MyChampionships",
	NoChampionshipsTitle = "NoChampionshipsTitle",
	NoChampionshipsDescription = "NoChampionshipsDescription",
	FindChampionship = "Find.Championship",
	PlayerChampionships = "Player.Championships",
	PlayerGames = "Player.Games",
	MatchesWon = "MatchesWon",
	RankingTitle = "RankingTitle",
	MatchesLost = "Matches.Lost",
	MatchesPlayed = "Matches.Played",
	WinRate = "WinRate",
	SetsWon = "Sets.Won",
	SetsLost = "Sets.Lost",
	PointsWon = "Points.Won",
	PointsLost = "Points.Lost",
	Set = "Set",
	MatchDate = "Match.Date",
}

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages

export type SupportedLanguages = "en" | "es";
export const defaultLang: SupportedLanguages = "en";

export type Translations = {
	[key in TranslationKey]: string;
};

export type UI = {
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
		[TranslationKey.ActionEnroll]: "Enroll",
		[TranslationKey.ActionLeave]: "Leave",
		[TranslationKey.PlayedMatches]: "Played Matches",
		[TranslationKey.PendingMatches]: "Pending Matches",
		[TranslationKey.NumberOfPlayers]: "Number of Players",
		[TranslationKey.NumberMatches]: "Number Matches",
		[TranslationKey.StandingsTitle]: "Standings",
		[TranslationKey.StandingsName]: "Name",
		[TranslationKey.StandingsPlayedShort]: "P",
		[TranslationKey.StandingsVictoryShort]: "V",
		[TranslationKey.StandingsLostShort]: "L",
		[TranslationKey.StandingsPointShort]: "Pts",
		[TranslationKey.StandingsPlayedLong]: "Played",
		[TranslationKey.StandingsVictoryLong]: "Victory",
		[TranslationKey.StandingsLostLong]: "Lost",
		[TranslationKey.StandingsPointLong]: "Points",
		[TranslationKey.Salutation]: "Welcome",
		[TranslationKey.AccounSettings]: "Settings",
		[TranslationKey.ChampionshipsStatusCreated]: "Created",
		[TranslationKey.ChampionshipsStatusOpen]: "Open",
		[TranslationKey.ChampionshipsStatusStarted]: "Started",
		[TranslationKey.ChampionshipsStatusCancelled]: "Cancelled",
		[TranslationKey.ChampionshipsStatusFinished]: "Finished",
		[TranslationKey.ChampionshipsStatusnull]: "",
		[TranslationKey.ChampionshipsStatusundefined]: "",
		[TranslationKey.SignOut]: "Sign out",
		[TranslationKey.GoBackHome]: "Go back home",
		[TranslationKey.PageNotFound]: "Page not found",
		[TranslationKey.PageNotFoundText]: "Sorry, we couldn’t find the page you’re looking for.",
		[TranslationKey.ProfileFirstName]: "First name",
		[TranslationKey.ProfileLastName]: "Last name",
		[TranslationKey.ProfileSelectALocale]: "Select a locale",
		[TranslationKey.Cancel]: "Cancel",
		[TranslationKey.Save]: "Save",
		[TranslationKey.ProfileTitleEdit]: "Edit Profile",
		[TranslationKey.ProfileEmailAddress]: "Email address",
		[TranslationKey.ProfileUsername]: "Username",
		[TranslationKey.MatchesTitle]: "Matches",
		[TranslationKey.MatchRestartTitle]: "Restart match",
		[TranslationKey.MatchRestartMessage]: "Are you sure you want to restart the match?",
		[TranslationKey.Restart]: "Restart",
		[TranslationKey.GroupsTitle]: "Groups",
		[TranslationKey.RulesTitle]: "Rules",
		[TranslationKey.MyChampionships]: "My Championships",
		[TranslationKey.NoChampionshipsTitle]: "No championships",
		[TranslationKey.NoChampionshipsDescription]: "Enroll in a championship now!",
		[TranslationKey.FindChampionship]: "Find championship",
		[TranslationKey.PlayerChampionships]: "Championships",
		[TranslationKey.PlayerGames]: "Games",
		[TranslationKey.MatchesWon]: "Matches Won",
		[TranslationKey.RankingTitle]: "Ranking",
		[TranslationKey.MatchesLost]: "Matches Lost",
		[TranslationKey.MatchesPlayed]: "Matches Played",
		[TranslationKey.WinRate]: "Win Rate",
		[TranslationKey.SetsWon]: "Sets Won",
		[TranslationKey.SetsLost]: "Sets Lost",
		[TranslationKey.PointsWon]: "Points Won",
		[TranslationKey.PointsLost]: "Points Lost",
		[TranslationKey.Set]: "Set",
		[TranslationKey.MatchDate]: "Match Date",
	},
	es: {
		[TranslationKey.SignIn]: "Entrar",
		[TranslationKey.Home]: "Casa",
		[TranslationKey.About]: "Acerca de",
		[TranslationKey.NavChampionships]: "Campeonatos",
		[TranslationKey.NavProfile]: "Perfil",
		[TranslationKey.NavMatches]: "Partidos",
		[TranslationKey.WelcomeTitle]: "Bienvenido a Padel Master",
		[TranslationKey.SignInTitle]: "Entrar en tu cuenta",
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
		[TranslationKey.ActionEnroll]: "Apuntarse",
		[TranslationKey.ActionLeave]: "Salir",
		[TranslationKey.PlayedMatches]: "Partidos jugados",
		[TranslationKey.PendingMatches]: "Partidos pendientes",
		[TranslationKey.NumberOfPlayers]: "Número de jugadores",
		[TranslationKey.NumberMatches]: "Número de partidos",
		[TranslationKey.StandingsTitle]: "Clasificación",
		[TranslationKey.StandingsName]: "Nombre",
		[TranslationKey.StandingsPlayedShort]: "J",
		[TranslationKey.StandingsVictoryShort]: "V",
		[TranslationKey.StandingsLostShort]: "P",
		[TranslationKey.StandingsPointShort]: "Pts",
		[TranslationKey.StandingsLostLong]: "Perdidos",
		[TranslationKey.StandingsPlayedLong]: "Juagados",
		[TranslationKey.StandingsVictoryLong]: "Victorias",
		[TranslationKey.StandingsPointLong]: "Puntos",
		[TranslationKey.Salutation]: "Bienvenido",
		[TranslationKey.AccounSettings]: "Configuración",
		[TranslationKey.ChampionshipsStatusCreated]: "Creado",
		[TranslationKey.ChampionshipsStatusOpen]: "Abierto",
		[TranslationKey.ChampionshipsStatusStarted]: "Empezado",
		[TranslationKey.ChampionshipsStatusCancelled]: "Cancelado",
		[TranslationKey.ChampionshipsStatusFinished]: "Terminado",
		[TranslationKey.ChampionshipsStatusnull]: "",
		[TranslationKey.ChampionshipsStatusundefined]: "",
		[TranslationKey.SignOut]: "Salir",
		[TranslationKey.GoBackHome]: "Ir a la página principal",
		[TranslationKey.PageNotFound]: "Página no encontrada",
		[TranslationKey.PageNotFoundText]: "Lo sentimos, no pudimos encontrar la página que buscas.",
		[TranslationKey.ProfileFirstName]: "Nombre",
		[TranslationKey.ProfileLastName]: "Apellidos",
		[TranslationKey.ProfileSelectALocale]: "Idioma",
		[TranslationKey.Cancel]: "Cancelar",
		[TranslationKey.Save]: "Guardar",
		[TranslationKey.ProfileTitleEdit]: "Editar Perfil",
		[TranslationKey.ProfileEmailAddress]: "Correo electrónico",
		[TranslationKey.ProfileUsername]: "Nombre de usuario",
		[TranslationKey.MatchesTitle]: "Partidos",
		[TranslationKey.MatchRestartTitle]: "Reiniciar partido",
		[TranslationKey.MatchRestartMessage]: "estás seguro de que quieres reiniciar el partido?",
		[TranslationKey.Restart]: "Reiniciar",
		[TranslationKey.GroupsTitle]: "Grupos",
		[TranslationKey.RulesTitle]: "Reglas",
		[TranslationKey.MyChampionships]: "Mis Campeonatos",
		[TranslationKey.NoChampionshipsTitle]: "No tienes campeonatos",
		[TranslationKey.NoChampionshipsDescription]: "Apúntate a un campeonato ahora!",
		[TranslationKey.FindChampionship]: "Buscar campeonato",
		[TranslationKey.PlayerChampionships]: "Campeonatos",
		[TranslationKey.PlayerGames]: "Partidos",
		[TranslationKey.MatchesWon]: "Partidos Ganados",
		[TranslationKey.RankingTitle]: "Clasificación",
		[TranslationKey.MatchesLost]: "Partidos Perdidos",
		[TranslationKey.MatchesPlayed]: "Partidos Jugados",
		[TranslationKey.WinRate]: "% Victorias",
		[TranslationKey.SetsWon]: "Sets Ganados",
		[TranslationKey.SetsLost]: "Sets Perdidos",
		[TranslationKey.PointsWon]: "Puntos Ganados",
		[TranslationKey.PointsLost]: " Puntos Perdidos",
		[TranslationKey.Set]: "Set",
		[TranslationKey.MatchDate]: "Fecha del partido",
	},
};
