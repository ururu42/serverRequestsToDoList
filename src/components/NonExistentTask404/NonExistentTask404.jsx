import styles from '../NonExistentTask404/NonExistentTask404.module.css';
import nonExistentTask from '../NonExistentTask404/free-icon-browser-3585596.png';

export const NonExistentTask404 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textNotFound}>
				Такой страницы c задачей не существует
			</div>
			<img
				className={styles.imgNotFound}
				src={nonExistentTask}
				alt="Страницы не существует"
			></img>
		</div>
	);
};
