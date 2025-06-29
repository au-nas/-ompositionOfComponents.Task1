import { Information } from './Information';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let infoMessage = '';

	if(isDraw) {
        infoMessage='Ничья!';
	} else if (isGameEnded) {
		infoMessage = `Победа: ${currentPlayer}`;
	} else {
		infoMessage = `Ходит: ${currentPlayer}`;
	}

	return <div>{infoMessage}</div>
};
