import React from 'react';

import styles from './RaceInfo.module.scss';

function index() {
	return (
		<div className={styles.root}>
			<div className={styles.horseInfo}>Лариса</div>
			<div className={styles.horseRatio}>1.34</div>
			<div className={styles.bitInfo}>
				<input className={styles.horseBit} type="number" />
				<button onClick={() => console.log('hi')} className={styles.bitButton}>
					Pay
				</button>
			</div>
			<div className={styles.lane}>0 m./1000 m.</div>
		</div>
	);
}

export default index;
