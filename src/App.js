import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PorfolioContent from './components/PorfolioContent/PorfolioContent';

import './App.css';

function App() {
	return (
		<div className='app'>
			<div className="container">
				<Header/>
				<PorfolioContent/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
