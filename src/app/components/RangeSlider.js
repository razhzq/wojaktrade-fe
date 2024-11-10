import { useState } from 'react';

const RangeSlider = ({ min = 0, max = 100 }) => {
	const [value, setValue] = useState(min);
	const [isDragging, setIsDragging] = useState(false); // Track dragging state

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleMouseDown = () => {
		setIsDragging(true); // Show label when dragging starts
	};

	const handleMouseUp = () => {
		setIsDragging(false); // Hide label when dragging stops
	};

	return (
		<div className="flex w-full max-w-md items-center justify-center">
			<div className="flex justify-center items-center gap-2 w-full max-w-xl px-4 relative">
				{/* Slider */}
				<span>{min}</span>
				<input
					type="range"
					min={min}
					max={max}
					value={value}
					onChange={handleChange}
					onMouseDown={handleMouseDown} // Trigger when mouse starts dragging
					onMouseUp={handleMouseUp} // Trigger when mouse stops dragging
					onMouseLeave={handleMouseUp} // Trigger when mouse leaves the slider
					className="w-full h-2 bg-gray-300 rounded-full cursor-pointer"
				/>

				{/* Label on top of the slider */}
				<div
					className={`absolute top-[-30px] left-0 right-0 text-center transition-opacity duration-300 ${
						isDragging ? 'opacity-100' : 'opacity-0'
					}`}
					style={{
						left: `calc(${((value - min) / (max - min)) * 100}% - 20px)`,
					}}
				>
					<span className="bg-purpleMain text-white px-2 py-1 rounded-md">{value}</span>
				</div>
				<span>{max}</span>
			</div>
		</div>
	);
};

export default RangeSlider;
