import { ChampionshipStatus } from "@/services/api";
import type { NavigationLink } from "./types";

export const setLinkActive = (
	navLinks: NavigationLink[],
	currentPath: string
): NavigationLink[] => {
	return navLinks.map((group) => ({
		...group,
		links: group.links.map((link) => ({
			...link,
			isActive: link.href === currentPath,
		})),
	}));
};

export const getStatusClass = (status: ChampionshipStatus | null | undefined) => {
	switch (status) {
		case ChampionshipStatus.Created:
			return "bg-gray-200 text-black-800";
		case ChampionshipStatus.Open:
			return "bg-orange-200 text-orange-800";
		case ChampionshipStatus.Started:
			return "bg-green-200 text-green-800";

		case ChampionshipStatus.Cancelled:
			return "bg-red-200 text-red-800";
		case ChampionshipStatus.Finished:
			return "bg-blue-200 text-blue-800";
		default:
			return "";
	}
};

export const getStandingRowClass = (
	groupType: number,
	index: number,
	numberOfFinalists?: number
) => {
	if (groupType === 1) {
		return index < (numberOfFinalists || 0)
			? `bg-supporting-red-100 ${getSelectedItemHoverClass()}`
			: `bg-white ${getSelectedItemHoverClass()}`;
	}
	return "";
};

export const getSelectedItemHoverClass = () => {
	return "hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700";
};
