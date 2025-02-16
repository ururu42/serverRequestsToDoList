import styles from '../PageNotFound404/PageNotFound404.module.css';
import page404 from '../PageNotFound404/free-icon-404-error-4263527.png';
import { Link } from 'react-router-dom';
import backButtonImg from '../BackButton/arrow.png';

export const PageNotFound404 = () => {
	return (
		<div className={styles.container}>
			<div className={styles.textNotFound}>Такой страницы не существует</div>
			<img
				className={styles.imgNotFound}
				src={page404}
				alt="Страницы не существует"
			></img>
      <button className={styles.backBtn}>
				<Link to={'/'}>
					<img
						className={styles.backButtonImg}
						src={backButtonImg}
						alt="Назад"
					></img>
				</Link>
			</button>
		</div>
	);
};
