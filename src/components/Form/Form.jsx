import { useState } from 'react';
import { useRequestUpdateActiveTodo } from '../hooks/useRequestUpdateActiveTodo';

export const Form = ({ activeTask, setActiveTask, refreshTasks }) => {
	const [task, setTask] = useState(activeTask);

	// const task = activeTask;
	const [taskTitle, setTaskTitle] = useState(task.title);
	const [taskCompleted, setTaskCompleted] = useState(task.completed);
	// const [taskId, setTaskId] = useState(task.id);

	console.log('activeTaskForm', activeTask);
	// console.log('taskTitle', taskTitle, 'taskCompleted', taskCompleted);

	const { requestUpdateActiveTodo } = useRequestUpdateActiveTodo({
		task,
		taskTitle,
		taskCompleted,
		refreshTasks,
		setActiveTask,
	});

	const updateActiveTodo = (event) => {
		event.preventDefault();
		requestUpdateActiveTodo();
	};

	const handlerSetTodoTitle = ({ target }) => {
		// console.log('target', target);
		setTaskTitle(target.value);
	};

	const handlerSetInputChecked = ({ target }) => {
		// console.log(target.checked);
		setTaskCompleted(target.checked);
	};

	return (
		<form onSubmit={updateActiveTodo}>
			<input type="text" value={taskTitle} onChange={handlerSetTodoTitle}></input>

			<input
				type="checkbox"
				name="completed"
				checked={taskCompleted}
				onChange={handlerSetInputChecked}
			></input>

			{/* <input type="hidden" value={task.id}></input> */}
			<button type="submit">Редактировать задачу</button>
		</form>
	);
};
