import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastProps = {
	message: string;
	type: "success" | "error" | "info" | "warning";
	urlRedirect?: string;
};
const Toast: React.FC<ToastProps> = ({ message, type, urlRedirect }) => {
	useEffect(() => {
		if (message) {
			if (urlRedirect) {
				toast(message, {
					type,
					autoClose: 750,
					onClose: () => (window.location.href = urlRedirect),
				});
			} else {
				toast(message, { type });
			}
		}
	}, [message, type]);

	return (
		<ToastContainer
			position="top-center"
			autoClose={5000}
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
	);
};

export default Toast;
