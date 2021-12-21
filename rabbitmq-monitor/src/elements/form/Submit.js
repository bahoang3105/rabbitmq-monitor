const Submit = ({ submit, ...props}) => {
  return (
    <div className="form-add-submit" onClick={submit}>{props.submitName}</div>
  );
}

export default Submit;