import { UserMinusIcon } from "@heroicons/react/24/outline";
import { toast, ToastContainer } from "react-toastify";
type LeaveProps = {
	championshipId: string;
	text: string;
};

const Leave: React.FC<LeaveProps> = ({ championshipId, text }) => {
	const handleClick = async () => {
		const data = { championshipId };

		const response = await fetch("/api/championships/leave", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const message = await response.json();

			toast(message, {
				type: "success",
				onClose: () => (window.location.href = `/championships/${championshipId}`),
			});
			//window.location.href = `/championships/${championshipId}`;
		} else {
			console.error("Failed to process data");
			toast("Oops! Something went wrong. Please try again later.", {
				type: "error",
			});
		}
	};

	return (
		<button
			onClick={handleClick}
			className="text-m w-full rounded-md bg-supporting-red-500 px-6 py-2 text-primary-foreground transition-colors hover:bg-supporting-red-700"
		>
			<UserMinusIcon className="mr-2 inline-block h-6 w-6" />
			{text}
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
		</button>
	);
};

export default Leave;
