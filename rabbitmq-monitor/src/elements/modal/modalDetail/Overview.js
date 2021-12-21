import { useState } from "react";
import ArrowIcon from "./ArrowIcon";

const Overview = (props) => {

  const [show, setShow] = useState(true);
  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => setShow(!show)}>
        <ArrowIcon show={show} />
        Overview
      </div>
      <div className="modal-detail-body" style={{ height: show ? 'fit-content' : 0 }}>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Overview;