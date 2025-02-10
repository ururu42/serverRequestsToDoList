import { useState } from 'react';
import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';

export const Form = ({ activeTodo, setActiveTodo }) => {
	const [todoTitle, setTodoTitle] = useState(activeTodo[1].title);
	const [todoCompleted, setTodoCompleted] = useState(activeTodo[1].completed);

	const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
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
