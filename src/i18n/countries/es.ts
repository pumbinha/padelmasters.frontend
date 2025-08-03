export interface Country {
	value: string;
	name: string;
}

export const countries: Country[] = [
	{ value: "", name: "Seleccionar país" },
	{ value: "de", name: "Alemania" },
	{ value: "es", name: "España" },
	{ value: "ro", name: "Rumania" },
	{ value: "it", name: "Italia" }
];