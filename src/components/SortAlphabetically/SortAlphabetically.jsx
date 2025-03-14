import sortImg from '../SortAlphabetically/sort.png';
import styles from '../SortAlphabetically/SortAlphabetically.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, selectIsSorted } from '../../selectors';

export const SortAlphabetically = () => {
	const todos = useSelector(selectTodos);
	const isSorted = useSelector(selectIsSorted);

	const dispatch = useDispatch();

	const handlerSortAlphabetically = () => {
		if (!isSorted) {
			const inHandelSortedTodo = [...todos].sort((a, b) => {
				if (a.title.toLowerCase() > b.title.toLowerCase()) {
					return 1;
				}
				if (a.title.toLowerCase() < b.title.toLowerCase()) {
					return -1;
				}
				return 0;
			});

			dispatch({
				type: 'SET_SORTED_TODO',
				payload: inHandelSortedTodo,
			});

			dispatch({
				type: 'SET_IS_SORTED',
				payload: !isSorted,
			});
		} else {
			dispatch({
				type: 'SET_SORTED_TODO',
				payload: todos,
			});

			dispatch({
				type: 'SET_IS_SORTED',
				payload: !isSorted,
			});
		}
	};

	return (
		<>
			<button className={styles.sortImgBtn} onClick={handlerSortAlphabetically}>
				<img
					className={styles.sortImg}
					src={sortImg}
					alt="Сортировка по алфавиту"
				></img>
			</button>
		</>
	);
};
