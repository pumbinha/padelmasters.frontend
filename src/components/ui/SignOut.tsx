import { signOut } from "auth-astro/client";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

type SignOutProps = {
	text: string;
};

const SignOut: React.FC<SignOutProps> = ({ text }) => {
	const handle = () => {
		signOut({ callbackUrl: "/" });
	};

	return (
		<button
			onClick={handle}
			className="rounded-md bg-supporting-red-600 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-supporting-red-800"
		>
			<ArrowRightStartOnRectangleIcon className="w-6 h-6 mr-4 inline-block" />
			{text}
		</button>
	);
};

export default SignOut;
