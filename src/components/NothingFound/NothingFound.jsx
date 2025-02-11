
export const NothingFound = ({ isNothingFound }) => {
	if (isNothingFound) {
		return (
			<>
				<div>По поисковому запросу задач не найдено</div>
			</>
		);
	}
};
