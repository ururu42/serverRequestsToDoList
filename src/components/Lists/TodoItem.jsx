import React from 'react';
import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { UpdateTodoButton } from '../UpdateTodoButton/UpdateTodoButton';
import checkImg from '../Lists/check-mark.png';

import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, setActiveTodo, todos, setTodoLists }) => {
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

			<DeleteTodoButton id={todo.id} />
			<UpdateTodoButton
				id={todo.id}
				todo={todo}
				setActiveTodo={setActiveTodo}
			/>
		</div>
	);
};
