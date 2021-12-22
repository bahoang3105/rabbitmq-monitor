import ArrowIcon from "./ArrowIcon";

const Overview = (props) => {

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'overview' ? '' : 'overview')}>
        <ArrowIcon show={props.showMore === 'overview'} />
        Overview
      </div>
      <div className="modal-detail-body" style={{ height: props.showMore === 'overview' ? 'fit-content' : 0 }}>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Overview;