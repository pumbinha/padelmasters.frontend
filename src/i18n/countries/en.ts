export interface Country {
	value: string;
	name: string;
}

export const countries: Country[] = [
	{ value: "", name: "Select a country" },
	{ value: "de", name: "Germany" },
	{ value: "es", name: "Spain" },
	{ value: "ro", name: "Romania" },
	{ value: "it", name: "Italy" }
];