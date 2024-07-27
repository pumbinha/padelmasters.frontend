import type { Session } from "@auth/core/types"
import { Api, type ApiConfig } from "./api"

export const getApi = (): Api<unknown> => {
	const apiConfig: ApiConfig = {
		baseUrl: "https://test.api.padelmasters.net",
	}

	const api = new Api(apiConfig)
	return api
}

export const getRequestParams = (session: Session | null) => {
	return {
		headers: {
			Authorization: `Bearer ${session?.access_token}`, // Explicitly include the bearer token
		},
	}
}

export const getFormattedDate = (date?: string) => {
	if (!date) return ""

	// TODO: what we can do with the locale?
	return new Date(date).toLocaleDateString("en-GB").toString()
}