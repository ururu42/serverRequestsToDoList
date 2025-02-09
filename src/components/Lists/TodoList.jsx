import { React, useState, useEffect } from 'react';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
import { Loader } from '../Loader/Loader';
import { BackButton } from '../BackButton/BackButton';
import { NothingFound } from '../NothingFound/NothingFound';

export const TodoList = ({
	todos,
	setTodoLists,
	isLoading,
	refreshTasks,
	setActiveTodo,
	idBySearchPhrase,
	setIdBySearchPhrase,
	sortedTodo,
	setSortedTodo,
	isSorted,
	setIsSorted,
	isNothingFound,
	setIsNothingFound,
}) => {
	if (isLoading) {
		return <Loader />;
	}

	if (todos.length === 0) {
		return <div>Список задач пуст</div>;
	}
	console.log('sortedTodoInList', sortedTodo, 'isSorted', isSorted);

	// if (!idBySearchPhrase.length) {
	//   return <div></div>
	// }

	const filteredTodos = idBySearchPhrase.length
		? todos.filter(({ id }) => idBySearchPhrase.includes(id))
		: todos;

	const filteredAndSortedTodos = !isSorted ? filteredTodos : sortedTodo;

	return (
		<div className={styles.list}>
			{isNothingFound ? (
				<>
					<NothingFound
						isNothingFound={isNothingFound}
						setIsNothingFound={setIsNothingFound}
					/>
				</>
			) : (
				filteredAndSortedTodos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						todos={todos}
						setTodoLists={setTodoLists}
						refreshTasks={refreshTasks}
						setActiveTodo={setActiveTodo}
						idBySearchPhrase={idBySearchPhrase}
					/>
				))
			)}
			{idBySearchPhrase.length || isNothingFound ? (
      <BackButton setIdBySearchPhrase={setIdBySearchPhrase} setIsNothingFound={setIsNothingFound} />
			) : null}
		</div>
	);
};
