const Durable = ({ durability, setDurability }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Durability</label>
      <select className="form-add-select" value={durability} onChange={e => setDurability(e.target.value)}>
        <option value={true}>Durable</option>
        <option value={false}>Transient</option>
      </select>
    </div>
  );
}

export default Durable;