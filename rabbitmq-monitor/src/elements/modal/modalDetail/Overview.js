import { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Overview = (props) => {

  const [show, setShow] = useState(true);
  return (
    <div className="modal-detail-overview">
      <div className="modal-detail-part" onClick={() => setShow(!show)}>
        Overview
        <div style={{ fontSize: 19, marginTop: 1 }}>{show ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</div>
      </div>
      <div className="modal-detail-overview-body" style={{ height: show ? 'fit-content' : 0 }}>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Overview;