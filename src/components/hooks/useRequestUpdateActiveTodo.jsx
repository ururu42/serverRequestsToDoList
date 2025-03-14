import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../selectors';

export const useRequestUpdateActiveTodo = ({ activeTodo, todoTitle, todoCompleted }) => {
	const dispatch = useDispatch();
	const todos = useSelector(selectTodos);

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

		dispatch({
			type: 'SET_TODOS_LIST',
			payload: updatedTodos,
		});
		dispatch({
			type: 'SET_ACTIVE_TODO',
			payload: null,
		});
	};

	return {
		requestUpdateActiveTodo,
	};
};
