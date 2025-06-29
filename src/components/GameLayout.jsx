import styles from '../styles/GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({children}) => {
	return (
	<>
		<h1 className={styles.title}>Крестики-Нолики</h1>
		{children}
	</>
	);
};

GameLayout.PropTypes = {
	children: PropTypes.node
};
