import ArrowIcon from "./ArrowIcon";

const ClientProperties = (props) => {
  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'client properties' ? '' : 'client properties')}>
        <ArrowIcon show={props.showMore === 'client properties'} />
        Client properties
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'client properties' ? 'fit-content' : 0 }}>
        <div className="client-properties-detail">
          <div className="client-property">capabilities</div>
          <div>
            <div className="capabilities">
              <div className="capability">authentication_failure_close:</div>
              <div>{props.data?.capabilities?.authentication_failure_close ? 'true' : 'false'}</div>
            </div>
            <div className="capabilities">
              <div className="capability">basis.nack:</div>
              <div>{props.data?.capabilities?.["basic.nack"] ? 'true' : 'false'}</div>
            </div>
            <div className="capabilities">
              <div className="capability">connection.blocked:</div>
              <div>{props.data?.capabilities?.["connection.blocked"] ? 'true' : 'false'}</div>
            </div>
            <div className="capabilities">
              <div className="capability">consumer_cancel_notify:</div>
              <div>{props.data?.capabilities?.consumer_cancel_notify ? 'true' : 'false'}</div>
            </div>
            <div className="capabilities">
              <div className="capability">exchange_exchange_bindings:</div>
              <div>{props.data?.capabilities?.exchange_exchange_bindings ? 'true' : 'false'}</div>
            </div>
            <div className="capabilities">
              <div className="capability">publisher_confirms:</div>
              <div>{props.data?.capabilities?.publisher_confirms ? 'true' : 'false'}</div>
            </div>
          </div>
        </div>
        <div className="client-properties-detail">
          <div className="client-property" style={{ paddingTop: 10 }}>information</div>
          <a style={{ paddingTop: 10 }} href={props.data?.information} target={"_blank"} rel="noreferrer">{props.data?.information}</a> 
        </div>
        <div className="client-properties-detail">
          <div className="client-property">platform</div>
          <div>{props.data?.platform}</div> 
        </div>
        <div className="client-properties-detail">
          <div className="client-property">product</div>
          <div>{props.data?.product}</div> 
        </div>
        <div className="client-properties-detail">
          <div className="client-property">version</div>
          <div>{props.data?.version}</div> 
        </div>
      </div>
    </div>
  );
}

export default ClientProperties;