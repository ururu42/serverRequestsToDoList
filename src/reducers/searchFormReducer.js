export const initialSearchFormState = {
	idBySearchPhrase: [],
	isNothingFound: false,
};

export const searchFormReducer = (state = initialSearchFormState, action) => {
	switch (action.type) {
		case 'SET_ID_BY_SEARCH_PHRASE': {
			return {
				...state,
				idBySearchPhrase: action.payload,
			};
		}
		case 'SET_IS_NOTHING_FOUND': {
			return {
				...state,
				isNothingFound: action.payload,
			};
		}
		default:
			return state;
	}
};
