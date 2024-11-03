import Footer from './components/Footer';
import Header from './components/Header';
import Calculator from './components/Calculator';

export default function Home() {
	return (
		<div className="bg-black">
			<Header />
			<div className="flex justify-center w-4/5 sm:w-3/5 max-w-screen-lg mx-auto pt-8">
				<Calculator />
			</div>
			<Footer />
		</div>
	);
}
