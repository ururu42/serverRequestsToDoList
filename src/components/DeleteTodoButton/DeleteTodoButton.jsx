import styles from '../DeleteTodoButton/DeleteTodoButton.module.css';
import deleteImg from '../DeleteTodoButton/bin.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoAsync } from '../../actions/deleteTodoAsync';
import { selectTodos } from '../../selectors';

export const DeleteTodoButton = ({ todo }) => {
	const { id } = todo;
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

	const handlerDeleteTodo = () => {
		dispatch(deleteTodoAsync({ id }, todos));
	};

	return (
		<button className={styles.deleteBtn} onClick={handlerDeleteTodo}>
			<img src={deleteImg} className={styles.deleteImg} alt="Удалить"></img>
		</button>
	);
};
