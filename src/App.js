import { useState, useEffect } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [todoLists, setTodoLists] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loaderData) => loaderData.json())
			.then((loaderTodoLists) => setTodoLists(loaderTodoLists))
			.finally(() => setIsLoading(false));
	}, []);

	console.log(todoLists);

	return (
		<div className={styles.аpp}>
			{isLoading ? (
				<div className={styles.loader}></div>
			) : (
				todoLists.map(({ id, title, completed }) => (
					<div className={styles.todoBlock} key={id}>
						{title} - {completed ? "выполненно" : "не завершено"}
					</div>
        ))
			)}
		</div>
	);
};
