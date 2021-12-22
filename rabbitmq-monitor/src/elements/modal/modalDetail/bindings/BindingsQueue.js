import { useEffect, useState } from "react";
import { getAPI, postAPI } from "../../../../api";
import { InputText, InputJSON, Submit, Notice } from "../../../form";
import TableBindings from "./TableBindings";

const BindingsQueue = (props) => {

  const [bindings, setBindings] = useState([]);
  const [bindingAdd, setBindingAdd] = useState('');
  const [routingKey, setRoutingKey] = useState('');
  const [args, setArgs] = useState('{\n\t\n}');
  const [notice, setNotice] = useState('');

  const getData = async () => {
    const bindings = await getAPI('/queues/%2F/' + props.name +'/bindings/');
    setBindings(bindings);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = async () => {
    const result = await postAPI(`/bindings/%2F/e/${bindingAdd}/q/${props.name}`);
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
        <TableBindings type='From' data={bindings} name={props.name} isQueue={true} getData={getData} />
        <div>This queue</div>
      </div>
      <div className="title-add-binding">Add binding to this queue</div>
      <InputText name = 'From exchange' text={bindingAdd} setText={setBindingAdd} />
      <InputText name='Routing key' text={routingKey} setText={setRoutingKey} />
      <InputJSON name='Arguments' args={args} setArgs={setArgs} />
      <Notice notice={notice} />
      <Submit submitName='Bind' submit={submit} />
    </>
  );
}

export default BindingsQueue;