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
	ErrorLoadingData = "Error.Loading.Data",
	EnrollSuccessful = "Enroll.Successful",
	LeaveSuccessful = "Leave.Successful",
	WelcomeDescription = "Welcome.Description",
	ProfileUpdatedSuccessfully = "ProfileUpdatedSuccessfully",
	MatchStatusPlanned = "Match.Status.Planned",
	MatchStatusPlayed = "Match.Status.Played",
	MatchStatusCancelled = "Match.Status.Cancelled",
	MatchUpdated = "Match.Updated",
	MatchRestartSuccess = "Match.RestartSuccess",
	MatchRestartError = "Match.RestartError",
}

export type SupportedLanguages = "en" | "es" | "de";
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
		[TranslationKey.PointsWon]: "Games Won",
		[TranslationKey.PointsLost]: "Games Lost",
		[TranslationKey.Set]: "Set",
		[TranslationKey.MatchDate]: "Match Date",
		[TranslationKey.ErrorLoadingData]: "Oops! Something went wrong. Please try again later.",
		[TranslationKey.EnrollSuccessful]: "Enroll successful!",
		[TranslationKey.LeaveSuccessful]: "Leave successful!",
		[TranslationKey.WelcomeDescription]:
			"Get ready to elevate your game. Join our Padel league where you can compete, connect, and conquer against other passionate players. Whether you're aiming for the top spot or just looking to enjoy the sport, our league offers a thrilling experience for all levels. Are you ready to take on the challenge?",
		[TranslationKey.ProfileUpdatedSuccessfully]: "Profile updated successfully!",
		[TranslationKey.MatchStatusPlanned]: "Planned",
		[TranslationKey.MatchStatusPlayed]: "Played",
		[TranslationKey.MatchStatusCancelled]: "Cancelled",
		[TranslationKey.MatchUpdated]: "Match updated successfully!",
		[TranslationKey.MatchRestartSuccess]: "Match restarted successfully!",
		[TranslationKey.MatchRestartError]: "Sorry! There was an error restarting the match",
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
		[TranslationKey.StandingsPlayedLong]: "Jugados",
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
		[TranslationKey.PointsWon]: "Juegos Ganados",
		[TranslationKey.PointsLost]: " Juegos Perdidos",
		[TranslationKey.Set]: "Set",
		[TranslationKey.MatchDate]: "Fecha del partido",
		[TranslationKey.ErrorLoadingData]:
			"Oops! Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
		[TranslationKey.EnrollSuccessful]: "Apuntado con éxito!",
		[TranslationKey.LeaveSuccessful]: "Abandonado con éxito!",
		[TranslationKey.WelcomeDescription]:
			"Prepárate para llevar tu juego al siguiente nivel. Únete a nuestra liga de pádel, donde podrás competir, conectar y conquistar contra otros  apasionados jugadores. Ya sea que busques alcanzar la cima o simplemente disfrutar del deporte, nuestra liga ofrece una experiencia emocionante para todos los niveles. ¿Estás listo para este desafío?",
		[TranslationKey.ProfileUpdatedSuccessfully]: "Perfil actualizado con éxito!",
		[TranslationKey.MatchStatusPlanned]: "Planificado",
		[TranslationKey.MatchStatusPlayed]: "Jugado",
		[TranslationKey.MatchStatusCancelled]: "Cancelado",
		[TranslationKey.MatchUpdated]: "Partido actualizado con éxito!",
		[TranslationKey.MatchRestartSuccess]: "Partido reiniciado con éxito!",
		[TranslationKey.MatchRestartError]: "Lo sentimos! Hubo un error al reiniciar el partido",
	},
	de: {
		[TranslationKey.SignIn]: "Anmelden",
		[TranslationKey.Home]: "Startseite",
		[TranslationKey.About]: "Über uns",
		[TranslationKey.NavChampionships]: "Meisterschaften",
		[TranslationKey.NavProfile]: "Profil",
		[TranslationKey.NavMatches]: "Spiele",
		[TranslationKey.WelcomeTitle]: "Willkommen bei Padel Master",
		[TranslationKey.SignInTitle]: "Melde dich bei deinem Konto an",
		[TranslationKey.WelcomeJoin]: "Trete der Liga bei",
		[TranslationKey.ChampionshipsTitle]: "Meisterschaften",
		[TranslationKey.ChampionshipsName]: "Name",
		[TranslationKey.ChampionshipsDescription]: "Beschreibung",
		[TranslationKey.ChampionshipsStartDate]: "Anfangsdatum",
		[TranslationKey.ChampionshipsEndDate]: "Enddatum",
		[TranslationKey.ChampionshipsStatus]: "Status",
		[TranslationKey.ChampionshipsType]: "Typ",
		[TranslationKey.ChampionshipsAdd]: "Meisterschaft hinzufügen",
		[TranslationKey.ChampionshipsNoChampionshipsDescription]:
			"Wie wäre es mit der Erstellung einer?",
		[TranslationKey.ChampionshipsNoChampionshipstitle]: "Es gibt keine erstellten Meisterschaften!",
		[TranslationKey.ActionEnroll]: "Einschreiben",
		[TranslationKey.ActionLeave]: "Verlassen",
		[TranslationKey.PlayedMatches]: "Gespielte Spiele",
		[TranslationKey.PendingMatches]: "Ausstehende Spiele",
		[TranslationKey.NumberOfPlayers]: "Anzahl der Spieler",
		[TranslationKey.NumberMatches]: "Anzahl der Spiele",
		[TranslationKey.StandingsTitle]: "Tabellenstand",
		[TranslationKey.StandingsName]: "Name",
		[TranslationKey.StandingsPlayedShort]: "Sp.",
		[TranslationKey.StandingsVictoryShort]: "S",
		[TranslationKey.StandingsLostShort]: "N",
		[TranslationKey.StandingsPointShort]: "Pkt.",
		[TranslationKey.StandingsPlayedLong]: "Spiele",
		[TranslationKey.StandingsVictoryLong]: "Siege",
		[TranslationKey.StandingsLostLong]: "Niederlagen",
		[TranslationKey.StandingsPointLong]: "Punkte",
		[TranslationKey.Salutation]: "Willkommen",
		[TranslationKey.AccounSettings]: "Einstellungen",
		[TranslationKey.ChampionshipsStatusCreated]: "Erstellt",
		[TranslationKey.ChampionshipsStatusOpen]: "Offen",
		[TranslationKey.ChampionshipsStatusStarted]: "Gestartet",
		[TranslationKey.ChampionshipsStatusCancelled]: "Abgesagt",
		[TranslationKey.ChampionshipsStatusFinished]: "Beendet",
		[TranslationKey.ChampionshipsStatusnull]: "",
		[TranslationKey.ChampionshipsStatusundefined]: "",
		[TranslationKey.SignOut]: "Abmelden",
		[TranslationKey.GoBackHome]: "Zurück zur Startseite",
		[TranslationKey.PageNotFound]: "Seite nicht gefunden",
		[TranslationKey.PageNotFoundText]: "Entschuldige, wir konnten die gesuchte Seite nicht finden.",
		[TranslationKey.ProfileFirstName]: "Vorname",
		[TranslationKey.ProfileLastName]: "Name",
		[TranslationKey.ProfileSelectALocale]: "Sprache auswählen",
		[TranslationKey.Cancel]: "Abbrechen",
		[TranslationKey.Save]: "Speichern",
		[TranslationKey.ProfileTitleEdit]: "Profil bearbeiten",
		[TranslationKey.ProfileEmailAddress]: "Email Adresse",
		[TranslationKey.ProfileUsername]: "Benutzername",
		[TranslationKey.MatchesTitle]: "Spiele",
		[TranslationKey.MatchRestartTitle]: "Spiel zurücksetzen",
		[TranslationKey.MatchRestartMessage]:
			"Bist du sicher, dass du das Spiel zurücksetzten möchtest?",
		[TranslationKey.Restart]: "Zurücksetzen",
		[TranslationKey.GroupsTitle]: "Gruppen",
		[TranslationKey.RulesTitle]: "Regeln",
		[TranslationKey.MyChampionships]: "Meine Meisterschaften",
		[TranslationKey.NoChampionshipsTitle]: "Keine Meisterschaften",
		[TranslationKey.NoChampionshipsDescription]: "Trette jetzt einem Meisterschaft bei!",
		[TranslationKey.FindChampionship]: "Meisterschaft finden",
		[TranslationKey.PlayerChampionships]: "Meisterschaften",
		[TranslationKey.PlayerGames]: "Spiele",
		[TranslationKey.MatchesWon]: "Gewonnene Spiele",
		[TranslationKey.RankingTitle]: "Ranking",
		[TranslationKey.MatchesLost]: "Verlorene Spiele",
		[TranslationKey.MatchesPlayed]: "Gespielte Spiele",
		[TranslationKey.WinRate]: "Siegesrate",
		[TranslationKey.SetsWon]: "Gewonnene Sätze",
		[TranslationKey.SetsLost]: "Verlorene Sätze",
		[TranslationKey.PointsWon]: "Gewonnene Spiele",
		[TranslationKey.PointsLost]: "Verlorene Spiele",
		[TranslationKey.Set]: "Satz",
		[TranslationKey.MatchDate]: "Datum des Spiels",
		[TranslationKey.ErrorLoadingData]:
			"Ups, da ist etwas schief gelaufen. Bitte versuche es später noch einmal.",
		[TranslationKey.EnrollSuccessful]: "Erfolgreich eingeschrieben!",
		[TranslationKey.LeaveSuccessful]: "Erfolgreich aufgegeben!",
		[TranslationKey.WelcomeDescription]:
			"Bereit, dein Spiel auf das nächste Level zu bringen? Trete unserer  Padel-Liga bei und messe dich mit anderen leidenschaftlichen Spielern. Ob du die Spitze anvisierst oder einfach nur den Sport genießen möchtest – unsere Liga bietet ein aufregendes Erlebnis für jedes Niveau. Bist du bereit, die Herausforderung anzunehmen?",
		[TranslationKey.ProfileUpdatedSuccessfully]: "Profil erfolgreich aktualisiert!",
		[TranslationKey.MatchStatusPlanned]: "Geplant",
		[TranslationKey.MatchStatusPlayed]: "Gespielt",
		[TranslationKey.MatchStatusCancelled]: "Abgesagt",
		[TranslationKey.MatchUpdated]: "Spiel erfolgreich aktualisiert!",
		[TranslationKey.MatchRestartSuccess]: "Spiel erfolgreich zurückgesetzt!",
		[TranslationKey.MatchRestartError]:
			"Entschuldigung! Beim Zurücksetzen des Spiels ist ein Fehler aufgetreten",
	},
};
