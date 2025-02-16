import { React, useState } from 'react';
import { H1Header } from '../H1/H1.jsx';
import styles from './MainPage.module.css';
import { TodoList } from '../Lists/TodoList.jsx';
import { AddTodoButton } from '../AddTodoButton/AddTodoButton';

import { SearchForm } from '../SearchForm/SearchForm.jsx';
import { SortAlphabetically } from '../SortAlphabetically/SortAlphabetically.jsx';

export const MainPage = ({
	todos,
	setTodoLists,
	isLoading,
	activeTodo,
	setActiveTodo,
}) => {
	const [idBySearchPhrase, setIdBySearchPhrase] = useState([]);
	const [sortedTodo, setSortedTodo] = useState([]);
	const [isSorted, setIsSorted] = useState(false);

	const [isNothingFound, setIsNothingFound] = useState(false);

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<H1Header />
				<div className={styles.containerForAddBtnAndSearchForm}>
					<SearchForm
						setIdBySearchPhrase={setIdBySearchPhrase}
						setIsNothingFound={setIsNothingFound}
					/>
					<SortAlphabetically
						todos={todos}
						setSortedTodo={setSortedTodo}
						isSorted={isSorted}
						setIsSorted={setIsSorted}
					/>
					<AddTodoButton todos={todos} setTodoLists={setTodoLists} />
				</div>

				<TodoList
					todos={todos}
					setTodoLists={setTodoLists}
					isLoading={isLoading}
					setActiveTodo={setActiveTodo}
					idBySearchPhrase={idBySearchPhrase}
					setIdBySearchPhrase={setIdBySearchPhrase}
					sortedTodo={sortedTodo}
					isSorted={isSorted}
					isNothingFound={isNothingFound}
					setIsNothingFound={setIsNothingFound}
				/>
			</div>
		</div>
	);
};
