import { useRequestDeleteActiveTodo } from '../hooks/useRequestDeleteActiveTodo';
import styles from '../DeleteTodoButton/DeleteTodoButton.module.css';
import deleteImg from '../DeleteTodoButton/bin.png';

import { Link } from 'react-router-dom';

export const DeleteTodoButton = ({ todo, todos, setTodoLists }) => {
	const { id } = todo;

	const { requestDeleteActiveTodo } = useRequestDeleteActiveTodo({
		id,
		todos,
		setTodoLists,
	});

	return (
		<Link to={'/'}>
			<button className={styles.deleteBtn} onClick={requestDeleteActiveTodo}>
				<img src={deleteImg} className={styles.deleteImg} alt="Удалить"></img>
			</button>
		</Link>
	);
};
