import { useContext } from 'react';
import { TodosContext } from '../../Context/todosContex';

export const useRequestDeleteActiveTodo = ({ id, todos }) => {
	const { setTodoLists } = useContext(TodosContext);
	const requestDeleteActiveTodo = async () => {
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
