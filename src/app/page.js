import Footer from './components/Footer';
import Header from './components/Header';
import SideTab from './components/SideTab';
import Calculator from './components/CalculatorPro';

export default function Home() {
	return (
		<div className="bg-black min-h-screen">
			<Header />
			{/* Main Content Area */}
			<div className="flex">
				{/* Side Tab - Hidden on mobile */}
				<SideTab />

				{/* Center Content */}
				<div className="flex-grow flex justify-start w-full px-6 max-w-screen-lg mx-auto">
					<Calculator />
				</div>
			</div>
			<Footer />
		</div>
	);
}
