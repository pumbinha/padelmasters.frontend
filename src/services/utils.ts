import type { Session } from "@auth/core/types";
import {
	Api,
	type ApiConfig,
	type ChampionshipDto,
	type GroupDto,
	type GroupMatchDto,
	type GroupMatchSearchDto,
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

export const getFormattedDate = (date?: string | null | undefined, session?: Session | null) => {
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

export const getFormattedDateForInput = (date?: string | null | undefined) => {
	if (!date) return "";

	return new Date(date).toISOString().split("T")[0];
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

export const orderGroupMatchSearchDtoByDate = (matches: GroupMatchDto[]): GroupMatchDto[] => {
	return matches.sort((a, b) => {
		return (a.Date ? new Date(a.Date).getTime() : 0) - (b.Date ? new Date(b.Date).getTime() : 0);
	});
};

export const orderGroupsByName = (groups: GroupDto[]): GroupDto[] => {
	return groups.sort((a, b) => (a.Name ?? "").localeCompare(b.Name ?? ""));
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

export async function parseFormData<T extends object>(request: Request): Promise<Partial<T>> {
	const formData = await request.formData();

	const data: Partial<T> = {};

	formData.forEach((value, key) => {
		// Directly assign values to the data object
		(data as any)[key as keyof T] = value.toString();
	});

	return data;
}

export type ChampionshipAndGroupDto = Pick<GroupMatchSearchDto, "Championship" | "Group">;

export const distinctGroupMatchSearchDtos = (
	dtos: GroupMatchSearchDto[]
): GroupMatchSearchDto[] => {
	const result: ChampionshipAndGroupDto[] = [];

	dtos.forEach((dto) => {
		const { Championship, Group } = dto;

		// Check if the current combination of Championship and Group is already in the result array
		const exists = result.some(
			(item) => item.Championship?.Id === Championship?.Id && item.Group?.Id === Group?.Id
		);

		// If it doesn't exist, add it to the result array
		if (!exists) {
			result.push({ Championship, Group });
		}
	});

	return result;
};

// this type is useful for filtering at player level
export type GroupMatchSearchDtoWithPosition = GroupMatchSearchDto &
	PlayerStandingDto & { Position: number };
