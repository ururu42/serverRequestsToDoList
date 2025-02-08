import editImg from '../UpdateTodoButton/pen.png';
import styles from '../UpdateTodoButton/UpdateTodoButton.module.css';

export const UpdateTodoButton = ({ todos, setTodoLists, todo, setActiveTodo }) => {
	const { id, title, completed } = todo;

	const handlerSelectActiveTodo = async () => {
		console.log(id, title, completed);
		// setActiveTask(null);
		await new Promise((r) => setTimeout(r));
		setActiveTodo({ id, title, completed });
	};

	return (
		<button className={styles.editBtn} onClick={handlerSelectActiveTodo}>
			<img alt='Редактировать задачу' src={editImg} className={styles.editImg}></img>
		</button>
	);
};
