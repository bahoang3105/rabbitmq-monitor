const InputText = ({ name, text, setText }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">{name}</label> 
      <input className="form-add-input" type='text' value={text} onChange={e => setText(e.target.value)} />
    </div>
  );
}

export default InputText;