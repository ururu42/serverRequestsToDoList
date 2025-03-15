// import { useSelector, useDispatch } from 'react-redux';
// import { selectTodos } from '../../selectors';

// export const useRequestDeleteActiveTodo = ({ id }) => {
// 	const todos = useSelector(selectTodos);
// 	const dispatch = useDispatch();

// 	const requestDeleteActiveTodo = async () => {
// 		const response = await fetch(`http://localhost:3006/tasks/${id}`, {
// 			method: 'DELETE',
// 		});
// 		const deletedTodo = await response.json();
// 		console.log('Задача удалена, ответ от сервера:', deletedTodo);

// 		const todosWithOutDeleteTodo = todos.filter((todo) => todo.id !== id);

// 		dispatch({
// 			type: 'SET_TODOS_LIST',
// 			payload: todosWithOutDeleteTodo,
// 		});
// 	};

// 	return {
// 		requestDeleteActiveTodo,
// 	};
// };
