// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectTodos } from '../../selectors';

// export const useRequestAddNewTodo = () => {
// 	const [isCreating, setIsCreating] = useState(false);
// 	const todos = useSelector(selectTodos);
// 	const dispatch = useDispatch();

// 	const requestAddNewTodo = async () => {
// 		setIsCreating(true);

// 		const newTask = prompt('Введите название задачи');

// 		const response = await fetch('http://localhost:3006/tasks', {
// 			method: 'POST',
// 			headers: { 'Content-Type': 'application/json;charset=utf-8' },
// 			body: JSON.stringify({
// 				title: newTask,
// 				completed: false,
// 			}),
// 		});

// 		const newTodoFromServer = await response.json();
// 		console.log('Задача добавлена, ответ сервера:', newTodoFromServer);

// 		dispatch({
// 			type: 'SET_TODOS_LIST',
// 			payload: [...todos, newTodoFromServer],
// 		});
// 		setIsCreating(false);
// 	};

// 	return {
// 		isCreating,
// 		requestAddNewTodo,
// 	};
// };
