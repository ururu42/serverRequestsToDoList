export const useRequestDeleteActiveTodo = ({ id, refreshTasks }) => {


	const requestDeleteActiveTodo = () => {
		fetch(`http://localhost:3006/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена, ответ от сервера:', response);
				refreshTasks();
			});
	};

	return {
		requestDeleteActiveTodo,
	};
};
