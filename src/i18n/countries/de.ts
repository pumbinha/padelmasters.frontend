export interface Country {
	value: string;
	name: string;
}

export const countries: Country[] = [
	{ value: "", name: "Land auswählen" },
	{ value: "de", name: "Deutschland" },
	{ value: "es", name: "Spanien" },
	{ value: "ro", name: "Rumänien" },
	{ value: "it", name: "Italien" }
];