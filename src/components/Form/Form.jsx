import { useState } from 'react';
import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';

export const Form = ({ todos, setTodoLists, activeTodo, setActiveTodo, refreshTasks }) => {
	// const [todoInForm, setTodoInForm] = useState({ activeTodo });

	// const task = activeTask;
	const [todoTitle, setTodoTitle] = useState(activeTodo.title);
	const [todoCompleted, setTodoCompleted] = useState(activeTodo.completed);
	// const [taskId, setTaskId] = useState(task.id);

	console.log('activeTodo', activeTodo);
	// console.log('taskTitle', taskTitle, 'taskCompleted', taskCompleted);

	const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
		// todoInForm,
    todos,
    setTodoLists,
		activeTodo,
		todoTitle,
		todoCompleted,
		refreshTasks,
		setActiveTodo,
	});

	const updateActiveTodo = (event) => {
		event.preventDefault();
		requestUpdateActiveTodo();
	};

	// const handlerSetTodoTitle = ({ target }) => {
	// 	// console.log('target', target);
	// 	setTodoTitle(target.value);
	// };

	// const handlerSetInputChecked = ({ target }) => {
	// 	// console.log(target.checked);
	// 	setTodoCompleted(target.checked);
	// };

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

			{/* <input type="hidden" value={task.id}></input> */}
			<button type="submit">Редактировать задачу</button>
		</form>
	);
};
