import { atom } from "nanostores";

// Create a store to hold the active tab index
export const activeTab = atom<number>(0); // 0 as the initial tab index

// Function to set the active tab index
export function setActiveTabIndex(index: number) {
	activeTab.set(index);
}
