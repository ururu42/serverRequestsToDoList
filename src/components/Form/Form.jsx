import { useState } from 'react';
// import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';
import { selectActiveTodo, selectTodos } from '../../selectors';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodoAsync } from '../../actions/updateTodoAsync';

export const Form = () => {
	const activeTodo = useSelector(selectActiveTodo);
	const todos = useSelector(selectTodos);

	const [todoTitle, setTodoTitle] = useState(activeTodo.title);
	const [todoCompleted, setTodoCompleted] = useState(activeTodo.completed);

	const dispatch = useDispatch();

	// const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
	// 	activeTodo,
	// 	todoTitle,
	// 	todoCompleted,
	// });

	const updateActiveTodo = (event) => {
		event.preventDefault();
		// requestUpdateActiveTodo();
		dispatch(updateTodoAsync({ activeTodo, todoTitle, todoCompleted }, todos));
	};

	return (
		<form onSubmit={updateActiveTodo}>
			<input
				type="text"
				value={todoTitle}
				onChange={(event) => {
					setTodoTitle(event.target.value);
				}}
			></input>

			<input
				type="checkbox"
				name="completed"
				checked={todoCompleted}
				onChange={({ target }) => {
					setTodoCompleted(target.checked);
				}}
			></input>
			<button type="submit">Сохранить изменения</button>
		</form>
	);
};
