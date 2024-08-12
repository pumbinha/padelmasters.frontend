import type { Session } from "@auth/core/types";
import { Api, type ApiConfig } from "./api";
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

export const getRequestParams = (session: Session | null) => {
	return {
		headers: {
			Authorization: `Bearer ${session?.access_token}`, // Explicitly include the bearer token
		},
	};
};

export const getFormattedDate = (date?: string) => {
	if (!date) return "";

	// TODO: what we can do with the locale?
	return new Date(date).toLocaleDateString("en-GB").toString();
};

export const isUserLoggedIn = async (session: Session | null) => {
	const validationResult = await verifyAuth(session);
	return validationResult.status === "authorized";
};
