import { Field } from './Field';
import styles from '../styles/FieldLayout.module.css';
import PropTypes from 'prop-types';

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

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string),
	handleClickField: PropTypes.func
};
