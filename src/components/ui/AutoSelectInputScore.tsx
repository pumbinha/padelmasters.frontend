import React, { useEffect, useRef, useState } from "react";

export type InputScoreProps = {
	initialValue?: number;
	id: string;
};

const AutoSelectInputScore: React.FC<InputScoreProps> = ({ id, initialValue }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState(initialValue);

	const handleFocusOrClick = () => {
		const inputElement = inputRef.current;

		if (inputElement) {
			inputElement.select();
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(Number(event.target.value)); // Update the state with the new value
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
			onChange={handleChange}
		/>
	);
};

export default AutoSelectInputScore;
