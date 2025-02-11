export const useRequestUpdateActiveTodo = ({
	todos,
	setTodoLists,
	activeTodo,
	todoTitle,
	todoCompleted,
	setActiveTodo,
}) => {
	const requestUpdateActiveTodo = async () => {
		
		const response = await fetch(`http://localhost:3006/tasks/${activeTodo.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todoTitle,
				completed: todoCompleted,
			}),
		});
		const updateTodo = await response.json();
		console.log('Задача обновлена, ответ от сервера:', updateTodo);

		const updatedTodos = todos.map((todo) =>
			todo.id === updateTodo.id ? updateTodo : todo,
		);

		setTodoLists(updatedTodos);
		setActiveTodo(null);
	};

	return {
		requestUpdateActiveTodo,
	};
};
