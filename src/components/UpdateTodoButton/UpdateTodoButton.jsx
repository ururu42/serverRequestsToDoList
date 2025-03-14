import editImg from '../UpdateTodoButton/pen.png';
import styles from '../UpdateTodoButton/UpdateTodoButton.module.css';
import { useDispatch } from 'react-redux';

export const UpdateTodoButton = ({ todo }) => {
	const { id, title, completed } = todo;

	const dispatch = useDispatch();

	const handlerSelectActiveTodo = () => {
		dispatch({
			type: 'SET_ACTIVE_TODO',
			payload: { id, title, completed },
		});
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
