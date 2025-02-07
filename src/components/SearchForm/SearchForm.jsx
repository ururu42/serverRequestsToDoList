import { useState, useEffect } from 'react';

export const SearchForm = ({
	setIdBySearchPhrase,
}) => {
	const [searchPhrase, setSearchPhrase] = useState('');

	const getTodoIdBySearchPhrase = async (event) => {
		event.preventDefault();

    const response = await fetch(`http://localhost:3006/tasks?title_like=${searchPhrase}`);
    const filteredTodos = await response.json()
    const filteredTodosIds = filteredTodos.map(({ id }) => id)

    setIdBySearchPhrase(filteredTodosIds);
	};

	const handlerSearchTaskByPhrase = ({ target }) => {
		console.log('target.value', target.value, 'searchPhrase', searchPhrase);

		setSearchPhrase(target.value);
		// console.log(todos);
	};

	return (
		<>
			<form onSubmit={getTodoIdBySearchPhrase}>
				<input
					type="text"
					value={searchPhrase}
					onChange={handlerSearchTaskByPhrase}
				></input>
				<button type="submit">Найти задачу</button>
			</form>
		</>
	);
};
