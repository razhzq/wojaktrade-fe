import React, { useState } from 'react';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';
import { cryptoData } from '../utils/constants';

const CoinModal = ({ isOpen, closeModal, handleSelectCoin }) => {
	const [searchQuery, setSearchQuery] = useState('');

	// Filter crypto coins based on search query
	const filteredCoins = cryptoData.filter(
		(coin) =>
			coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			coin.label.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const renderBody = () => {
		return (
			<div className="max-w-xl mx-auto p-4 font-poppins">
				{/* Search Box */}

				<div className="flex justify-between w-full pb-4">
					<p className="font-medium">Select a token</p>
					<IoCloseSharp onClick={closeModal} className="h-6 w-6 cursor-pointer" />
				</div>
				<div className="mb-4 relative">
					{/* Icon inside the input */}
					<IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

					{/* Search input */}
					<input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full pl-10 pr-4 py-2 bg-searchBg text-white rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-500"
						placeholder="Search tokens"
					/>
				</div>

				{/* Crypto List */}
				<div className="max-h-96 overflow-y-auto">
					<ul className="space-y-4 scrollable-modal">
						{filteredCoins.map((coin) => (
							<li
								onClick={() => handleSelectCoin(coin)}
								key={coin.id}
								className="flex items-center space-x-4 rounded-lg hover:bg-gray-600 cursor-pointer"
							>
								{/* Round Image on the Left */}
								<img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full border border-gray-700" />

								{/* Name and Label */}
								<div className="flex flex-col">
									<span className="font-semibold text-white">{coin.name}</span>
									<span className="text-sm text-gray-400">{coin.label}</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	};

	return (
		<div>
			{/* Modal */}
			{isOpen && (
				<div
					className="fixed top-0 right-0 left-0 z-50 w-full px-4 md:px-0 h-full bg-black bg-opacity-50 overflow-y-auto flex justify-center items-center"
					onClick={closeModal}
				>
					<div
						className="relative p-2 w-full max-w-md max-h-full rounded-2xl shadow bg-modalBg border border-gray-800"
						onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
					>
						{/* Modal content */}
						<div className="relative rounded-lg shadow">
							{/* Modal header */}
							{renderBody()}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CoinModal;
