// import { useRequestAddNewTodo } from '../hooks/useRequestAddNewTodo';
// import { Loader } from '../Loader/Loader';
import addImg from '../AddTodoButton/plus.png';
import styles from '../AddTodoButton/AddTodoButton.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../../actions';

export const AddTodoButton = () => {
	// const { isCreating, requestAddNewTodo } = useRequestAddNewTodo({});
	const [isCreating, setIsCreating] = useState(false);
	const dispatch = useDispatch();

	const handlerAddNewTodo = () => {
		setIsCreating(true);
		const newTodo = prompt('Введите название задачи');

		dispatch(addTodoAsync(newTodo));

		setIsCreating(false);
	};

	return (
		<button
			disabled={isCreating ? true : false}
			className={styles.addImgBtn}
			onClick={handlerAddNewTodo}
		>
			<img alt="Добавить задачу" src={addImg} className={styles.addImg}></img>
		</button>
	);
};
