import { useState } from 'react';

export const useRequestAddNewTodo = ({ refreshTasks, todos, setTodoLists }) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddNewTodo = async () => {
		setIsCreating(true);

		const newTask = prompt('Введите название задачи');

		const response = await fetch('http://localhost:3006/tasks', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTask,
				completed: false,
			}),
		});

		const newTodoFromServer = await response.json();
		console.log('Задача добавлена, ответ сервера:', newTodoFromServer);

		setTodoLists([...todos, newTodoFromServer]);
		setIsCreating(false);

		// .then((rawResponse) => rawResponse.json())
		// .then((response) => {
		// 	console.log('Задача добавлена, ответ сервера:', response);
		// 	setTodoLists([...todos, response]);
		// })
		// .finally(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddNewTodo,
	};
};
