import { ChampionshipStatus } from "@/services/api";

export type NavigationLink = {
	group: number;
	links: {
		name: string;
		href: string;
		isActive: boolean;
	}[];
};

export type BreadCrumbProps = {
	name: string;
	href: string;
}[];
