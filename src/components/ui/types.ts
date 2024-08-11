export type NavigationLink = {
	group: number
	links: {
		name: string
		href: string
		isActive: boolean
	}[]
}

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
	}))
}
