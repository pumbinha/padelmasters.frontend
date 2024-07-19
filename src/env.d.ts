/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly KEYCLOAK_ID: string
	readonly KEYCLOAK_SECRET: string
	readonly KEYCLOAK_ISSUER: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
