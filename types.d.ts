import { type Session as DefaultSession } from "@auth/core/types"

declare module "@auth/core/types" {
	interface Session {
		roles: string[]
		access_token: string // & DefaultSession["user"]
	}
}
