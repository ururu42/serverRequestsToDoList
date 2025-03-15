import { deleteTodoMock, getTodosMock } from '../mocks';

export const deleteTodoAsync = ({ id }, todos) => {
	return async (dispatch) => {
		try {
			await deleteTodoMock({ id }, todos);
			const todosWithOutDeleteTodo = await getTodosMock();

			dispatch({
				type: 'SET_TODOS_LIST',
				payload: todosWithOutDeleteTodo,
			});
		} catch (error) {
			console.error('Ошибка при удалении todo:', error);
		}
	};
};
