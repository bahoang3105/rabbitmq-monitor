import { useEffect, useState } from "react";
import { getAPI, postAPI } from "../../../../api";
import { InputText, InputJSON, Submit, Notice } from "../../../form";
import TableBindings from "./TableBindings";
import { ImArrowRight } from 'react-icons/im';

const BindingsExchange = (props) => {

  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [bindingAdd, setBindingAdd] = useState('');
  const [typeBindingAdd, setTypeBindingAdd] = useState('q');
  const [routingKey, setRoutingKey] = useState('');
  const [args, setArgs] = useState('{\n\t\n}');
  const [notice, setNotice] = useState('');

  const getData = async () => {
    const getSource = getAPI('/exchanges/%2F/' + props.name +'/bindings/source');
    const getDestination = getAPI('/exchanges/%2F/' + props.name +'/bindings/destination');
    const [sources, destinations] = await Promise.all([getSource, getDestination]);
    setSources(sources);
    setDestinations(destinations);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async () => {
    const result = await postAPI(`/bindings/%2F/e/${props.name}/${typeBindingAdd}/${bindingAdd}`);
    if(!result) {
      getData();
      setRoutingKey('');
      setBindingAdd('');
      setArgs('{\n\t\n}');
      setNotice('');
    } else {
      setNotice(result.response?.data?.reason);
    }
  }

  return (
    <>
      <div className="bindings-body">
        <TableBindings type='From' name={props.name} data={destinations} isQueue={false} getData={getData} />
        <ImArrowRight className='align-middle' style={{ fontSize: 25, color: 'rgb(100, 100, 100)' }} />
        <div className='align-middle' style={{ border: '1px solid rgb(180, 180, 180)', padding: 8, borderRadius: 10 }}>
          This exchange
        </div>
        <ImArrowRight className='align-middle' style={{ fontSize: 25, color: 'rgb(100, 100, 100)' }} />
        <TableBindings type='To' name={props.name} data={sources} isQueue={false} getData={getData} />
      </div>
      <div className="title-add-binding">Add binding from this exchange</div>
      <InputText 
        name={
          <select value={typeBindingAdd} onChange={e => setTypeBindingAdd(e.target.value)}>
            <option value='q'>To queue</option>
            <option value='e'>To exchange</option>
          </select>
        }
        text={bindingAdd} 
        setText={setBindingAdd} 
      />
      <InputText name='Routing key' text={routingKey} setText={setRoutingKey} />
      <InputJSON name='Arguments' args={args} setArgs={setArgs} />
      <Notice notice={notice} />
      <Submit submitName='Bind' submit={submit} />
    </>
  );
}

export default BindingsExchange;