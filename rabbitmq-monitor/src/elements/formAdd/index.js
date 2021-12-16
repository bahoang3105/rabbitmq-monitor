import { useState } from "react";
import AutoDelete from "./AutoDelete";
import Durable from "./Durable";
import './formAdd.css'
import Name from "./Name";
import Title from "./Title";
import Type from "./Type";
import Args from "./Args";
import Notice from "./Notice";
import Internal from "./Internal";
import Submit from "./Submit";
import { putAPI } from "../../api";

const FormAdd = (props) => {
  const [name, setName] = useState('');
  const [type, setType] = useState(props.type[0]);
  const [durability, setDurability] = useState(true);
  const [autoDelete, setAutoDelete] = useState(false);
  const [args, setArgs] = useState('{\n\t\n}');
  const [internal, setInternal] = useState(false);
  const [displayFormAdd, setDisplayFormAdd] = useState(false);
  const [notice, setNotice] = useState('');

  const isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const submit = async () => {
    if(name.length === 0) {
      setNotice('You need to type name');
    } else if (!isJson(args) && args !== '') {
      setNotice('You need to type JSON in arguments');
    } else {
      try {
        let data = {};
        if(props.typeAdd === 'exchange') {
          data = {
            type,
            auto_delete: autoDelete,
            durable: durability,
            internal,
            arguments: args === '' ? {} : JSON.parse(args)
          };
        }
        if(props.typeAdd === 'queue') {
          switch(type) {
            case 'Classic': {
              const handleArgs = args === '' ? {} : JSON.parse(args);
              data = {
                auto_delete: false,
                durable: true,
                arguments: handleArgs
              };
              break;
            }
            case 'Quorum': {
              const handleArgs = args === '' ? { "x-queue-type":"quorum" } : {...JSON.parse(args), "x-queue-type":"quorum" };
              data = {
                auto_delete: false,
                durable: true,
                arguments: handleArgs
              };
              break;
            }
            case 'Stream': {
              const handleArgs = args === '' ? { "x-queue-type":"stream" } : {...JSON.parse(args), "x-queue-type":"stream" };
              data = {
                auto_delete: false,
                durable: true,
                arguments: handleArgs
              };
              break;
            }
            default:
              break;
          }
        }

        await putAPI('/' + props.typeAdd + 's/%2F/' + name, data);
        setNotice('');
        setName('');
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <div className='form-add'>
      <Title setDisplayFormAdd={setDisplayFormAdd} displayFormAdd={displayFormAdd} typeAdd={props.typeAdd} />
      <div className="form-add-body" style={{ height: displayFormAdd ? 'fit-content' : 0 }}>
        {props.typeAdd === 'exchange' && <>
          <Name name={name} setName={setName} />
          <Type type={type} setType={setType} types={props.type} />
          <Durable durability={durability} setDurability={setDurability} />
          <AutoDelete autoDelete={autoDelete} setAutoDelete={setAutoDelete} title='If yes, the exchange will delete itself after at least one queue or exchange has been bound to this one, and then all queues or exchanges have been unbound.' />
          <Internal internal={internal} setInternal={setInternal} />
          <Args args={args} setArgs={setArgs} />
        </>}
        {props.typeAdd === 'queue' && <>
          <Type type={type} setType={setType} types={props.type} />
          {type === 'Classic' && <>
            <Name name={name} setName={setName} />
            <Durable durability={durability} setDurability={setDurability} />
            <AutoDelete autoDelete={autoDelete} setAutoDelete={setAutoDelete} title='If yes, the queue will delete itself after at least one consumer has connected, and then all consumers have disconnected.' />
            <Args args={args} setArgs={setArgs} />
          </>}
          {(type === 'Quorum' || type === 'Stream') && <>
            <Name name={name} setName={setName} />
            <Args args={args} setArgs={setArgs} />
          </>}
        </>}
        {notice.length > 0 && <Notice notice={notice} />} 
        <Submit submit={submit} typeAdd={props.typeAdd} />
      </div>
    </div>
  );
}

export default FormAdd;