'use client';
import React, { useState, useEffect } from 'react';

const Calculator = () => {
	const [inputValue, setInputValue] = useState(0);
	const [convertValue, setConvertValue] = useState(0);
	const [inputCurrency, setInputCurrency] = useState('ETH');
	const [convertCurrency, setConvertCurrency] = useState('SOL');

	useEffect(() => {
		// Only convert if inputValue is a valid number
		if (!isNaN(inputValue) && inputValue !== '') {
			const converted = parseFloat(inputValue) * 0.283; // Convert and keep 5 decimal places
			setConvertValue(converted); // Update the converted value
		} else {
			setConvertValue(null); // Reset if input is invalid
		}
	}, [inputValue]);

	const handleChange = (event) => {
		const value = event.target.value;

		// Ensure the input only allows positive numbers (including zero)
		if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
			setInputValue(value); // Update the input value if valid
		}
	};

	const renderCard = (send = true) => {
		const receiverText = send ? 'To' : 'From';

		return (
			<div className="flex justify-between bg-customGray rounded-lg p-4 mb-2">
				<div className="w-full">
					<div className="flex justify-between">
						<p className="font-poppins text-sm font-medium pb-2">{receiverText}</p>
						<p className="font-poppins text-sm font-medium pb-2">{send ? inputCurrency : convertCurrency}</p>
					</div>
					{send ? (
						<input
							type="number"
							min="0"
							className="font-poppins text-2xl font-bold mb-2 bg-black text-white rounded-lg py-2 text-center"
							onChange={handleChange}
							value={inputValue}
						/>
					) : (
						<div className="font-poppins text-2xl font-bold mb-2 w-full bg-black text-white rounded-lg p-2 text-center">
							<p>{convertValue}</p>
						</div>
					)}
					<p className="font-poppins text-sm font-medium pb-2">$39,498.20</p>
				</div>
			</div>
		);
	};
	return (
		<div className="w-80">
			{renderCard()}
			{renderCard(false)}
			<button className="w-full mt-2 p-3 text-white text-xl font-poppins font-bold bg-purpleMain hover:bg-purple-800 rounded-xl">
				Swap
			</button>
		</div>
	);
};

export default Calculator;
