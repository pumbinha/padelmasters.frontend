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
			}
			return token
		},
		session({ session, token }) {
			session.user.id = token.id
			session.access_token = token.access_token

			const jwtToken = jose.decodeJwt(token.access_token)

			session.roles = jwtToken.realm_access.roles
			return { ...session }
		},
	},
})
