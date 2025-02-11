import { useState } from 'react';
import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';

export const Form = ({
	todos,
	setTodoLists,
	activeTodo,
	setActiveTodo,

}) => {

	const [todoTitle, setTodoTitle] = useState(activeTodo.title);
	const [todoCompleted, setTodoCompleted] = useState(activeTodo.completed);

	const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
		todos,
		setTodoLists,
		activeTodo,
		todoTitle,
		todoCompleted,
		setActiveTodo,
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
				onChange={({ target }) => {
					setTodoTitle(target.value);
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
