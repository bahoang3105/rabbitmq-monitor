import ArrowIcon from '../ArrowIcon';
import BindingsExchange from "./BindingsExchange";
import BindingsQueue from './BindingsQueue';

const Bindings = (props) => {

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'binding' ? '' : 'binding')}>
        <ArrowIcon show={props.showMore === 'binding'} />
        Bindings
      </div>
      <div className="modal-detail-body font-size-15" style={{ height: props.showMore === 'binding' ? 'fit-content' : 0 }}>
        {props.type === 'exchange' ? 
          <BindingsExchange name={props.name} /> : <BindingsQueue name={props.name} />}
      </div>
    </div>
  );
}

export default Bindings;