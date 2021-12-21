import { useState } from "react";
import { deleteAPI } from "../../../api";
import ArrowIcon from "./ArrowIcon";

const Delete = (props) => {
  const [show, setShow] = useState(false);

  const delElement = async () => {
    if(window.confirm('Are you sure? This object cannot be recovered after deletion.')) {
      await deleteAPI('/' + props.type + 's/%2F/' + props.name);
      props.setShow(false);
    }
  }

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => setShow(!show)}>
        <ArrowIcon show={show} />
        Delete this {props.type}
      </div>
      <div className="modal-detail-body" style={{ height: show ? 'fit-content' : 0 }}>
        <div className="delete-button" onClick={delElement}>
          Delete
        </div>
      </div>
    </div>
  );
}

export default Delete;