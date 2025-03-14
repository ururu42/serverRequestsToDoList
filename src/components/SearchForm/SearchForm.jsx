import { useState } from 'react';
import styles from '../SearchForm/SearchForm.module.css';
import searchImg from '../SearchForm/search.png';
import { useDispatch } from 'react-redux';

export const SearchForm = () => {
	const [searchPhrase, setSearchPhrase] = useState('');

	const dispatch = useDispatch();

	const getTodoIdBySearchPhrase = async (event) => {
		event.preventDefault();

		const response = await fetch(
			`http://localhost:3006/tasks?title_like=${searchPhrase}`,
		);
		const filteredTodos = await response.json();
		const filteredTodosIds = filteredTodos.map(({ id }) => id);

		dispatch({
			type: 'SET_ID_BY_SEARCH_PHRASE',
			payload: filteredTodosIds,
		});

		dispatch({
			type: 'SET_IS_NOTHING_FOUND',
			payload: !filteredTodosIds.length,
		});
	};

	const handlerSearchTaskByPhrase = ({ target }) => {
		setSearchPhrase(target.value);
	};

	return (
		<>
			<form className={styles.form} onSubmit={getTodoIdBySearchPhrase}>
				<input
					className={styles.inputForm}
					type="text"
					value={searchPhrase}
					onChange={handlerSearchTaskByPhrase}
					placeholder="Поиск задач"
				></input>
				<button className={styles.searchImgBtn} type="submit">
					<img
						className={styles.searchImg}
						alt="Найти задачу"
						src={searchImg}
					></img>
				</button>
			</form>
		</>
	);
};
