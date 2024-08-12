import type { APIRoute } from "astro";
import { getSession } from "auth-astro/server";

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();

		const session = await getSession(request);
		console.log(session?.user);
		console.log(data);
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
