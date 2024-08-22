import { CalendarDaysIcon, ChartBarIcon } from "@heroicons/react/20/solid";
import { useState, type FC, type SVGProps } from "react";
import { useStore } from "@nanostores/react";
import { activeTab } from "@/stores/groupsTabsStore";

type TabItem = {
	name: string;
	icon: any;
	current: boolean;
};

export type TabsProps = {
	tabs: TabItem[];
	onTabChange: any;
	children: any;
};
const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange, children }) => {
	const $activeTab = useStore(activeTab);
	console.log($activeTab);

	const handleTabClick = (index: number) => {
		activeTab.set(index);
	};

	return (
		<div className="border-b border-gray-200">
			<div className="tabs">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={`w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium ${index === $activeTab ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
						onClick={() => handleTabClick(index)}
					>
						{/* <tab.icon className="tab-icon" /> */}
						{tab.name}
					</button>
					// <span>{tab.name}</span>
					// <a
					// 	key={tab.name}
					// 	href="#"
					// 	aria-current={tab.current ? "page" : undefined}
					// 	className={`w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium ${tab.current ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`}
					// >
					// 	{/* <tab.icon
					// 		aria-hidden="true"
					// 		className={`${tab.current ? "text-indigo-500" : "text-gray-400 group-hover:text-gray-500"} -ml-0.5 mr-2 h-5 w-5`}
					// 	/> */}
					// 	<span>{tab.name}</span>
					// </a>
				))}
			</div>
		</div>
	);
};

export default Tabs;
