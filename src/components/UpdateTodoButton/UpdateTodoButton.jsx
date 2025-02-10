import editImg from '../UpdateTodoButton/pen.png';
import styles from '../UpdateTodoButton/UpdateTodoButton.module.css';

export const UpdateTodoButton = ({ todo, id, setActiveTodo }) => {
	const { title, completed } = todo;

	const handlerSelectActiveTodo = async () => {
		await new Promise((r) => setTimeout(r));
		setActiveTodo([id, { title, completed }]);
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
