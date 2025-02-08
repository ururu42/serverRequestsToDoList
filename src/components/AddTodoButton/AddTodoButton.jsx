import { useRequestAddNewTodo } from '../hooks/useRequestAddNewTodo';
import { Loader } from '../Loader/Loader';
import addImg from '../AddTodoButton/plus.png';
import styles from '../AddTodoButton/AddTodoButton.module.css';

export const AddTodoButton = ({ refreshTasks, todos, setTodoLists }) => {
	const { isCreating, requestAddNewTodo } = useRequestAddNewTodo({
		refreshTasks,
		todos,
		setTodoLists,
	});

	return (
		<button
			disabled={isCreating ? true : false}
			className={styles.addImgBtn}
			onClick={requestAddNewTodo}
		>
			<img alt="Добавить задачу" src={addImg} className={styles.addImg}></img>
		</button>
	);
};
