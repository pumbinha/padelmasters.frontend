"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import {
	ArrowPathIcon,
	ExclamationTriangleIcon,
	NoSymbolIcon,
	TrashIcon,
	XCircleIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";

type PopupProps = {
	title: string;
	text: string;
	textActionButton: string;
	textCancelButton: string;
	matchId: string;
	url: string;
};
const Popup: React.FC<PopupProps> = ({
	title,
	text,
	textActionButton,
	textCancelButton,
	matchId,
	url,
}) => {
	const [open, setOpen] = useState(false);

	const handleClick = async () => {
		console.log("handleClick");
		const data = { matchId };

		const response = await fetch("/api/matches/result", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			window.location.href = url;
		} else {
			console.error("Failed to process data");
		}

		setOpen(false);
	};
	const showPopup = () => {
		console.log("showPopup");
		setOpen(true);
	};

	return (
		<>
			<button type="button" onClick={showPopup}>
				<ArrowUturnLeftIcon className="h-4 w-4" />
			</button>
			<Dialog open={open} onClose={setOpen} className="relative z-10">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
				/>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
						>
							<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
								>
									<span className="sr-only">Close</span>
									<XMarkIcon aria-hidden="true" className="h-6 w-6" />
								</button>
							</div>
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
									<ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
								</div>
								<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
										{title}
									</DialogTitle>
									<div className="mt-2">
										<p className="text-sm text-gray-500">{text}</p>
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									onClick={handleClick}
									className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
								>
									{textActionButton}
								</button>
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
								>
									{textCancelButton}
								</button>
							</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default Popup;