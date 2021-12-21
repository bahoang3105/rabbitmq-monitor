const Payload = ({ payload, setPayload }) => {
  return (
    <div className="form-add-row">
      <label className="form-add-label">Payload</label>
      <textarea className='form-add-textarea' rows={3} value={payload} onChange={e => setPayload(e.target.value)}></textarea>
    </div>
  );
}

export default Payload;