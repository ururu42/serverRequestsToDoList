import React from 'react';
import styles from '../H1/H1.module.css';
import checkListImg from '../H1/check-list.png';

export const H1Header = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Список дел</h1>
      <img className={styles.checkListImg} src={checkListImg} alt='Список дел'></img>
		</div>
	);
};
