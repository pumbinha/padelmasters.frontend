import { signOut } from "auth-astro/client";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

type SignOutProps = {
	text: string;
};

const SignOut: React.FC<SignOutProps> = ({ text }) => {
	const handle = () => {
		signOut({ callbackUrl: "/" } as any);
	};

	return (
		<button
			onClick={handle}
			className="flex items-center gap-2 rounded-lg bg-supporting-red-600 px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-supporting-red-800 hover:scale-105 shadow-lg"
		>
			<ArrowRightStartOnRectangleIcon className="h-4 w-4" />
			{text}
		</button>
	);
};

export default SignOut;
