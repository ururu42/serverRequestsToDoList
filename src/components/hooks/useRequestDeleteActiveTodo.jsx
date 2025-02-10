import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestDeleteActiveTodo = ({ id }) => {
	const requestDeleteActiveTodo = async () => {
		const deletedTodoDbRef = ref(db, `tasks/${id}`);

		remove(deletedTodoDbRef).then((response) => {
			console.log('Задача удалена, ответ от сервера:', response);
		});

		
	};

	return {
		requestDeleteActiveTodo,
	};
};
