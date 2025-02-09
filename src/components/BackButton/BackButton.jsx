import styles from '../BackButton/BackButton.module.css';
import backButtonImg from '../BackButton/arrow.png';

export const BackButton = ({ setIdBySearchPhrase, setIsNothingFound }) => {
	return (
		<button
			className={styles.backBtn}
			onClick={() => {
				setIdBySearchPhrase([]);
				setIsNothingFound(false);
			}}
		>
			<img className={styles.backButtonImg} src={backButtonImg} alt="Назад"></img>
		</button>
	);
};
