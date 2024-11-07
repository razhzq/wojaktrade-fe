'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoInformationCircleOutline } from 'react-icons/io5';

const Calculator = () => {
	// Hard Code
	const senderCoin = {
		label: 'SOL',
		name: 'SOLANA',
		value: 'sol',
		image: '/assets/solana.png',
	};

	// Hard Code
	const receiverCoin = {
		label: 'JUP',
		name: 'JUPYTER',
		value: 'jup',
		image: '/assets/jup.png',
	};

	const renderCoinInfo = (coin) => {
		return (
			<button className="flex justify-center items-center bg-gray-800 p-1 rounded-md gap-2">
				<Image src={coin?.image} className="rounded-2xl" width={30} height={30} alt={coin.name} />
				<p className="text-white font-poppins font-semibold">{coin?.label}</p>
			</button>
		);
	};

	const renderCardSender = (sender = false) => {
		const renderWhoText = sender ? 'YOU LONG' : 'YOU PAY';
		return (
			<div className="flex flex-col gap-4 w-full max-w-md bg-customGray rounded-lg p-4 shadow-md">
				<div className="flex w-full justify-between text-gray-400">
					<div className="flex gap-2">
						<p className="font-poppins text-xs font-medium text-gray-400">{renderWhoText}</p>{' '}
						<IoInformationCircleOutline color="white" />
					</div>
					<p></p>
				</div>
				<div className="flex w-full justify-between text-limeGreen">
					{renderCoinInfo(senderCoin)}
					<input
						type="number"
						min="0"
						defaultValue={0.05}
						className="font-poppins w-1/2 bg-transparent border-none font-bold text-2xl text-white text-right focus:outline-none focus:ring-0"
						// onChange={handleChange}
						// value={inputValue}
					/>
				</div>
				<div className="flex w-full justify-between text-limeGreen">
					<p></p>
					<p className="font-poppins text-xs font-medium text-gray-400">$9.38</p>
				</div>
			</div>
		);
	};

	const renderCardReceiver = (sender = false) => {
		const renderWhoText = sender ? 'YOU LONG' : 'YOU PAY';
		return (
			<div className="flex flex-col gap-4 w-full max-w-md bg-customGray rounded-lg p-4 shadow-md">
				<div className="flex w-full justify-between text-gray-400">
					<div className="flex gap-2">
						<p className="font-poppins text-xs font-medium text-gray-400">{renderWhoText}</p>{' '}
						<IoInformationCircleOutline color="white" />
					</div>
					<div className="flex text-xs font-poppins font-semibold gap-1">
						<p>{'AVAIALBALE LIQUIDITY: '}</p>
						<p className="text-white">{'251.9313 SOL'}</p>
					</div>
				</div>
				<div className="flex w-full justify-between text-limeGreen">
					{renderCoinInfo(receiverCoin)}
					<input
						type="number"
						min="0"
						defaultValue={0.05}
						className="font-poppins w-1/2 bg-transparent border-none font-bold text-2xl text-white text-right focus:outline-none focus:ring-0"
						// onChange={handleChange}
						// value={inputValue}
					/>
				</div>
				<div className="flex w-full justify-between text-limeGreen">
					<p></p>
					<p className="font-poppins text-xs font-medium text-gray-400">1 SOL = 184.68686 JUP</p>
				</div>
			</div>
		);
	};

	const renderPriceSummary = () => {
		return (
			<div className="w-full font-poppins flex flex-row justify-between max-w-md gap-4 items-center">
				<div className="w-full font-semibold text-sm">
					<div className="flex flex-row w-full justify-between">
						<p>Fee</p>
						<p>$1.81</p>
					</div>
					<div className="flex flex-row w-full justify-between">
						<p>Total</p>
						<p>$1.90</p>
					</div>
				</div>
				<button className="p-2 text-black font-semibold bg-limeGreen rounded-lg hover:bg-lime-300 whitespace-nowrap">
					Connect Wallet
				</button>
			</div>
		);
	};

	const loanSummary = () => {
		return (
			<div className="w-full md:w-3/5 px-8 mt-4">
				<div className="w-full p-4 align-middle items-center justify-center font-poppins text-sm border-solid rounded-lg border border-gray-600">
					<span className="text-center pb-4 flex justify-center">LOAN SUMMARY</span>
					<div className="flex flex-col w-full gap-2">
						<div className="flex justify-between">
							<p>Borrowed Amount</p>
							<p>$0.01</p>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-1">
								<p>Position Size</p>
								<IoInformationCircleOutline color="white" />
							</div>
							<p>$0.10</p>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-1">
								<p>Daily Interest</p>
								<IoInformationCircleOutline color="white" />
							</div>
							<p>0.0274%</p>
						</div>
						<div className="flex justify-between">
							<p>Entry Price</p>
							<p>$1,0172638</p>
						</div>
						<div className="flex justify-between">
							<div className="flex items-center gap-1">
								<p>Liquidation Price</p>
								<IoInformationCircleOutline color="white" />
							</div>
							<p>$0.103890</p>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-screen justify-center items-center md:w-4/5 flex flex-col gap-4">
			{renderCardSender()}
			{renderCardReceiver(true)}
			{renderPriceSummary()}
			{loanSummary()}
		</div>
	);
};

export default Calculator;
