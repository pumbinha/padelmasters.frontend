import { UserPlusIcon } from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";

type EnrollProps = {
	championshipId: string;
	text: string;
};

const Enroll: React.FC<EnrollProps> = ({ championshipId, text }) => {
	const handleClick = async () => {
		const data = { championshipId };

		const response = await fetch("/api/championships/enroll", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			window.location.href = `/championships/${championshipId}`;
		} else {
			console.error("Failed to process data");
		}
	};

	return (
		<button
			onClick={handleClick}
			className="text-m w-full rounded-md bg-primary-800 px-6 py-2 text-primary-foreground transition-colors hover:bg-primary-1000"
		>
			<UserPlusIcon className="mr-2 inline-block h-6 w-6" />
			{text}
		</button>
	);
};

export default Enroll;
