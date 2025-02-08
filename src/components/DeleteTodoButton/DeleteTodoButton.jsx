import { useRequestDeleteActiveTodo } from '../hooks/useRequestDeleteActiveTodo';
import styles from '../DeleteTodoButton/DeleteTodoButton.module.css';
import deleteImg from '../DeleteTodoButton/bin.png';

export const DeleteTodoButton = ({ todo, refreshTasks, todos, setTodoLists }) => {
	const { id } = todo;
	// console.log('todos', todos);

	const { requestDeleteActiveTodo } = useRequestDeleteActiveTodo({
		id,
		refreshTasks,
		todos,
		setTodoLists,
	});

	return (
		<button className={styles.deleteBtn} onClick={requestDeleteActiveTodo}>
			<img src={deleteImg} className={styles.deleteImg}></img>
		</button>
	);
};
