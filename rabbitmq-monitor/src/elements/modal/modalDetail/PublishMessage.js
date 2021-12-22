import { useState } from "react";
import { postAPI } from "../../../api";
import { InputJSON, InputText, isJSON, Notice, Payload, Submit } from "../../form";
import ArrowIcon from "./ArrowIcon";

const PublishMessage = (props) => {
  const [headers, setHeaders] = useState('{\n\t\n}');
  const [properties, setProperties] = useState('{\n\t\n}');
  const [payload, setPayload] = useState('');
  const [routingKey, setRoutingKey] = useState('');
  const [notice, setNotice] = useState('');

  const submit = async () => {
    if(!isJSON(headers)) {
     setNotice('You need to type JSON in headers');   
    } else if(!isJSON(properties)) {
      setNotice('You need to type JSON in properties');
    } else {
      const publishMessage = await postAPI('/exchanges/%2F/' + props.name + '/publish', {
        properties: properties === '' ? {} : JSON.parse(properties),
        routing_key: routingKey,
        payload,
        payload_encoding: 'string',
      }, {
        headers: headers === '' ? {} : JSON.parse(headers),
      });
      if(!publishMessage.routed) {
        alert('Message published, but not routed.');
      }
    }
  }

  return (
    <div className="modal-detail">
      <div className="modal-detail-part" onClick={() => props.setShowMore(props.showMore === 'publish' ? '' : 'publish')}>
        <ArrowIcon show={props.showMore === 'publish'} />
        Publish message
      </div>
      <div className="modal-detail-body font-size-14" style={{ height: props.showMore === 'publish' ? 'fit-content' : 0 }}>
        <div className="form-add-body font-size-15">
          {props.type === 'exchange' && <InputText name='Routing key' text={routingKey} setText={setRoutingKey} />}
          <InputJSON name='Headers' args={headers} setArgs={setHeaders} />
          <InputJSON name='Properties' args={properties} setArgs={setProperties} />
          <Payload payload={payload} setPayload={setPayload} />
          {notice.length > 0 && <Notice notice={notice} />}
          <Submit submit={submit} submitName='Publish message' />
        </div>
      </div>
    </div>
  );
}

export default PublishMessage;