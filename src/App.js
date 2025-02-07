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
	const [activeTask, setActiveTask] = useState(null);

	const refreshTasks = () => {
		setRefreshTasksFlag(!refreshTasksFlag);
	};

	const { todos, setTodoLists, isLoading } = useRequestGetTodos(
		refreshTasksFlag,
		refreshTasks,
	);

	const [idBySearchPhrase, setIdBySearchPhrase] = useState([]);

	return (
		<>
			<H1Header />
			<TodoList
				todos={todos}
				isLoading={isLoading}
				refreshTasks={refreshTasks}
				setActiveTask={setActiveTask}
				idBySearchPhrase={idBySearchPhrase}
			/>
			<AddTodoButton
				refreshTasks={refreshTasks}
				todos={todos}
				setTodoLists={setTodoLists}
			/>
			{activeTask ? (
				<Form
					activeTask={activeTask}
					setActiveTask={setActiveTask}
					refreshTasks={refreshTasks}
				/>
			) : null}
			<SearchForm setIdBySearchPhrase={setIdBySearchPhrase} />
		</>
	);
};
