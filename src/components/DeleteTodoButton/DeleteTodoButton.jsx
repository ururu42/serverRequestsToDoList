import { useRequestDeleteActiveTodo } from '../hooks/useRequestDeleteActiveTodo';
import styles from '../DeleteTodoButton/DeleteTodoButton.module.css';
import deleteImg from '../DeleteTodoButton/bin.png';

export const DeleteTodoButton = ({ todo, todos }) => {
	const { id } = todo;

	const { requestDeleteActiveTodo } = useRequestDeleteActiveTodo({
		id,
		todos,

	});

	return (
		<button className={styles.deleteBtn} onClick={requestDeleteActiveTodo}>
			<img src={deleteImg} className={styles.deleteImg} alt='Удалить'></img>
		</button>
	);
};
