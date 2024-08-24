import React, { useEffect, useRef } from "react";

export type InputScoreProps = {
	value?: number;
	id: string;
};

const AutoSelectInputScore: React.FC<InputScoreProps> = ({ id, value }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleFocusOrClick = () => {
		const inputElement = inputRef.current;

		if (inputElement) {
			inputElement.select();
		}
	};

	return (
		<input
			id={id}
			name={id}
			type="number"
			required
			ref={inputRef}
			min="0"
			value={value || 0}
			className="h-12 w-12 rounded-md border border-gray-300 text-center text-base focus:outline-none focus:ring-2 focus:ring-primary-400"
			onFocus={handleFocusOrClick}
			onClick={handleFocusOrClick}
		/>
	);
};

export default AutoSelectInputScore;
