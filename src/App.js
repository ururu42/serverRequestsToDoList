import { React, useState, useEffect } from 'react';
import { H1Header } from '../src/components/H1/H1';
import styles from './App.module.css';
import { TodoList } from './components/Lists/TodoList';
import { AddTodoButton } from './components/AddTodoButton/AddTodoButton';
import { Form } from './components/Form/Form.jsx';
import { useRequestGetTodos } from './components/hooks/useRequestGetTodos.jsx';
import { SearchForm } from './components/SearchForm/SearchForm.jsx';
import { SortAlphabetically } from './components/SortAlphabetically/SortAlphabetically.jsx';

export const App = () => {
	const [activeTodo, setActiveTodo] = useState(null);
	const { todos, setTodoLists, isLoading } = useRequestGetTodos();

	const [idBySearchPhrase, setIdBySearchPhrase] = useState([]);

	const [sortedTodo, setSortedTodo] = useState([]);
	const [isSorted, setIsSorted] = useState(false);
	const [isBackButton, setBackButton] = useState(false);
	const [isNothingFound, setIsNothingFound] = useState(false);

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<H1Header />
				<div className={styles.containerForAddBtnAndSearchForm}>
					<SearchForm
						setIdBySearchPhrase={setIdBySearchPhrase}
						setIsNothingFound={setIsNothingFound}
						todos={todos}
					/>
					<SortAlphabetically
						todos={todos}
						setSortedTodo={setSortedTodo}
						isSorted={isSorted}
						setIsSorted={setIsSorted}
					/>
					<AddTodoButton />
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
					isBackButton={isBackButton}
					setBackButton={setBackButton}
					isNothingFound={isNothingFound}
					setIsNothingFound={setIsNothingFound}
				/>

				{activeTodo ? (
					<Form activeTodo={activeTodo} setActiveTodo={setActiveTodo} />
				) : null}
			</div>
		</div>
	);
};
