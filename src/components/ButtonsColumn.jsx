function ButtonsColumn(props) {
  const { onClick } = props;
  return props.btns.map((btn) => {
    let listClass = '';
    if (btn === '0') {
      listClass = 'zero';
    } else if (btn === '=') {
      listClass = 'equalBtn';
    }
    return (
      <li key={btn} className={listClass}>
        <button onClick={() => { onClick(btn); }} type="button">{btn}</button>
      </li>
    );
  });
}

export default ButtonsColumn;
