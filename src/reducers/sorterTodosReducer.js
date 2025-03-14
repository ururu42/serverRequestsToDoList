export const initialSorterTodosState = {
	sortedTodo: [],
	isSorted: false,
  
};

export const sorterReducer = (state = initialSorterTodosState, action) => {
	switch (action.type) {
		case 'SET_SORTED_TODO': {
			return {
				...state,
				sortedTodo: action.payload,
			};
		}
		case 'SET_IS_SORTED': {
			return {
				...state,
				isSorted: action.payload,
			};
		}
		default:
			return state;
	}
};
