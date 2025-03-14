import { useState } from 'react';
import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';
import { selectActiveTodo } from '../../selectors';
import { useSelector } from 'react-redux';

export const Form = () => {
	const activeTodo = useSelector(selectActiveTodo);

	const [todoTitle, setTodoTitle] = useState(activeTodo.title);
	const [todoCompleted, setTodoCompleted] = useState(activeTodo.completed);


	const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
		activeTodo,
		todoTitle,
		todoCompleted,
	});

	const updateActiveTodo = (event) => {
		event.preventDefault();
		requestUpdateActiveTodo();
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
