export const UpdateTodoButton = ({ todo, setActiveTask }) => {
	const { id, title, completed } = todo;

	const handlerSelectActiveTodo = async () => {
		console.log(id, title, completed);
		// setActiveTask(null);
		await new Promise((r) => setTimeout(r));
		setActiveTask({ id, title, completed });
	};

	return <button onClick={handlerSelectActiveTodo}>Редактировать задачу</button>;
};
