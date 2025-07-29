import { useState } from "react";
import type { NavigationLink } from "./types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 py-4 sm:max-w-sm shadow-2xl">
					<div className="flex items-center justify-between px-6">
						<a href="/" className="flex items-center gap-3">
							<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 backdrop-blur-sm">
								<span className="text-lg">🎾</span>
							</div>
							<div className="flex flex-col">
								<span className="text-lg font-bold text-white">Padel Masters</span>
								<span className="text-xs text-neutral-300">Championship Management System</span>
							</div>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-4 flow-root">
						<div className="space-y-2 py-4">
							<div className="divide-y divide-gray-500/10">
								{navigationLinks.map((group) => (
									<div key={group.group}>
										<div className="space-y-2 py-4">
											{group.links.map((link) => (
																							<a
												key={link.href}
												href={link.href}
												className={`block cursor-pointer py-3 pl-4 pr-4 text-sm transition-colors duration-200 ${
													link.isActive 
														? "text-white font-medium" 
														: "text-neutral-300 hover:text-white"
												}`}
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
