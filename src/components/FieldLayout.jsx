import { Field } from './Field';
import styles from '../styles/FieldLayout.module.css';

export const FieldLayout = ({ field, handleClickField }) => {
	const renderedCells = field.map((cell, index) => (
		<button
			key={index}
			className={styles.cellButton}
			onClick={() => handleClickField(index)}
		>
			{cell}
		</button>
	));

	return <div className={styles.fieldGrid}>{renderedCells}</div>;
};
