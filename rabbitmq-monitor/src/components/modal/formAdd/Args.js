import ExplainIcon from "./ExplainIcon";

const Args = ({ args, setArgs }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Arguments <ExplainIcon title='Input type JSON' /></label>
      <textarea className='form-add-textarea' rows={3} value={args} onChange={e => setArgs(e.target.value)}></textarea>
    </div>
  );
}

export default Args;