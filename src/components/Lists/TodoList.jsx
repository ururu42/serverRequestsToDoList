import { React } from 'react';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';
import { Loader } from '../Loader/Loader';
import { BackButton } from '../BackButton/BackButton';
import { NothingFound } from '../NothingFound/NothingFound';
import { useSelector } from 'react-redux';
import {
	selectTodos,
	selectSortedTodo,
	selectIsSorted,
	selectIdBySearchPhrase,
	selectIsNothingFound,
} from '../../selectors';

export const TodoList = ({ isLoading }) => {
	const todos = useSelector(selectTodos);
	const sortedTodo = useSelector(selectSortedTodo);
	const isSorted = useSelector(selectIsSorted);
	const idBySearchPhrase = useSelector(selectIdBySearchPhrase);
	const isNothingFound = useSelector(selectIsNothingFound);

	if (isLoading) {
		return <Loader />;
	}

	if (todos.length === 0) {
		return <div>Список задач пуст</div>;
	}

	const filteredTodos = idBySearchPhrase.length
		? todos.filter(({ id }) => idBySearchPhrase.includes(id))
		: todos;

	const filteredAndSortedTodos = !isSorted ? filteredTodos : sortedTodo;

	return (
		<div className={styles.list}>
			{isNothingFound ? (
				<>
					<NothingFound isNothingFound={isNothingFound} />
				</>
			) : (
				filteredAndSortedTodos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} todos={todos} />
				))
			)}
			{idBySearchPhrase.length || isNothingFound ? <BackButton /> : null}
		</div>
	);
};
