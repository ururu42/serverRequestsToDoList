import { useState, useEffect } from 'react';
import styles from '../SearchForm/SearchForm.module.css';
import searchImg from '../SearchForm/search.png';

export const SearchForm = ({ setIdBySearchPhrase }) => {
	const [searchPhrase, setSearchPhrase] = useState('');

	const getTodoIdBySearchPhrase = async (event) => {
		event.preventDefault();

		const response = await fetch(
			`http://localhost:3006/tasks?title_like=${searchPhrase}`,
		);
		const filteredTodos = await response.json();
		const filteredTodosIds = filteredTodos.map(({ id }) => id);

		setIdBySearchPhrase(filteredTodosIds);
	};

	const handlerSearchTaskByPhrase = ({ target }) => {
		console.log('target.value', target.value, 'searchPhrase', searchPhrase);

		setSearchPhrase(target.value);
		// console.log(todos);
	};

	return (
		<>
			<form className={styles.form} onSubmit={getTodoIdBySearchPhrase}>
				<input
					className={styles.inputForm}
					type="text"
					value={searchPhrase}
					onChange={handlerSearchTaskByPhrase}
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
