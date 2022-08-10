import { useEffect, useState } from 'react';

import axios from 'axios';

import './App.scss';
import Header from './components/Header';
import HorseInfo from './components/HorseInfo';
import RaceInfo from './components/RaceInfo';
// import Footer from './components/Footer';

import io from 'socket.io-client';
const socket = io.connect('ws://localhost:3002');

function App() {
	const [items, setItems] = useState([]);
	const [round, setRound] = useState([]);
	console.log(round);

	// useEffect(() => {
	// 	const fetchHorse = async () => {
	// 		const responce = await axios.get(`wss://localhost:3002`);
	// 		setItems(responce.data);
	// 		// console.log(responce.data);
	// 	};
	// 	fetchHorse();
	// }, []);

	// useEffect(() => {
	socket.connect();
	socket.emit('start');
	return () => {
		socket.on('ticker', (round) => {
			setRound(round);
		});
	};
	// }, [socket]);

	return (
		<div className="wrapper">
			<Header />
			<HorseInfo />
			<RaceInfo />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
