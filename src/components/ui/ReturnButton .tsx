// src/components/ReturnButton.tsx
import React from "react";

interface ReturnButtonProps {
	returnUrl: string;
	text: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ returnUrl, text }) => {
	const handleClick = () => {
		window.location.href = returnUrl;
	};

	return (
		<button
			type="button"
			className="text-sm font-semibold leading-6 text-neutral-800"
			onClick={handleClick}
		>
			{text}
		</button>
	);
};

export default ReturnButton;
