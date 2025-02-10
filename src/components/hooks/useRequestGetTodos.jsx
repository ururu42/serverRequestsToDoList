import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestGetTodos = () => {
	const [todos, setTodoLists] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const fetchTasks = async () => {
		const todoListDbRef = ref(db, 'tasks');

		return onValue(todoListDbRef, (snapshot) => {
			const loadedTasks = snapshot.val() || [];

      const loadedTasksArray = Object.entries(loadedTasks).map(([id, task]) => ({ id, ...task }))

			setTodoLists(loadedTasksArray);
			setIsLoading(false);
		});
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	return {
		todos,
		setTodoLists,
		isLoading,
	};
};
