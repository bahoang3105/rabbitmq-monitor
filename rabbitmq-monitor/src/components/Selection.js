const Selection = (props) => {
  return (
    <div className="selection-checkbox">
      <label className="switch">
        <input type="checkbox" checked={props.value} onChange={() => props.onChange(!props.value)} />
        <span className={`slider round ${props.id}`}></span>
      </label>
      <div></div>
      <div className="checkbox-name">{props.name}</div>
    </div>
  );
}

export default Selection;