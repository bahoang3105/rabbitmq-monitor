import ArrowIcon from "./ArrowIcon";

const Consumer = (props) => {
  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'consumer' ? '' : 'consumer')}>
        <ArrowIcon show={props.showMore === 'consumer'} />
        Consumers({props.data.consumer_count})
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'consumer' ? 'fit-content' : 0 }}>
        {props.data.consumer_count === 0 && <div className="overview-body-part font-size-15">... no consumers ... </div>}
      </div>
    </div>
  );
}

export default Consumer;