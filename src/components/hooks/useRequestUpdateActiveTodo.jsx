import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const useRequestUpdateActiveTodo = ({
	activeTodo,
	todoTitle,
	todoCompleted,
	setActiveTodo,
}) => {
	const requestUpdateActiveTodo = async () => {
		const updateTaskDbRef = ref(db, `tasks/${activeTodo[0]}`);

		set(updateTaskDbRef, {
			title: todoTitle,
			completed: todoCompleted,
		}).then((response) => {
			console.log('Задача обновлена, ответ от сервера:', response);
		});

		setActiveTodo(null);
	};

	return {
		requestUpdateActiveTodo,
	};
};
