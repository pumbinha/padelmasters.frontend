import { getApi, getRequestParams } from "@/services/utils";
import { getSession } from "auth-astro/server";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
	const session = await getSession(request);
	const url = new URL(request.url);
	const matchId = url.searchParams.get("matchId");

	if (!matchId) {
		return new Response(JSON.stringify({ error: "Match ID is required" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	try {
		const api = getApi();

		// First try to get the match details
		const matchResponse = await api.api.padelmastersApiDomainEndpointsMatchesGetMatch(
			matchId,
			getRequestParams(session)
		);

		if (!matchResponse.ok) {
			return new Response(JSON.stringify({ error: "Failed to get match details" }), {
				status: 404,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Here we'd normally try to find the championship and group IDs
		// For now, we'll return an error as we don't have a direct way to get this info
		// The client component will handle the fallback

		return new Response(
			JSON.stringify({
				error: "Championship and group details not available directly",
				matchId,
			}),
			{
				status: 404,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Error getting match details:", error);

		return new Response(JSON.stringify({ error: "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
};
