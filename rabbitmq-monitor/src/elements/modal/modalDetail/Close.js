import { InputText } from "../../form";
import ArrowIcon from "./ArrowIcon";

const Close = (props) => {

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'delete' ? '' : 'delete')}>
        <ArrowIcon show={props.showMore === 'delete'} />
        Close this {props.type}
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'delete' ? 'fit-content' : 0 }}>
        <InputText name={props.name} text={props.text} setText={props.setText} />
        <div className="form-close" onClick={props.close}>{props.closeName}</div>
      </div>
    </div>
  );
}

export default Close;