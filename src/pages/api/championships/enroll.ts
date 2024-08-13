import { getApi, getRequestParams } from "@/services/utils";
import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request }) => {
	try {
		const data: { championshipId: string } = await request.json();

		if (!data.championshipId) {
			return new Response(JSON.stringify({ error: "Failed to process data" }), {
				status: 500,
				headers: {
					"Content-Type": "application/json",
				},
			});
		}

		const session = await getSession(request);

		const api = getApi();

		await api.api.padelmastersApiDomainEndpointsChampionshipsEnrollChampionship(
			data.championshipId,
			{},
			getRequestParams(session)
		);
		return new Response(JSON.stringify("yaaas"), {
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
