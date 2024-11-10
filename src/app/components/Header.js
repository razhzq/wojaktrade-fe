import React from 'react';
import Image from 'next/image';

const Header = () => {
	return (
		<div className="flex items-center justify-between py-4 px-4 md:py-2 bg-black">
			{/* LEFT Section: Logo */}
			<div className="flex-1 flex justify-center sm:justify-start">
				<Image src={'/assets/logo.png'} width={100} height={100} alt="logo" />
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
	a;
};

export default Header;
