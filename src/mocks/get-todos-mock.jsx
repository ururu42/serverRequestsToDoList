export const getTodosMock = async () => {
	try {
		const response = await fetch('http://localhost:3006/tasks');
		const todos = await response.json();

		return todos;
	} catch (error) {
		console.error('Ошибка в загрузке todos:', error);
		throw error;
	}
};
