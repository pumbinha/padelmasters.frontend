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

/**
 * Custom error class for authentication failures
 */
export class AuthenticationError extends Error {
	constructor(message: string = "Authentication failed - token expired") {
		super(message);
		this.name = "AuthenticationError";
	}
}

/**
 * Redirects to home page when authentication fails
 * Only works on client side
 */
export const redirectToHome = () => {
	if (typeof window !== 'undefined') {
		console.warn("Token expired, redirecting to home page");
		window.location.href = "/";
	}
};

/**
 * Enhanced fetch wrapper that automatically handles 401 errors
 * - On client: redirects to home page
 * - On server: throws AuthenticationError for .astro files to handle
 */
export const fetchWithAuth = async (
	input: RequestInfo | URL,
	init?: RequestInit
): Promise<Response> => {
	try {
		const response = await fetch(input, init);
		
		// Check for 401 error
		if (response.status === 401) {
			if (typeof window !== 'undefined') {
				// Client side: redirect immediately
				redirectToHome();
				throw new AuthenticationError("Authentication failed - redirecting to home");
			} else {
				// Server side: throw special error for .astro files to handle
				throw new AuthenticationError("Authentication failed - server side redirect needed");
			}
		}
		
		return response;
	} catch (error: any) {
		// Handle 401 errors in catch block as well
		if (error?.status === 401 || error?.error?.status === 401) {
			if (typeof window !== 'undefined') {
				redirectToHome();
				throw new AuthenticationError("Authentication failed - redirecting to home");
			} else {
				throw new AuthenticationError("Authentication failed - server side redirect needed");
			}
		}
		throw error;
	}
};

export const getApi = (): Api<unknown> => {
	const apiConfig: ApiConfig = {
		baseUrl: apiURL,
		customFetch: fetchWithAuth,
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

/**
 * Helper function for .astro files to handle API calls with automatic redirect on auth failure
 * Usage in .astro files:
 * const result = await handleApiCallInAstro(() => api.someMethod(params));
 * if (result.error) return result.error; // This will be Astro.redirect("/") if auth failed
 */
export const handleApiCallInAstro = async <T>(
	apiCall: () => Promise<T>,
	astroRedirect: (url: string) => Response
): Promise<{ data?: T; error?: Response }> => {
	try {
		const data = await apiCall();
		return { data };
	} catch (e) {
		if (e instanceof AuthenticationError) {
			console.warn("Authentication failed in server-side rendering, redirecting to home");
			return { error: astroRedirect("/") };
		}
		throw e;
	}
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

	// Sort results by championship start date in descending order (newest first)
	return result.sort((a, b) => {
		const startDateA = a.Championship?.StartDate ? new Date(a.Championship.StartDate).getTime() : 0;
		const startDateB = b.Championship?.StartDate ? new Date(b.Championship.StartDate).getTime() : 0;
		return startDateB - startDateA;
	});
};

// this type is useful for filtering at player level
export type GroupMatchSearchDtoWithPosition = GroupMatchSearchDto &
	PlayerStandingDto & { Position: number };
