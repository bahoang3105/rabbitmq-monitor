import ArrowIcon from "../ArrowIcon";

const OverviewExchange = (props) => {
  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'overview' ? '' : 'overview')}>
        <ArrowIcon show={props.showMore === 'overview'} />
        Overview
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'overview' ? 'fit-content' : 0 }}>
        <div className="overview-body-part font-size-15">Message rates</div>
        <div className="overview-detail">
          <div>Message rates in</div>
          <div>{props.data?.message_stats?.publish_in_details?.rate ? props.data.message_stats?.publish_in_details?.rate + '/s' : '0.0/s'}</div>
        </div>
        <div className="overview-detail">
          <div>Message rates out</div>
          <div>{props.data?.message_stats?.publish_out_details?.rate ? props.data.message_stats?.publish_out_details?.rate + '/s' : '0.0/s'}</div>
        </div>
        <div className="overview-body-part font-size-15">Details</div>
        <div className="overview-detail">
          <div>Type</div>
          <div>{props.data.type}</div>
        </div>
        <div className="overview-detail">
          <div>Durable</div>
          <div>{props.data.durable ? 'true' : 'false'}</div>
        </div>
        <div className="overview-detail">
          <div>Auto delete</div>
          <div>{props.data.auto_delete ? 'true' : 'false'}</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewExchange;