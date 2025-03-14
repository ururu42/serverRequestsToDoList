export const initialTodosState = {
	activeTodo: null,
	todos: [],
};

export const todosReducer = (state = initialTodosState, action) => {
	switch (action.type) {
		//cases
		case 'SET_ACTIVE_TODO': {
			return {
				...state,
				activeTodo: action.payload,
			};
		}

		case 'SET_TODOS_LIST': {
			return {
				...state,
				todos: action.payload,
			};
		}

		default:
			return state;
	}
};
