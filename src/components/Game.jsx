import { GameLayout } from './GameLayout.jsx';
import { Information } from './Information.jsx';
import { Field } from './Field.jsx';
import { useState } from 'react';
import styles from '../styles/Game.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleClickField = (index) => {
		console.log('click', index);
	};

	return (
		<GameLayout>
			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<Field field={field} handleClickField={handleClickField} />
			<button className={styles.restartButton}>Начать заново</button>
		</GameLayout>
	);
};
