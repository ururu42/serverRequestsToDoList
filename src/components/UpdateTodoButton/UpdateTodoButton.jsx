import editImg from '../UpdateTodoButton/pen.png';
import styles from '../UpdateTodoButton/UpdateTodoButton.module.css';

export const UpdateTodoButton = ({
	todo,
	setActiveTodo,
	isFormForEditing,
	setIsFormForEditing,
}) => {
	const { id, title, completed } = todo;

	const handlerSelectActiveTodo = async () => {
		await new Promise((r) => setTimeout(r));
		setActiveTodo({ id, title, completed });
		setIsFormForEditing(true);
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
