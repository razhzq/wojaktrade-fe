import React from 'react';

const Header = () => {
	return (
		<div className="flex items-center justify-between p-4 bg-black">
			{/* LEFT Section: Logo */}
			<div className="flex-1 flex justify-center sm:justify-start">
				<button className="px-4 py-2 font-poppins text-xl font-black text-white rounded">Tradely</button>
			</div>

			{/* RIGHT Section: Buttons - Hidden on Small Screens */}
			<div className="hidden sm:flex space-x-4">
				<button className="px-4 py-2 text-black font-poppins font-semibold bg-limeGreen rounded hover:bg-blue-700">
					Reward
				</button>
				<button className="px-4 py-2 text-white font-poppins font-semibold bg-purpleMain rounded-3xl hover:bg-purple-800">
					Connect
				</button>
			</div>
		</div>
	);
};

export default Header;
