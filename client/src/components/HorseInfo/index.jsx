import React from 'react';

import styles from './HorseInfo.module.scss';

function HorseInfo() {
	return (
		<div className={styles.root}>
			<div className={styles.horseInfo}>Horse name</div>
			<div className={styles.horseRatio}>Ratio</div>
			<div className={styles.horseBit}>Bet</div>
			<div className={styles.horseLane}>Running race</div>
		</div>
	);
}

export default HorseInfo;
