const Name = ({ name, setName }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Name</label> 
      <input className="form-add-input" type='text' value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default Name;