export const useRequestDeleteActiveTodo = ({ id, refreshTasks, todos, setTodoLists }) => {
	const requestDeleteActiveTodo = async () => {
		console.log(todos);

		const response = await fetch(`http://localhost:3006/tasks/${id}`, {
			method: 'DELETE',
		});
		const deletedTodo = await response.json();
		console.log('Задача удалена, ответ от сервера:', deletedTodo);

		const todosWithOutDeleteTodo = todos.filter((todo) => todo.id !== id);
		setTodoLists(todosWithOutDeleteTodo);
	};

	return {
		requestDeleteActiveTodo,
	};
};
