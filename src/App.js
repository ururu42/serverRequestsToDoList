import { Routes, Route } from 'react-router-dom';
import { MainPage } from './components/MainPage/MainPage';
import { TodoCard } from './components/TodoCard/TodoCard';
import { useState } from 'react';
import { useRequestGetTodos } from '../src/components/hooks/useRequestGetTodos.jsx';
import { PageNotFound404 } from './components/PageNotFound404/PageNotFound404.jsx';

export const App = () => {
	const [activeTodo, setActiveTodo] = useState(null);
	const { todos, setTodoLists, isLoading } = useRequestGetTodos();

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<MainPage
							activeTodo={activeTodo}
							setActiveTodo={setActiveTodo}
							todos={todos}
							setTodoLists={setTodoLists}
							isLoading={isLoading}
						/>
					}
				/>
				<Route
					path="/card-todo/:id"
					element={
						<TodoCard
							todos={todos}
							setTodoLists={setTodoLists}
							activeTodo={activeTodo}
							setActiveTodo={setActiveTodo}
						/>
					}
				/>
				<Route path="*" element={<PageNotFound404 />} />
			</Routes>
		</>
	);
};
