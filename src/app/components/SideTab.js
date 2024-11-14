'use client';
import React, { useState } from 'react';
import Image from 'next/image';
const SideTab = () => {
	// State to track the active tab, default is "Home"
	const [activeTab, setActiveTab] = useState('Home');

	// Handle the tab click to update the active tab
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	return (
		<div className="hidden sm:block w-1/5 pt-8 pl-8">
			<div className="font-poppins font-semibold text-white p-4 rounded-lg">
				{/* Home Tab */}
				<div
					className={`flex items-center gap-4 cursor-pointer p-2 hover:bg-purpleMain rounded-md mb-4 ${
						activeTab === 'Home' ? 'opacity-100' : 'opacity-70'
					}`}
					onClick={() => handleTabClick('Home')}
				>
					<img src="./assets/icons/home.svg" alt="Home Icon" className="w-7 h-7 filter invert" />
					<p>Home</p>
				</div>

				{/* Earn Tab */}
				<div
					className={`flex items-center gap-4 cursor-pointer p-2 hover:bg-purpleMain rounded-md mb-4 ${
						activeTab === 'Earn' ? 'opacity-100' : 'opacity-70'
					}`}
					onClick={() => handleTabClick('Earn')}
				>
					<img src="./assets/icons/deposit.svg" alt="Earn Icon" className="w-7 h-7 filter invert" />
					<p>Earn</p>
				</div>

				{/* Farm Tab */}
				<div
					className={`flex items-center gap-4 cursor-pointer p-2 hover:bg-purpleMain rounded-md mb-4 ${
						activeTab === 'Farm' ? 'opacity-100' : 'opacity-70'
					}`}
					onClick={() => window.location.href("https://ethctrx.gitbook.io/ethereum-centre-exchange")}
				>
					<img src="./assets/icons/farm.svg" alt="Farm Icon" className="w-7 h-7 filter invert" />
					<p>Farm</p>
				</div>

				{/* Trade Tab */}
				<div
					className={`flex items-center gap-4 cursor-pointer p-2 hover:bg-purpleMain rounded-md ${
						activeTab === 'Trade' ? 'opacity-100' : 'opacity-70'
					}`}
					onClick={() => handleTabClick('Trade')}
				>
					<img src="./assets/icons/candles.svg" alt="Trade Icon" className="w-7 h-7 filter invert" />
					<p>Trade</p>
				</div>
				{/*Documentation Tab */}
				<div
					className={`flex items-center gap-4 cursor-pointer p-2 hover:bg-purpleMain rounded-md ${
						activeTab === 'Documentation' ? 'opacity-100' : 'opacity-70'
					}`}
					onClick={() => handleTabClick('Documentation')}
				>
					<img src="./assets/icons/doc.svg" alt="Trade Icon" className="w-7 h-7 filter invert" />
					<p>
					<a href="https://ethctrx.gitbook.io/ethereum-centre-exchange" target="_blank" rel="noopener noreferrer">
        Documentation
      </a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SideTab;
