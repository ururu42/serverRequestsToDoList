import { useState, useEffect } from 'react';

export const useRequestGetTodos = (refreshTasksFlag) => {
	const [todos, setTodoLists] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchTasks = async () => {
		if (isLoading) return;

		setIsLoading(true);

		const response = await fetch('http://localhost:3006/tasks');
    const todos = await response.json()
		setTodoLists(todos);

		setIsLoading(false);
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
