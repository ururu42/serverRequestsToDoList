import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../firebase.js';

export const useRequestAddNewTodo = () => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddNewTodo = async () => {
		setIsCreating(true);

		const tasksDbRef = ref(db, 'tasks');

		const newTask = prompt('Введите название задачи');

		push(tasksDbRef, {
			title: newTask,
			completed: false,
		}).then((response) => {
			console.log('Задача добавлена, ответ сервера:', response);
		});

		setIsCreating(false);
	};

	return {
		isCreating,
		requestAddNewTodo,
	};
};
