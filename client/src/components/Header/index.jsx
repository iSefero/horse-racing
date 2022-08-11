import React from 'react';
import styles from './Header.module.scss';

function Header() {
	return (
		<div className={styles.root}>
			<div className={styles.account}>My account</div>
			<div className={styles.moneyInfo}>
				<div>Wallet balance:</div>
				<div className={styles.money}>300 $</div>
			</div>
			<div className={styles.login}>
				<button>Login</button>
			</div>
		</div>
	);
}

export default Header;
