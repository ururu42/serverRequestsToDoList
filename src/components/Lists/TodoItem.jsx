import React from 'react';
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { UpdateTodoButton } from '../UpdateTodoButton/UpdateTodoButton';
import checkImg from '../Lists/check-mark.png';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo }) => {
	return (
		<div className={styles.todoItem}>
			<div className={styles.todoText} key={todo.id}>
				{todo.title}
				{todo.completed ? (
					<img
						className={styles.checkImg}
						src={checkImg}
						alt="Выполненно"
					></img>
				) : null}
			</div>
			<DeleteTodoButton todo={todo} />
			<UpdateTodoButton todo={todo} />
		</div>
	);
};
