import type { Session } from "@auth/core/types"
import { PUBLIC_ROUTES, TOKEN } from "./constant"
import { defineMiddleware } from "astro/middleware"
import { getSession } from "auth-astro/server"
import { errors } from "jose"

export const verifyAuth = async (session?: Session | null) => {
	if (!session) {
		return {
			status: "unauthorized",
			msg: "NO session available",
		} as const
	}

	if (!session.access_token) {
		return {
			status: "unauthorized",
			msg: "NO token available",
		} as const
	}

	try {
		const now = new Date().toISOString()

		if (session.access_token_expires < now) {
			return {
				status: "unauthorized",
				msg: "Session has expired",
			} as const
		}

		return {
			status: "authorized",
			msg: "successfully authenticated",
		} as const
	} catch (err) {
		if (err instanceof errors.JOSEError) {
			return { status: "error", msg: err.message } as const
		}

		console.debug(err)
		return { status: "error", msg: "could not validate auth token" } as const
	}
}

export const onRequest = defineMiddleware(async (context, next) => {
	// no check for public routes
	if (PUBLIC_ROUTES.includes(context.url.pathname)) {
		return next()
	}

	const session = await getSession(context.request)

	const validationResult = await verifyAuth(session)

	switch (validationResult.status) {
		case "authorized":
			return next()

		case "error":
		case "unauthorized":
			if (context.url.pathname.startsWith("/api/")) {
				return new Response(JSON.stringify({ message: "Unauthorized" }), {
					status: 401,
				})
			}
			// otherwise, redirect to the root page for the user to login
			else {
				return Response.redirect(new URL("/", context.url))
			}

		default:
			return Response.redirect(new URL("/", context.url))
	}
})
