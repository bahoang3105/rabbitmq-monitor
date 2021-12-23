import ArrowIcon from "../ArrowIcon";

const OverviewChannel = (props) => {
  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'overview' ? '' : 'overview')}>
        <ArrowIcon show={props.showMore === 'overview'} />
        Overview
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'overview' ? 'fit-content' : 0 }}>
        <div className="overview-body-part font-size-15">Message rates</div>
        <div className="overview-detail">
          <div>Publish</div>
          <div>{props.data?.message_stats?.publish_details?.rate ? props.data.message_stats?.publish_details?.rate + '/s' : '0.00/s'}</div>
        </div>
        <div className="overview-detail">
          <div>Publisher confirm</div>
          <div>{props.data?.message_stats?.confirm_details?.rate ? props.data.message_stats?.confirm_details?.rate + '/s' : '0.00/s'}</div>
        </div>
        <div className="overview-detail">
          <div>Unroutable (return)</div>
          <div>{props.data?.message_stats?.return_unroutable?.rate ? props.data.message_stats?.return_unroutable_details?.rate + '/s' : '0.00/s'}</div>
        </div>
        <div className="overview-detail">
          <div>Unroutabel (drop)</div>
          <div>{props.data?.message_stats?.drop_unroutable_details?.rate ? props.data.message_stats?.drop_unroutable_details?.rate + '/s' : '0.00/s'}</div>
        </div>
        <div className="overview-body-part font-size-15">Details</div>
        <div className="overview-detail">
          <div>Connection</div>
          <div>{props.data?.connection_details?.peer_host}:{props.data?.connection_details?.peer_port}</div>
        </div>
        <div className="overview-detail">
          <div>Username</div>
          <div>{props.data.user_who_performed_action}</div>
        </div>
        <div className="overview-detail">
          <div>Mode</div>
          <div></div>
        </div>
        <div className="overview-detail">
          <div>State</div>
          <div>{props.data.state}</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewChannel;