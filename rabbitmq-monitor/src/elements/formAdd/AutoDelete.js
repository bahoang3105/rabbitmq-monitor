import ExplainIcon from './ExplainIcon';

const AutoDelete = ({ autoDelete, setAutoDelete, title }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Auto delete <ExplainIcon title={title} /></label>
      <select className="form-add-select" value={autoDelete} onChange={e => setAutoDelete(e.target.value)}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  );
}

export default AutoDelete;