/// <reference types="vite/client" />
declare interface ImportMetaEnv {
	readonly VITE_BASE_API: string
	readonly VITE_SERVER_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
