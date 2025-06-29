import { Information } from './Information';
import styles from '../styles/InformationLayout.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
	let infoMessage = '';

	if(isDraw) {
        infoMessage='Ничья!';
	} else if (isGameEnded) {
		infoMessage = `Победа: ${currentPlayer}`;
	} else {
		infoMessage = `Ходит: ${currentPlayer}`;
	}

	return <div className={styles.info}>{infoMessage}</div>
};

Information.PropTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']),
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool
};
