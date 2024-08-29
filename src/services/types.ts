export type APIError = {
	error: {
		StatusCode: number;
		Message: string;
		Errors: { GeneralErrors: string[] };
	};
};

export const isAPIError = (error: any): error is APIError => {
	return (
		typeof error === "object" &&
		error !== null &&
		"StatusCode" in error.error &&
		"Message" in error.error &&
		"Errors" in error.error &&
		Array.isArray(error.error.Errors.GeneralErrors)
	);
};
