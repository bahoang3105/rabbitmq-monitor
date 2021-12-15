const CountMessages = ({ data }) => {
  return (
    <>
      <div style={{ marginTop: 20 }}>Ready</div>
      <div style={{ marginTop: 20 }}>Unacked</div>
      <div style={{ marginTop: 20 }}>Total</div>
      <div className="count-message">{data.ready}</div>
      <div className="count-message">{data.unacked}</div>
      <div className="count-message">{data.total}</div>
    </>
  );
}

export default CountMessages;