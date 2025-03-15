import { React, useState } from 'react';
import { H1Header } from '../src/components/H1/H1';
import styles from './App.module.css';
import { TodoList } from './components/Lists/TodoList';
import { AddTodoButton } from './components/AddTodoButton/AddTodoButton';
import { Form } from './components/Form/Form.jsx';
// import { useRequestGetTodos } from './components/hooks/useRequestGetTodos.jsx';
import { SearchForm } from './components/SearchForm/SearchForm.jsx';
import { SortAlphabetically } from './components/SortAlphabetically/SortAlphabetically.jsx';
import { useSelector } from 'react-redux';
import { selectActiveTodo } from './selectors';

export const App = () => {
	// const { isLoading } = useRequestGetTodos();
	const activeTodo = useSelector(selectActiveTodo);

	return (
		<div className={styles.body}>
			<div className={styles.container}>
				<H1Header />
				<div className={styles.containerForAddBtnAndSearchForm}>
					<SearchForm />
					<SortAlphabetically />
					<AddTodoButton />
				</div>

				<TodoList  />

				{activeTodo ? <Form activeTodo={activeTodo} /> : null}
			</div>
		</div>
	);
};
