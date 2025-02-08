import { React, useState, useEffect } from 'react';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
import { Loader } from '../Loader/Loader';

export const TodoList = ({
	todos,
	setTodoLists,
	isLoading,
	refreshTasks,
	setActiveTodo,
	idBySearchPhrase,
}) => {
	if (isLoading) {
		return <Loader />;
	}

	if (todos.length === 0) {
		return <div>Список задач пуст</div>;
	}

	const filteredTodos = idBySearchPhrase.length
		? todos.filter(({ id }) => idBySearchPhrase.includes(id))
		: todos;

	return (
		<div className={styles.list}>
			{filteredTodos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					todos={todos}
					setTodoLists={setTodoLists}
					refreshTasks={refreshTasks}
					setActiveTodo={setActiveTodo}
					idBySearchPhrase={idBySearchPhrase}
				/>
			))}
		</div>
	);
};
