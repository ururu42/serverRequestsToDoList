import { useState } from 'react';

export const useRequestAddNewTodo = ({ refreshTasks, todos, setTodoLists }) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddNewTodo = () => {
		setIsCreating(true);

		const newTask = prompt('Введите название задачи');

		fetch('http://localhost:3006/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTask,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача добавлена, ответ сервера:', response);
				setTodoLists([...todos, response]);
			})
			.finally(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddNewTodo,
	};
};
