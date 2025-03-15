import { updateTodoMock, getTodosMock } from '../mocks';

export const updateTodoAsync = ({ activeTodo, todoTitle, todoCompleted }, todos) => {
	return async (dispatch) => {
		try {
			await updateTodoMock({ activeTodo, todoTitle, todoCompleted }, todos);
			const updatedTodos = await getTodosMock();

			dispatch({
				type: 'SET_TODOS_LIST',
				payload: updatedTodos,
			});
			dispatch({
				type: 'SET_ACTIVE_TODO',
				payload: null,
			});
		} catch (error) {
			console.error('Ошибка при изменении todo:', error);
		}
	};
};
