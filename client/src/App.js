import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setHorses } from './redux/slices/horseSlice';

import './App.scss';
import Header from './components/Header';
import HorseInfo from './components/HorseInfo';
import RaceInfo from './components/RaceInfo';

import io from 'socket.io-client';
const socket = io.connect('ws://localhost:3002');

function App() {
	const dispatch = useDispatch();

	const horseItem = useSelector((state) => state.horses.round);

	useEffect(() => {
		socket.emit('start');
		socket.on('ticker', (round) => {
			dispatch(setHorses(round));
		});
		return () => {};
	}, [socket]);

	const horses = horseItem.map((obj) => <RaceInfo key={obj.name} {...obj} />);
	const emptyRaces = [...new Array(6)].map((_, index) => <RaceInfo key={index} />);

	return (
		<div className="wrapper">
			<div>
				<Header />
				<HorseInfo />
				<div>{horseItem.length ? horses : emptyRaces}</div>
			</div>
		</div>
	);
}

export default App;
