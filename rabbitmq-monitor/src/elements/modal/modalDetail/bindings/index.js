import { useEffect, useState } from "react";
import { getAPI } from "../../../../api";
import { InputText, InputJSON } from "../../../form";
import ArrowIcon from '../ArrowIcon';
import TableBindings from "./TableBindings";

const Bindings = (props) => {

  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [show, setShow] = useState(false);
  const [bindingAdd, setBindingAdd] = useState('');
  const [typeBindingAdd, setTypeBindingAdd] = useState('queue');
  const [routingKey, setRoutingKey] = useState('');
  const [args, setArgs] = useState('{\n\t\n}');

  useEffect(() => {
    const getData = async () => {
      const getSource = getAPI('/exchanges/%2F/' + props.name +'/bindings/source');
      const getDestination = getAPI('/exchanges/%2F/' + props.name +'/bindings/destination');
      const [sources, destinations] = await Promise.all([getSource, getDestination]);
      setSources(sources);
      setDestinations(destinations);
    }
    getData();
  }, [props.name]);

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => setShow(!show)}>
        <ArrowIcon show={show} />
        Bindings
      </div>
      <div className="modal-detail-body font-size-15" style={{ height: show ? 'fit-content' : 0 }}>
        <div className="bindings-body">
          <TableBindings type='From' data={destinations} />
          <div>This {props.type}</div>
          <TableBindings type='To' data={sources} />
        </div>
        <div>Add binding from this {props.type}</div>
        <InputText 
          name={
            <select value={typeBindingAdd} onChange={e => setTypeBindingAdd(e.target.value)}>
              {props.type === 'exchange' && <option value='queue'>To queue</option>}
              <option value='exchange'>To exchange</option>
            </select>
          }
          text={bindingAdd} 
          setText={setBindingAdd} 
        />
        <InputText name='Routing key' text={routingKey} setText={setRoutingKey} />
        <InputJSON name='Arguments' args={args} setArgs={setArgs} />
      </div>
    </div>
  );
}

export default Bindings;