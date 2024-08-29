import { signIn } from "auth-astro/client";

type SignInComponentProps = {
	children: string;
}

const SignInComponent: React.FC<SignInComponentProps> = ({ children }) => {
	const handleLogin = () => {
		signIn("keycloak", { callbackUrl: "/profile" });
	};

	return (
		<button
			onClick={handleLogin}
			className="rounded-md bg-primary-800 px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary-1000"
		>
			{children}
		</button>
	);
};

export default SignInComponent;
