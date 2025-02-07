export const useRequestUpdateActiveTodo = ({
	task,
	taskTitle,
	taskCompleted,
	refreshTasks,
	setActiveTask,
}) => {
	const requestUpdateActiveTodo = () => {
		console.log('taskTitle', taskTitle, 'taskCompleted', taskCompleted);

		fetch(`http://localhost:3006/tasks/${task.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: taskTitle,
				completed: taskCompleted,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача обновлена, ответ от сервера:', response);
				refreshTasks();
			})
			.finally(() => {
				setActiveTask(null);
			});
	};

	return {
		requestUpdateActiveTodo,
	};
};
