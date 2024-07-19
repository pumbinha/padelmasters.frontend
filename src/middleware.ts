import { PUBLIC_ROUTES, TOKEN } from "./constant"
import { defineMiddleware } from "astro/middleware"
import { getSession } from "auth-astro/server"
import { errors, jwtVerify } from "jose"

const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET_KEY)

// const verifyAuth = async (token?: string) => {
// 	if (!token) {
// 		return {
// 			status: "unauthorized",
// 			msg: "please pass a request token",
// 		} as const
// 	}

// 	try {
// 		const jwtVerifyResult = await jwtVerify(token, secret)

// 		return {
// 			status: "authorized",
// 			payload: jwtVerifyResult.payload,
// 			msg: "successfully verified auth token",
// 		} as const
// 	} catch (err) {
// 		if (err instanceof errors.JOSEError) {
// 			return { status: "error", msg: err.message } as const
// 		}

// 		console.debug(err)
// 		return { status: "error", msg: "could not validate auth token" } as const
// 	}
// }

export const onRequest = defineMiddleware(async (context, next) => {
	// Ignore auth validation for public routes
	if (PUBLIC_ROUTES.includes(context.url.pathname)) {
		return next()
	}

	const session = getSession(context.request)

	if (!session)
		if (context.url.pathname.startsWith("/api/")) {
			return new Response(JSON.stringify({ message: "Unauthorized" }), {
				status: 401,
			})
		} else {
			{
				return Response.redirect(new URL("/", context.url))
			}
		}

	// some restricted areas?

	// all good
	return next()
})
