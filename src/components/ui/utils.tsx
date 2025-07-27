import {
	ChampionshipStatus,
	GroupType,
	MatchStatus,
	type GroupMatchResultDto,
} from "@/services/api";
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

export const getMatchStatusClass = (status: MatchStatus | null | undefined) => {
	switch (status) {
		case MatchStatus.Created:
			return "bg-gray-50 text-neutral-600 ring-gray-600/20";
		case MatchStatus.Planned:
			return "bg-orange-50 text-orange-800 ring-gray-600/20 ";
		case MatchStatus.Played:
			return "bg-green-50 text-green-600 ring-gray-600/20";
		case MatchStatus.Cancelled:
			return "bg-red-50 text-red-800 ring-gray-600/20";
		default:
			return "";
	}
};

export const getChampionshipMetricStatusClass = (available: number, total: number) => {
	return available === total ? "text-primary-600" : "text-gray-500";
};

export const getStandingRowClass = (
	groupType: GroupType,
	index: number,
	numberOfFinalists?: number
) => {
	if (groupType === GroupType.League) {
		// Top 4 finalists get the same highlighting
		if (index < (numberOfFinalists || 0)) {
			return `bg-gradient-to-r from-vivid-100 to-vivid-200 border-l-4 border-vivid-500 shadow-sm ${getSelectedItemHoverClass()}`;
		}
		return `bg-white ${getSelectedItemHoverClass()}`;
	}
	return "";
};

export const getSelectedItemHoverClass = () => {
	return "hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700";
};

export const getWinnerLoserSetClass = (
	team: number,
	resultSet: GroupMatchResultDto | null | undefined
) => {
	const loserSet = "whitespace-nowrap px-2 py-4 text-right align-middle text-sm text-neutral-400 ";

	if (!resultSet) return loserSet;

	const winnerSet =
		"whitespace-nowrap px-2 py-4 text-right align-middle text-sm text-primary-400 font-bold";

	if (team === 1 && (resultSet?.ResultTeam1 ?? 0) > (resultSet?.ResultTeam2 ?? 0)) {
		return winnerSet;
	} else if (team === 2 && (resultSet?.ResultTeam2 ?? 0) > (resultSet?.ResultTeam1 ?? 0)) {
		return winnerSet;
	}

	return loserSet;
};

export const getPositionTextClass = (index: number, numberOfFinalists?: number) => {
	if (index < (numberOfFinalists || 0)) {
		return "font-bold text-vivid-700";
	}
	return "text-gray-900";
};

export const getPositionIcon = (index: number) => {
	return "";
};
