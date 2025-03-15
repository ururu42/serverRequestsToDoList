export const addTodoMock = async (newTodo) => {
	try {
		const response = await fetch('http://localhost:3006/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTodo,
				completed: false,
			}),
		});

		const newTodoFromServer = await response.json();
		console.log('Задача добавлена, ответ сервера:', newTodoFromServer);
		return newTodoFromServer;
	} catch (error) {
		console.error('Ошибка при добавлении todo:', error);
		throw error;
	}
};
