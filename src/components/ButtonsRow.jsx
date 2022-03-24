import PropTypes from 'prop-types';
import ButtonsColumn from './ButtonsColumn';

function ButtonsRow(props) {
  const { btns, onClick } = props;
  return (
    <ButtonsColumn btns={btns} onClick={onClick} />
  );
}

ButtonsRow.propTypes = {
  btns: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func,
};

ButtonsRow.defaultProps = { onClick: () => {} };
export default ButtonsRow;
