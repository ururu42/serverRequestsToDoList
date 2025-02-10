import { useRequestDeleteActiveTodo } from '../hooks/useRequestDeleteActiveTodo';
import styles from '../DeleteTodoButton/DeleteTodoButton.module.css';
import deleteImg from '../DeleteTodoButton/bin.png';

export const DeleteTodoButton = ({ id }) => {
	const { requestDeleteActiveTodo } = useRequestDeleteActiveTodo({
		id,
	});

	return (
		<button className={styles.deleteBtn} onClick={requestDeleteActiveTodo}>
			<img src={deleteImg} className={styles.deleteImg} alt="Удалить"></img>
		</button>
	);
};
