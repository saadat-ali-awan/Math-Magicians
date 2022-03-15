import PropTypes from 'prop-types';
import ButtonsColumn from './ButtonsColumn';

function ButtonsRow(props) {
  const { btns } = props;
  return (
    <ButtonsColumn btns={btns} />
  );
}

ButtonsRow.propTypes = { btns: PropTypes.arrayOf(PropTypes.string).isRequired };

export default ButtonsRow;
