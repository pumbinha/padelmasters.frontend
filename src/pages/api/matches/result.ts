import { getApi, getRequestParams } from "@/services/utils";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request }) => {
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

		// const api = getApi();

		// await api.api.padelmastersApiDomainEndpointsMatchesCreateChampionship(
		// 	data.matchId,
		// 	{},
		// 	getRequestParams(session)
		// );

		return new Response(JSON.stringify("success"), {
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

export const Delete: APIRoute = async ({ request }) => {
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

		// const api = getApi();

		// await api.api.padelmastersApiDomainEndpointsMatchesCreateChampionship(
		// 	data.matchId,
		// 	{},
		// 	getRequestParams(session)
		// );

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
