import { React, useState, useEffect } from 'react';
import { H1Header } from '../src/components/H1/H1';
import styles from './App.module.css';
import { TodoList } from './components/Lists/TodoList';
import { AddTodoButton } from './components/AddTodoButton/AddTodoButton';
import { Form } from './components/Form/Form.jsx';
import { useRequestGetTodos } from './components/hooks/useRequestGetTodos.jsx';
import { SearchForm } from './components/SearchForm/SearchForm.jsx';

export const App = () => {
	const [refreshTasksFlag, setRefreshTasksFlag] = useState(false);
	const [activeTodo, setActiveTodo] = useState(null);

	const refreshTasks = () => {
		setRefreshTasksFlag(!refreshTasksFlag);
	};

	const { todos, setTodoLists, isLoading } = useRequestGetTodos(
		refreshTasksFlag,
		refreshTasks,
	);

	const [idBySearchPhrase, setIdBySearchPhrase] = useState([]);

	return (
		<div  className={styles.body}>
      <div className={styles.container}>
      <H1Header />
      <div className={styles.containerForAddBtnAndSearchForm}>
      
      <SearchForm setIdBySearchPhrase={setIdBySearchPhrase} />
      <AddTodoButton
				refreshTasks={refreshTasks}
				todos={todos}
				setTodoLists={setTodoLists}
			/>
      </div>
      
			<TodoList
				todos={todos}
				setTodoLists={setTodoLists}
				isLoading={isLoading}
				refreshTasks={refreshTasks}
				setActiveTodo={setActiveTodo}
				idBySearchPhrase={idBySearchPhrase}
			/>
			
			{activeTodo ? (
				<Form
					todos={todos}
					setTodoLists={setTodoLists}
					activeTodo={activeTodo}
					setActiveTodo={setActiveTodo}
					refreshTasks={refreshTasks}
				/>
			) : null}
      </div>
			
			
		</div>
	);
};
