import { useState } from 'react';

import styles from './RaceInfo.module.scss';

function RaceInfo({ ratio, name, distance }) {
	return (
		<div className={styles.root}>
			<div className={styles.horseInfo}>{name}</div>
			<div className={styles.horseRatio}>{ratio}</div>
			<div className={styles.betInfo}>
				<input className={styles.horseBet} type="number" />
				<button className={styles.betButton} onClick={() => console.log('bet placed')}>
					Pay
				</button>
			</div>
			<div className={styles.lane}>{distance} m./1000 m.</div>
		</div>
	);
}

export default RaceInfo;
