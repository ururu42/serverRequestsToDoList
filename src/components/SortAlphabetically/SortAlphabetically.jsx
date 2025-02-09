import { useState } from 'react';
import sortImg from '../SortAlphabetically/sort.png';
import styles from '../SortAlphabetically/SortAlphabetically.module.css';

export const SortAlphabetically = ({
	todos,
	setTodoLists,
	sortedTodo,
	setSortedTodo,
	isSorted,
	setIsSorted,
}) => {
	// const [isSorted, setIsSorted] = useState(true);
	// const [sortedTodo, setSortedTodo] = useState([]);

	const handlerSortAlphabetically = () => {
		if (!isSorted) {
			const inHandelSortedTodo = [...todos].sort((a, b) => {
				if (a.title > b.title) {
					return 1;
				}
				if (a.title < b.title) {
					return -1;
				}
				return 0;
			});
			setSortedTodo(inHandelSortedTodo);
			setIsSorted(!isSorted);
		} else {
			// console.log(todos);
			setSortedTodo(todos);
			setIsSorted(!isSorted);
			// console.log(sortedTodo);
		}

		// console.log(sortedTodo);
	};

	console.log(sortedTodo);

	// console.log('sortedTodo', sortedTodo, 'isSortedTodo', isSorted);

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
