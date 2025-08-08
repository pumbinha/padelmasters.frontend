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
		const newValue = Math.min(value + 1, 7); // Max score of 7
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
				className="flex h-8 w-8 items-center justify-center rounded-l-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
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
				max="7"
				value={value}
				className="h-8 w-12 border-0 bg-white/30 backdrop-blur-sm text-center text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-white/50 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]"
				onFocus={handleFocusOrClick}
				onClick={handleFocusOrClick}
				onChange={handleChange}
			/>

			<button
				type="button"
				onClick={increment}
				className="flex h-8 w-8 items-center justify-center rounded-r-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30 disabled:opacity-50"
				disabled={value >= 7}
			>
				<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
				</svg>
			</button>
		</div>
	);
};

export default AutoSelectInputScore;
