import editImg from '../UpdateTodoButton/pen.png';
import styles from '../UpdateTodoButton/UpdateTodoButton.module.css';

import { useContext } from 'react';
import { SetActiveTodoContext } from '../../Context/todosContex';

export const UpdateTodoButton = ({ todo }) => {
	const setActiveTodo = useContext(SetActiveTodoContext);
	const { id, title, completed } = todo;

	const handlerSelectActiveTodo = async () => {
		await new Promise((r) => setTimeout(r));
		setActiveTodo({ id, title, completed });
	};

	return (
		<button className={styles.editBtn} onClick={handlerSelectActiveTodo}>
			<img
				alt="Редактировать задачу"
				src={editImg}
				className={styles.editImg}
			></img>
		</button>
	);
};
