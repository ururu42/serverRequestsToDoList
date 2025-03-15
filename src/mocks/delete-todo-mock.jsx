// import { useSelector, useDispatch } from 'react-redux';
// import { selectTodos } from '../../selectors';

export const deleteTodoMock = async ({ id }, todos) => {
	try {
		const response = await fetch(`http://localhost:3006/tasks/${id}`, {
			method: 'DELETE',
		});
		const deletedTodo = await response.json();
		console.log('Задача удалена, ответ от сервера:', deletedTodo);

		const todosWithOutDeleteTodo = todos.filter((todo) => todo.id !== id);

		return todosWithOutDeleteTodo;
	} catch (error) {
		console.error('Ошибка при удалении todo:', error);
		throw error;
	}
};
