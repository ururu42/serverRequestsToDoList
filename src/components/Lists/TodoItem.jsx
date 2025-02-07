import React from 'react';
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { UpdateTodoButton } from '../UpdateTodoButton/UpdateTodoButton';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, refreshTasks, setActiveTask, idBySearchPhrase }) => {
	const { id, title, completed } = todo;
	// console.log(idBySearchPhrase);

	return (
		<div className={styles.todoItem}>
			<div className={styles.todoText} key={id}>
				{title} - {completed ? 'выполненно' : 'не завершено'}
			</div>

			{/* <div className={styles.todoText} key={id}>
				{title} - {completed ? 'выполненно' : 'не завершено'}
			</div> */}
			<DeleteTodoButton todo={todo} refreshTasks={refreshTasks} />
			<UpdateTodoButton todo={todo} setActiveTask={setActiveTask} />
		</div>
	);
};
