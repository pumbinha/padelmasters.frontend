import { useState } from "react";
import type { NavigationLink } from "./ui/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
	ArrowPathIcon,
	ChevronRightIcon,
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid";

type NavigationProps = {
	navigationLinks: NavigationLink[];
};

const MobileNav: React.FC<NavigationProps> = ({ navigationLinks }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div>
			<div className="flex lg:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="text-white-100 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" className="h-6 w-6" />
				</button>
			</div>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between px-6">
						<a href="/" className="logo text-2xl font-bold text-primary-800">
							Padel Masters
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-4 flow-root">
						<div className="space-y-2 py-4">
							<div className="divide-y divide-gray-500/10">
								{navigationLinks.map((group, index) => (
									<div key={group.group}>
										<div className="space-y-2 py-4">
											{group.links.map((link) => (
												<a
													key={link.href}
													href={link.href}
													className={`block cursor-pointer border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 ${link.isActive ? "border-vivid-700 bg-vivid-200 text-vivid-700" : ""}`}
												>
													{link.name}
												</a>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</div>
	);
};

export default MobileNav;
