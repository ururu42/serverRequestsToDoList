import styles from '../BackButton/BackButton.module.css';
import backButtonImg from '../BackButton/arrow.png';
import { useDispatch } from 'react-redux';

export const BackButton = () => {
	const dispatch = useDispatch();
	return (
		<button
			className={styles.backBtn}
			onClick={() => {
				dispatch({
					type: 'SET_ID_BY_SEARCH_PHRASE',
					payload: [],
				});

				dispatch({
					type: 'SET_IS_NOTHING_FOUND',
					payload: false,
				});
			}}
		>
			<img className={styles.backButtonImg} src={backButtonImg} alt="Назад"></img>
		</button>
	);
};
