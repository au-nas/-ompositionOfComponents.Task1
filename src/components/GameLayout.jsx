import styles from '../styles/GameLayout.module.css'
export const GameLayout = ({children}) => {
	return (
	<>
		<h1 className={styles.title}>Крестики-Нолики</h1>
		{children}
	</>
	);
};
