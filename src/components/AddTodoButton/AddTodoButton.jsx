import { useRequestAddNewTodo } from '../hooks/useRequestAddNewTodo';
import { Loader } from '../Loader/Loader';

export const AddTodoButton = ({ refreshTasks, todos, setTodoLists }) => {
	const { isCreating, requestAddNewTodo } = useRequestAddNewTodo({ refreshTasks, todos, setTodoLists });

	if (isCreating) {
		return <button disabled>Добавить задачу</button>;
	}

	return <button onClick={requestAddNewTodo}>Добавить задачу</button>;
};
