import { getTodosMock } from '../mocks';

export const getTodosAsync = async (dispatch) => {
	try {
		const loadedTodos = await getTodosMock();

		dispatch({
			type: 'SET_TODOS_LIST',
			payload: loadedTodos,
		});
	} catch (error) {
		console.error('Ошибка в загрузке todos:', error);
		throw error;
	}
};
