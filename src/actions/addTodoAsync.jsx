import { getTodosMock, addTodoMock } from '../mocks';

export const addTodoAsync = (newTodo) => {
	return async (dispatch) => {
		try {
			await addTodoMock(newTodo);
			const updatedTodos = await getTodosMock();

			dispatch({
				type: 'SET_TODOS_LIST',
				payload: updatedTodos,
			});
		} catch (error) {
			console.error('Ошибка при добалении todo:', error);
		}
	};
};
