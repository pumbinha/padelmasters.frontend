import Keycloak from "@auth/core/providers/keycloak"
import * as jose from "jose"
import { defineConfig } from "auth-astro"

export default defineConfig({
	providers: [
		Keycloak({
			clientId: import.meta.env.KEYCLOAK_ID,
			clientSecret: import.meta.env.KEYCLOAK_SECRET,
			issuer: import.meta.env.KEYCLOAK_ISSUER,
		}),
	],
	callbacks: {
		// todo: implement refresh token https://authjs.dev/guides/refresh-token-rotation
		jwt({ token, user, account }) {
			if (user) {
				token.id = user.id
				token.access_token = account.access_token

				// default to 1hr from now
				const now = new Date()
				const oneHourDate = new Date(now.getTime() + 3600000)
				let token_expires = oneHourDate.toISOString()

				if (account.expires_at) {
					token_expires = account.expires_at * 1000
					const expiresDate = new Date(account.expires_at * 1000) // Convert to milliseconds

					token_expires = expiresDate.toISOString()
				}
				token.access_token_expires = token_expires
			}
			return token
		},
		async session({ session, token }) {
			session.user.id = token.id
			session.access_token = token.access_token
			session.encrypted_access_token = token.access_token

			const jwtToken = jose.decodeJwt(token.access_token)

			session.roles = jwtToken.realm_access.roles
			session.access_token_expires = token.access_token_expires

			return { ...session }
		},
	},
})
