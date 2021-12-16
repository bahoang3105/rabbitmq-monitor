import ExplainIcon from "./ExplainIcon";

const Internal = ({ internal, setInternal }) => {
  return (
    <div className="form-add-row" >
      <label className="form-add-label">Internal <ExplainIcon title='If yes, clients cannot publish to this exchange directly. It can only be used with exchange to exchange bindings.' /></label>
      <select className="form-add-select" value={internal} onChange={e => setInternal(e.target.value)}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
    </div>
  );
}

export default Internal;