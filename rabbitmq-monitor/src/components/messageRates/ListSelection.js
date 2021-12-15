import Selection from "../Selection";

const ListSelection = (props) => {
  return (
    <div 
      className='list-selection-message-rate' 
      style={{ 
        width: props.width,
        marginTop: 40,
        marginLeft: 40,
      }}
    >
      <Selection name='Publish' value={props.publish} onChange={props.setPublish} id='publish' />
      <Selection name='Publisher confirm' value={props.publisherConfirm} onChange={props.setPublisherConfirm} id='publisher-confirm' />
      <Selection name='(auto ack) Deliver' value={props.deliverAuto} onChange={props.setDeliverAuto} id='deliver-auto' />
      <Selection name='(manual ack) Deliver' value={props.deliverManual} onChange={props.setDeliverManual} id='deliver-manual' />
      <Selection name='Consumer ack' value={props.consumerAck} onChange={props.setConsumerAck} id='consumer-ack' />
      <Selection name='(return) Unroutabel' value={props.unroutabelReturn} onChange={props.setUnroutabelReturn} id='unroutable-return' />
      <Selection name='(drop) Unroutabel' value={props.unroutabelDrop} onChange={props.setUnroutabelDrop} id='unroutable-drop' />
    </div>
  );
}

export default ListSelection;