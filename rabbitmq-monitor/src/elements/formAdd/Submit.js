const Submit = ({ submit, ...props}) => {
  return (
    <div className="form-add-submit" onClick={submit}>Add {props.typeAdd}</div>
  );
}

export default Submit;