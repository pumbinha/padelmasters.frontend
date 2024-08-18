import type { Session } from "@auth/core/types";
import {
	Api,
	type ApiConfig,
	type ChampionshipDto,
	type PlayerStandingDto,
	type RequestParams,
} from "@/services/api";
import { verifyAuth } from "@/middleware";

const apiURL = import.meta.env.API_BASE_URL;
const authURL = import.meta.env.KEYCLOAK_ISSUER;

export const getApi = (): Api<unknown> => {
	const apiConfig: ApiConfig = {
		baseUrl: apiURL,
	};

	const api = new Api(apiConfig);
	return api;
};

export const getRequestParams = (session: Session | null): RequestParams => {
	return {
		headers: {
			Authorization: `Bearer ${session?.access_token}`,
		},
	};
};

export const getFormattedDate = (date?: string, session?: Session | null) => {
	if (!date) return "";

	let lang = "en-Gb";

	// forcing to always have 2 digits for day and month
	const options: Intl.DateTimeFormatOptions = {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	};

	if (session && session.locale) {
		lang = session.locale;
	}

	return Intl.DateTimeFormat(lang, options).format(new Date(date));
};

export const isUserLoggedIn = async (session: Session | null) => {
	const validationResult = await verifyAuth(session);
	return validationResult.status === "authorized";
};

export const orderChampionshipDtoByDate = (championships: ChampionshipDto[]): ChampionshipDto[] => {
	return championships.sort((a, b) => {
		return (
			(a.EndDate ? new Date(a.EndDate).getTime() : 0) -
			(b.EndDate ? new Date(b.EndDate).getTime() : 0)
		);
	});
};

export const orderPlayerStandingDtoByPts = (
	playerStandings: PlayerStandingDto[]
): PlayerStandingDto[] => {
	return playerStandings
		.filter((item) => item.Points !== undefined)
		.sort(
			(a, b) =>
				b.Points! - a.Points! ||
				(b.PlayedMatches ?? 0) - (a.PlayedMatches ?? 0) ||
				(a.LostMatches ?? 0) - (a.LostMatches ?? 0)
		);
};
