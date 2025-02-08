import React from 'react';
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { UpdateTodoButton } from '../UpdateTodoButton/UpdateTodoButton';

import styles from './TodoItem.module.css';

export const TodoItem = ({
	todo,
	refreshTasks,
	setActiveTodo,
	idBySearchPhrase,
	todos,
	setTodoLists,
}) => {
	// const { id, title, completed } = todo;
	// console.log(idBySearchPhrase);

	return (
		<div className={styles.todoItem}>
			<div className={styles.todoText} key={todo.id}>
				{todo.title}
				<input
					className={styles.checkbox}
					type="checkbox"
					checked={todo.completed ? true : false}
				></input>
			</div>

			<DeleteTodoButton
				todos={todos}
				setTodoLists={setTodoLists}
				todo={todo}
				refreshTasks={refreshTasks}
			/>
			<UpdateTodoButton
				todos={todos}
				setTodoLists={setTodoLists}
				todo={todo}
				setActiveTodo={setActiveTodo}
			/>
		</div>
	);
};
