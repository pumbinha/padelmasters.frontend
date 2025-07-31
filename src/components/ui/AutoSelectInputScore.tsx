import React, { useRef, useState, useEffect } from "react";

export type InputScoreProps = {
	initialValue?: number;
	id: string;
};

const AutoSelectInputScore: React.FC<InputScoreProps> = ({ id, initialValue }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const hiddenInputRef = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState(initialValue || 0);

	// Update hidden input when value changes
	useEffect(() => {
		if (hiddenInputRef.current) {
			hiddenInputRef.current.value = value.toString();
		}
	}, [value]);

	const handleFocusOrClick = () => {
		const inputElement = inputRef.current;
		if (inputElement) {
			inputElement.select();
		}
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value);
		setValue(newValue);
	};

	const increment = () => {
		const newValue = Math.min(value + 1, 15); // Max score of 15
		setValue(newValue);
	};

	const decrement = () => {
		const newValue = Math.max(value - 1, 0);
		setValue(newValue);
	};

	return (
		<div className="flex items-center gap-1">
			{/* Hidden input for form submission */}
			<input type="hidden" name={id} ref={hiddenInputRef} value={value} />

			<button
				type="button"
				onClick={decrement}
				className="flex h-8 w-8 items-center justify-center rounded-l-md bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1"
				disabled={value <= 0}
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
				</svg>
			</button>

			<input
				id={id}
				type="number"
				required
				ref={inputRef}
				min="0"
				max="15"
				value={value}
				className="h-8 w-12 border-0 bg-white text-center text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1"
				onFocus={handleFocusOrClick}
				onClick={handleFocusOrClick}
				onChange={handleChange}
			/>

			<button
				type="button"
				onClick={increment}
				className="flex h-8 w-8 items-center justify-center rounded-r-md bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1"
				disabled={value >= 15}
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
				</svg>
			</button>
		</div>
	);
};

export default AutoSelectInputScore;
