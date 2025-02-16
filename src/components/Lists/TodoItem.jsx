import React from 'react';
import checkImg from '../Lists/check-mark.png';
import checkEmpty from '../Lists/free-icon-square-3905918.png';

import styles from './TodoItem.module.css';
import { Link } from 'react-router-dom';

export const TodoItem = ({ todo, setActiveTodo, todos, setTodoLists }) => {
	const handlerSelectActiveTodo = async (todo) => {
		const { id, title, completed } = todo;
		await new Promise((r) => setTimeout(r));
		setActiveTodo({ id, title, completed });
	};
	return (
		<div
			className={styles.todoItem}
			onClick={() => {
				handlerSelectActiveTodo(todo);
			}}
		>
			<Link to={`/card-todo/${todo.id}`} className={styles.todoText} key={todo.id}>
				{todo.completed ? (
					<img
						className={styles.checkImg}
						src={checkImg}
						alt="Выполненно"
					></img>
				) : (
					<img
						className={styles.checkEmpty}
						src={checkEmpty}
						alt="Не выполненно"
					></img>
				)}
				{todo.title}
			</Link>
		</div>
	);
};
