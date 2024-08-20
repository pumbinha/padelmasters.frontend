import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { TranslationKey } from "@/i18n/ui";
import { getTranslation, isCartOpen, translationStore } from "@/stores/translationStore";

type ProfileEditProps = {};

const ProfileEdit: React.FC<ProfileEditProps> = ({}) => {
	const iCartOpen = useStore(isCartOpen);

	console.log("isCartOpen", isCartOpen);

	const handleOnSubmit = (event: any) => {
		event.preventDefault();
		// console.log("Form submitted");
		isCartOpen.set(!iCartOpen);
	};

	return (
		<div>
			<div className="space-y-12">
				<div className="border-b border-gray-900/10 pb-12">
					<h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Use a permanent address where you can receive mail.
						{getTranslation(TranslationKey.About)}
					</p>
					<p>{`iCartOpen: ${iCartOpen}`}</p>
					<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								First name
							</label>
							<div className="mt-2">
								<input
									id="first-name"
									name="first-name"
									type="text"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Last name
							</label>
							<div className="mt-2">
								<input
									id="last-name"
									name="last-name"
									type="text"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label htmlFor="locale" className="block text-sm font-medium leading-6 text-gray-900">
								Select a locale
							</label>
							<div className="mt-2">
								<select
									id="locale"
									name="locale"
									autoComplete="locale-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6"
								>
									<option>EN</option>
									<option>ES</option>
									<option>DE</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-end gap-x-6">
				<button type="button" className="text-sm font-semibold leading-6 text-neutral-800">
					Cancel
				</button>
				<button
					onClick={handleOnSubmit}
					className="rounded-md bg-primary-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default ProfileEdit;
