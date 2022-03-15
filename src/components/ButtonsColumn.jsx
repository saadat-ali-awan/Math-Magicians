function ButtonsColumn(props) {
  return props.btns.map((btn) => {
    let listClass = '';
    if (btn === '0') {
      listClass = 'zero';
    } else if (btn === '=') {
      listClass = 'equalBtn';
    }
    return (
      <li key={btn} className={listClass}>
        {btn}
      </li>
    );
  });
}

export default ButtonsColumn;
