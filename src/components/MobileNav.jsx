import { useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import {
	ArrowPathIcon,
	ChevronRightIcon,
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon,
} from "@heroicons/react/20/solid"

// console.log(useState)
// export default function MobileNav() {
// 	const [count, setCount] = useState(0)

// 	return (
// 		<div>
// 			<p>Count: {count}</p>
// 			<button onClick={() => setCount(count + 1)}>Increment</button>
// 		</div>
// 	)
// }

export default function MobileNav() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const navigation = [
		{ name: "Championships", href: "/championships" },
		{ name: "Matches", href: "/matches" },
	]

	return (
		<div>
			<div className="flex lg:hidden">
				<button
					type="button"
					onClick={() => setMobileMenuOpen(true)}
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span className="sr-only">Open main menu</span>
					<Bars3Icon aria-hidden="true" className="h-6 w-6" />
				</button>
			</div>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
				<div className="fixed inset-0 z-50" />
				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="/" className="-m-1.5 p-1.5">
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
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									Profile
								</a>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</div>
	)
}
