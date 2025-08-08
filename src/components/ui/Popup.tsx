"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";
import { ClockIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
// Removed fetchWithAuth import to avoid cookie module conflicts
// import { fetchWithAuth, AuthenticationError } from "@/services/utils";

type PopupProps = {
	matchAction: string;
	title: string;
	text: string;
	textActionButton: string;
	textCancelButton: string;
	matchId: string;
	url: string;
	successMessage: string;
	errorMessage: string;
};

const Popup: React.FC<PopupProps> = ({
	matchAction,
	title,
	text,
	textActionButton,
	textCancelButton,
	matchId,
	url,
	successMessage,
	errorMessage,
}) => {
	const [open, setOpen] = useState(false);

	const handleClick = async () => {
		const data = { matchId };

		let urlAPI = "/api/matches/result";
		let method = "DELETE";

		if (matchAction === "Unplan") {
			urlAPI = "/api/matches/result";
			method = "PATCH";
		}

		try {
			const response = await fetch(urlAPI, {
				method: method,
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			// Handle 401 errors by redirecting to home page
			if (response.status === 401) {
				window.location.href = "/";
				return;
			}

			if (response.ok) {
				toast(successMessage, {
					type: "success",
					autoClose: 750,
					onClose: () => (window.location.href = url),
				});
			} else {
				console.error("Failed to process data");
				toast(errorMessage, {
					type: "error",
					autoClose: 5000,
				});
			}
		} catch (error: any) {
			console.error("Failed to process data", error);
			toast(errorMessage, {
				type: "error",
				autoClose: 5000,
			});
		}

		setOpen(false);
	};

	const showPopup = () => {
		setOpen(true);
	};

	return (
		<>
			<button
				type="button"
				onClick={showPopup}
				className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30"
			>
				{matchAction === "Unplan" ? (
					<ClockIcon className="h-3.5 w-3.5" />
				) : (
					<ArrowPathIcon className="h-3.5 w-3.5" />
				)}
				<span className="hidden sm:inline">{matchAction === "Unplan" ? "Unplan" : "Restart"}</span>
			</button>
			<ToastContainer
				position="top-center"
				autoClose={750}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				draggablePercent={60}
			/>
			<Dialog open={open} onClose={setOpen} className="relative z-50">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
				/>

				<div className="fixed inset-0 z-50 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-4 pb-4 pt-5 text-left shadow-2xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
						>
							<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-white hover:bg-white/20 hover:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 p-1"
								>
									<span className="sr-only">Close</span>
									<XMarkIcon aria-hidden="true" className="h-5 w-5" />
								</button>
							</div>
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-500/20 backdrop-blur-sm border border-red-400/30 sm:mx-0 sm:h-10 sm:w-10">
									<ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-400" />
								</div>
								<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
									<DialogTitle as="h3" className="text-base font-semibold leading-6 text-white">
										{title}
									</DialogTitle>
									<div className="mt-2">
										<p className="text-sm text-white/80">{text}</p>
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
								<button
									type="button"
									onClick={handleClick}
									className="inline-flex w-full justify-center rounded-lg bg-red-500/80 backdrop-blur-sm border border-red-400/30 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-red-500 hover:border-red-400/50 hover:scale-105 transition-all duration-200 sm:w-auto"
								>
									{textActionButton}
								</button>
								<button
									type="button"
									onClick={() => setOpen(false)}
									className="mt-3 inline-flex w-full justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 shadow-lg hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-200 sm:mt-0 sm:w-auto"
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
