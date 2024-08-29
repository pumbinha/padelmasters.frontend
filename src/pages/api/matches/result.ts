import { getApi, getRequestParams } from "@/services/utils";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const DELETE: APIRoute = async ({ request }) => {
	try {
		const data: { matchId: string } = await request.json();

		if (!data.matchId) {
			return new Response(JSON.stringify({ error: "Failed to process data" }), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}

		const session = await getSession(request);

		const api = getApi();

		const response = await api.api.padelmastersApiDomainEndpointsMatchesDeleteMatchResult(
			data.matchId,
			getRequestParams(session)
		);

		return response;
		return new Response(JSON.stringify("deleted"), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: "Failed to process data" }), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};
