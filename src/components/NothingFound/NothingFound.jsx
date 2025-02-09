import { BackButton } from '../BackButton/BackButton';

export const NothingFound = ({ isNothingFound, setIsNothingFound }) => {
	if (isNothingFound) {
		return (
			<>
				<div>По поисковому запросу задач не найдено</div>
				{/* <BackButton /> */}
			</>
		);
	}

	// return <div>По поисковому запросу задач не найдено</div>;
};
