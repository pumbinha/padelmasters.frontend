/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly KEYCLOAK_ID: string
	readonly KEYCLOAK_SECRET: string
	readonly KEYCLOAK_ISSUER: string
	readonly API_BASE_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
