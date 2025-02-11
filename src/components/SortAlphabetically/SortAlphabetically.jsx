import sortImg from '../SortAlphabetically/sort.png';
import styles from '../SortAlphabetically/SortAlphabetically.module.css';

export const SortAlphabetically = ({
	todos,
	setSortedTodo,
	isSorted,
	setIsSorted,
}) => {
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
			setSortedTodo(inHandelSortedTodo);
			setIsSorted(!isSorted);
		} else {

			setSortedTodo(todos);
			setIsSorted(!isSorted);

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
