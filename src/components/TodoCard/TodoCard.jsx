import styles from '../TodoCard/TodoCard.module.css';
import checkImg from '../Lists/check-mark.png';
import checkEmpty from '../Lists/free-icon-square-3905918.png';
import { useParams, Link } from 'react-router-dom';
import backButtonImg from './arrow.png';

import { DeleteTodoButton } from '../DeleteTodoButton/DeleteTodoButton';
import { UpdateTodoButton } from '../UpdateTodoButton/UpdateTodoButton';
import { Form } from '../Form/Form.jsx';
import { useState } from 'react';

import { NonExistentTask404 } from '../NonExistentTask404/NonExistentTask404.jsx';

export const TodoCard = ({ todos, setTodoLists, activeTodo, setActiveTodo }) => {
	const params = useParams();
	const [isFormForEditing, setIsFormForEditing] = useState(false);

	const [isNonExistentTask, setIsNonExistentTask] = useState(false);

	const fetchActiveTodo = async () => {
		try {
			const response = await fetch(`http://localhost:3006/tasks/${params.id}`);
			if (!response.ok) {
				setIsNonExistentTask(true);
				throw new Error('Ошибка в получении данных о задаче');
			}
			const fetchActiveTodo = await response.json();
			console.log('fetchActiveTodo', fetchActiveTodo);
			setActiveTodo(fetchActiveTodo);
		} catch (error) {
			console.log(error);
		}
	};

	if (!activeTodo) {
		fetchActiveTodo();
	}

	return (
		<>
			{isNonExistentTask ? <NonExistentTask404 /> : null}
			{activeTodo ? (
				<>
					<div>Активная задача</div>
					<div className={styles.todoItem}>
						<div className={styles.todoText} key={activeTodo.id}>
							{activeTodo.completed ? (
								<img
									className={styles.checkImg}
									src={checkImg}
									alt="Выполненно"
								></img>
							) : (
								<img
									className={styles.checkEmpty}
									src={checkEmpty}
									alt="Не выполненно"
								></img>
							)}
							{activeTodo.title}
						</div>
						<DeleteTodoButton
							todos={todos}
							setTodoLists={setTodoLists}
							todo={activeTodo}
						/>
						<UpdateTodoButton
							todo={activeTodo}
							setActiveTodo={setActiveTodo}
							isFormForEditing={isFormForEditing}
							setIsFormForEditing={setIsFormForEditing}
						/>
					</div>
					{isFormForEditing ? (
						<Form
							todos={todos}
							setTodoLists={setTodoLists}
							activeTodo={activeTodo}
							setActiveTodo={setActiveTodo}
							setIsFormForEditing={setIsFormForEditing}
						/>
					) : null}
				</>
			) : null}
			<button className={styles.backBtn}>
				<Link to={'/'}>
					<img
						className={styles.backButtonImg}
						src={backButtonImg}
						alt="Назад"
					></img>
				</Link>
			</button>
		</>
	);
};
