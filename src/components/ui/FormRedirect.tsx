import { useEffect } from "react";

interface FormRedirectProps {
	url: string;
	successMessage: string;
}

/**
 * Component that redirects to a specified URL after the form has been submitted successfully
 */
export default function FormRedirect({ url, successMessage }: FormRedirectProps) {
	useEffect(() => {
		// Only redirect if there's a success message
		if (successMessage) {
			// Give a small delay to allow the success message to be seen
			const timeout = setTimeout(() => {
				window.location.href = url;
			}, 1500);

			return () => clearTimeout(timeout);
		}
	}, [url, successMessage]);

	return null;
}
