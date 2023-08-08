import PropTypes from "prop-types";

const Button = ({ clicked }) => {
	return (
		<div className="buttons">
			<button
				type="button"
				className="button"
				onClick={clicked}
				value={-1}>
				previous
			</button>
			<button
				type="button"
				className="button"
				onClick={clicked}
				value={+1}>
				next
			</button>
		</div>
	);
};
Button.propTypes = {
	clicked: PropTypes.func
};

export default Button;
