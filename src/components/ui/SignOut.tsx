import { signOut } from "auth-astro/client";

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
			className="rounded-md bg-primary-800 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-1000"
		>
			{text}
		</button>
	);
};

export default SignOut;
