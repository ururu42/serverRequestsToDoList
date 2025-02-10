import { useState } from 'react';
import styles from '../SearchForm/SearchForm.module.css';
import searchImg from '../SearchForm/search.png';

export const SearchForm = ({ setIdBySearchPhrase, setIsNothingFound, todos }) => {
	const [searchPhrase, setSearchPhrase] = useState('');

	const getTodoIdBySearchPhrase = async (event) => {
		event.preventDefault();
		const searchTodos = todos.filter(({ title }) => title.indexOf(searchPhrase) >= 0);

		const searchTodosInArray = Object.entries(searchTodos).map(([id, task]) => ({
			id,
			...task,
		}));

		const IdSearchTodosInArray = searchTodosInArray.map((todo) => {
			return todo.id;
		});

		setIdBySearchPhrase(IdSearchTodosInArray);
		setIsNothingFound(!IdSearchTodosInArray.length);
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
