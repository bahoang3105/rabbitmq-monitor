const Type = ({ type, setType, types }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Type</label>
      <select className="form-add-select" value={type} onChange={e => setType(e.target.value)}>
        {types.map(type => (<option key={type} value={type}>{type}</option>))}
      </select>
    </div>
  );
}

export default Type;