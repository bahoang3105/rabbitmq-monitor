import ArrowIcon from "../ArrowIcon";

const OverviewConnection = (props) => {

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'overview' ? '' : 'overview')}>
        <ArrowIcon show={props.showMore === 'overview'} />
        Overview
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'overview' ? 'fit-content' : 0 }}>
        <div className="overview-body-part font-size-15">Data rates</div>
        <div className="overview-detail">
          <div>From client</div>
          <div>{props.data?.recv_oct_details?.rate ? props.data.recv_oct_details?.rate + ' iB/s' : '0.0 iB/s'}</div>
        </div>
        <div className="overview-detail">
          <div>To client</div>
          <div>{props.data?.send_oct_details?.rate ? props.data.send_oct_details?.rate + ' iB/s' : '0.0 iB/s'}</div>
        </div>
        <div className="overview-body-part font-size-15">Details</div>
        <div className="overview-detail-connection">
          <div>
            <div className="overview-detail">
              <div>Username</div>
              <div>{props.data.user_who_performed_action}</div>
            </div>
            <div className="overview-detail">
              <div>Protocol</div>
              <div>{props.data.protocol}</div>
            </div>
            <div className="overview-detail">
              <div>Connect at</div>
              <div>{new Date(parseInt(props.data.connected_at)).toLocaleString()}</div>
            </div>
            <div className="overview-detail">
              <div>Authentication</div>
              <div>{props.data.auth_mechanism}</div>
            </div>
          </div>
          <div>
            <div className="overview-detail">
              <div>State</div>
              <div>{props.data.state}</div>
            </div>
            <div className="overview-detail">
              <div>Heartbeat</div>
              <div>{props.data.timeout}s</div>
            </div>
            <div className="overview-detail">
              <div>Frame max</div>
              <div>{props.data.frame_max} bytes</div>
            </div>
            <div className="overview-detail">
              <div>Channel limit</div>
              <div>{props.data.channel_max} channels</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewConnection;