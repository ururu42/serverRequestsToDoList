import { useRequestDeleteActiveTodo } from '../hooks/useRequestDeleteActiveTodo';

export const DeleteTodoButton = ({ todo, refreshTasks }) => {
	const { id } = todo;

	const { requestDeleteActiveTodo } = useRequestDeleteActiveTodo({
		id,
		refreshTasks,
	});

	return <button onClick={requestDeleteActiveTodo}>Удалить задачу</button>;
};
