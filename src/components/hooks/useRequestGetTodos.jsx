// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// export const useRequestGetTodos = () => {

// 	const [isLoading, setIsLoading] = useState(false);

// 	const dispatch = useDispatch();

// 	const fetchTasks = async () => {
// 		if (isLoading) return;

// 		setIsLoading(true);

// 		const response = await fetch('http://localhost:3006/tasks');
// 		const todos = await response.json();

// 		dispatch({
// 			type: 'SET_TODOS_LIST',
// 			payload: todos,
// 		});

// 		setIsLoading(false);
// 	};

// 	useEffect(() => {
// 		fetchTasks();
// 	}, []);

// 	return {
// 		isLoading,
// 	};
// };
